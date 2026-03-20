'use client';

import { useEffect, useRef, useCallback, useState } from 'react';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

// ── Configuration ────────────────────────────────────────────────────────────
const TOTAL_FRAMES = 192;
const SEQUENCE_PATH = (index: number) =>
  `/sequence/frame_${String(index).padStart(3, '0')}_delay-0.041s.webp`;
const FALLBACK_FRAME_COUNT = TOTAL_FRAMES;

// ── Helpers ──────────────────────────────────────────────────────────────────
function drawCover(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  canvasW: number,
  canvasH: number
) {
  const imgAspect = img.naturalWidth / img.naturalHeight;
  const canvasAspect = canvasW / canvasH;

  let sx = 0, sy = 0, sw = img.naturalWidth, sh = img.naturalHeight;

  if (imgAspect > canvasAspect) {
    // Image is wider — crop sides
    sw = img.naturalHeight * canvasAspect;
    sx = (img.naturalWidth - sw) / 2;
  } else {
    // Image is taller — crop top/bottom
    sh = img.naturalWidth / canvasAspect;
    sy = (img.naturalHeight - sh) / 2;
  }

  ctx.drawImage(img, sx, sy, sw, sh, 0, 0, canvasW, canvasH);
}

// ── Component ─────────────────────────────────────────────────────────────────
interface ScrollyCanvasProps {
  onProgress?: (progress: number) => void;
  scrollHeightVh?: number;
}

export default function ScrollyCanvas({
  onProgress,
  scrollHeightVh = 500,
}: ScrollyCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const rafRef = useRef<number>(0);
  const [frameCount, setFrameCount] = useState(FALLBACK_FRAME_COUNT);
  const [isDetectingFrames, setIsDetectingFrames] = useState(true);
  const [loadedCount, setLoadedCount] = useState(0);
  const [hasRenderableFrames, setHasRenderableFrames] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Map scroll progress (0–1) → frame index
  const frameIndex = useTransform(scrollYProgress, (latest) => {
    if (frameCount <= 1) return 0;
    return latest * (frameCount - 1);
  });

  const probeFrame = useCallback((index: number) => {
    return new Promise<boolean>((resolve) => {
      const probe = new window.Image();
      probe.onload = () => resolve(true);
      probe.onerror = () => resolve(false);
      probe.src = SEQUENCE_PATH(index);
    });
  }, []);

  const detectFrameCount = useCallback(async () => {
    try {
      const firstExists = await probeFrame(0);
      if (!firstExists) {
        return 0;
      }

      const maxExists = await probeFrame(TOTAL_FRAMES - 1);
      if (maxExists) {
        return TOTAL_FRAMES;
      }

      let discovered = 0;
      for (let i = 0; i < TOTAL_FRAMES; i++) {
        // Stop at first gap assuming sequential naming.
        const exists = await probeFrame(i);
        if (!exists) break;
        discovered = i + 1;
      }
      return discovered;
    } catch {
      return FALLBACK_FRAME_COUNT;
    }
  }, [probeFrame]);

  // ── Preload frames ────────────────────────────────────────────────────────
  useEffect(() => {
    let isMounted = true;

    const preloadFrames = async () => {
      const detectedCount = await detectFrameCount();
      if (!isMounted) return;

      setIsDetectingFrames(false);
      setFrameCount(detectedCount || 0);

      if (detectedCount <= 0) {
        framesRef.current = [];
        setHasRenderableFrames(false);
        return;
      }

      const images: HTMLImageElement[] = new Array(detectedCount);
      let loaded = 0;

      const renderFirst = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx || !images[0]?.complete || images[0].naturalWidth <= 0) return;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawCover(ctx, images[0], canvas.width, canvas.height);
        setHasRenderableFrames(true);
      };

      for (let i = 0; i < detectedCount; i++) {
        const img = new window.Image();
        img.src = SEQUENCE_PATH(i); // frames are 0-indexed: frame_000_delay-0.041s.webp
        img.onload = () => {
          if (!isMounted) return;
          loaded += 1;
          setLoadedCount(loaded);
          if (loaded === 1) renderFirst();
        };
        img.onerror = () => {
          if (!isMounted) return;
          setLoadedCount((count) => count);
        };
        images[i] = img;
      }

      framesRef.current = images;
    };

    preloadFrames();

    return () => {
      isMounted = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [detectFrameCount]);

  // ── Resize handler ────────────────────────────────────────────────────────
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Redraw current frame
      const ctx = canvas.getContext('2d');
      const frame = framesRef.current[currentFrameRef.current];
      if (ctx && frame?.complete && frame.naturalWidth > 0) {
        drawCover(ctx, frame, canvas.width, canvas.height);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ── Render frame on scroll ────────────────────────────────────────────────
  const renderFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    if (frameCount <= 0) return;

    const clampedIndex = Math.min(Math.max(Math.round(index), 0), frameCount - 1);
    const img = framesRef.current[clampedIndex];

    if (img && img.complete && img.naturalWidth > 0) {
      currentFrameRef.current = clampedIndex;
      drawCover(ctx, img, canvas.width, canvas.height);
    }
  }, [frameCount]);

  useMotionValueEvent(frameIndex, 'change', (latest) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => renderFrame(latest));
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    onProgress?.(latest);
  });

  return (
    <div ref={containerRef} style={{ height: `${scrollHeightVh}vh` }} className="relative w-full">
      {/* Sticky canvas fills the viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
          style={{ display: 'block' }}
        />
        {(isDetectingFrames || (frameCount > 0 && loadedCount < frameCount)) && (
          <div className="absolute inset-0 z-20 flex items-end justify-center pb-16 pointer-events-none">
            <p className="glass rounded-full px-5 py-2 text-xs tracking-[0.25em] uppercase text-zinc-200">
              {isDetectingFrames
                ? 'Detecting sequence'
                : `Loading frames ${loadedCount}/${frameCount}`}
            </p>
          </div>
        )}
        {!isDetectingFrames && frameCount === 0 && (
          <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
            <p className="max-w-md text-center text-sm tracking-[0.16em] uppercase text-zinc-300">
              Add frame_000_delay-0.041s.webp to frame_191_delay-0.041s.webp inside public/sequence to enable canvas scrollytelling.
            </p>
          </div>
        )}
        {/* Dark vignette overlay for readability */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 40%, rgba(5,5,5,0.55) 100%)',
          }}
        />
      </div>
    </div>
  );
}
