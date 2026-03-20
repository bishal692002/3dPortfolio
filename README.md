# Portfolio

A premium, cinematic 3D portfolio website built with Next.js and Framer Motion. Showcases projects, skills, education, certifications, and contact information with smooth scroll-driven animations and immersive visual design.

## Features

✨ **Premium Design**
- Dark theme with zinc/black palette
- Radial gradients and subtle glow effects
- Editorial-style typography and spacing

🎬 **Scroll-Driven Animations**
- Sequential hero text transitions
- Smooth scroll indicator guidance
- Project showcase with alternating split layouts
- Scroll-triggered animations with Framer Motion

📱 **Responsive & Modern**
- Next.js 14 with TypeScript
- TailwindCSS for styling
- Intersection Observer for accurate scroll detection
- Mobile-optimized

📊 **Content Sections**
- Hero with split text layout (Name / Role)
- Immersive scrollytelling ("Engineering systems" / "Designing experiences")
- Projects showcase with 5 featured projects
- Education timeline
- Skills categorization (Cloud/DevOps, Programming, Tools)
- Positions & experience
- Certifications (3-tier layout)
- Contact section with email, phone, LinkedIn, GitHub
- Footer with credits

## Tech Stack

- **Framework:** Next.js 14.2.29
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Animations:** Framer Motion
- **Icons:** Heroicons
- **Optimization:** Next.js Image optimization

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/bishal692002/3dPortfolio.git
cd 3dPortfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── ScrollyCanvas.tsx      # 3D canvas animation
│   ├── Overlay.tsx            # Hero text & scroll indicator
│   ├── Projects.tsx           # Projects section
│   ├── ProjectShowcase.tsx    # Individual project cards
│   ├── CredibilitySections.tsx # Education, Skills, Positions, Certifications
│   ├── Contact.tsx            # Contact section
│   └── Footer.tsx             # Footer
public/
└── project-visuals/           # Project images
```

## Features in Detail

### Hero Section
Split layout with "Bishal Biswas" on the left and "Software Developer" on the right. Sequential fade-out/fade-in transition to "Engineering systems" and "Designing experiences" on scroll.

### Scroll Indicator
Gentle animated arrow with "Scroll to explore" text. Visible during hero, scrollytelling, and projects sections. Fades out when entering credentials sections.

### Projects
- 5 featured projects with alternating left/right layouts
- High-res images with Next Image optimization
- Project details, tech stack, and links
- Color-coded backgrounds with radial gradients

### Credibility Sections
- **Education:** BCA & MCA progression
- **Skills:** 3-column grid (Cloud/DevOps, Programming, Tools)
- **Positions:** 2-column layout highlighting impact
- **Certifications:** Tier-based (Prominent → Standard → Scrollable)

## Contact

- 📧 **Email:** bishal692002@gmail.com
- 📱 **Phone:** +91-9531632450
- 💼 **LinkedIn:** linkedin.com/in/bishal2002
- 🐙 **GitHub:** github.com/bishal692002

## License

This project is open source and available under the MIT License.

## Author

**Bishal Biswas**  
Software Developer | Full-Stack Engineer | Cloud & DevOps Specialist
