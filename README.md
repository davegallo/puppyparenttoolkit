# 🐾 PuppyParent Toolkit

**Your Complete Toolkit for Raising a Happy, Healthy Puppy**

A comprehensive microsite designed for first-time dog owners, featuring interactive calculators, expert guides, and curated resources to navigate the journey of puppy parenthood with confidence.

![PuppyParent Toolkit](https://img.shields.io/badge/Made%20with-React%2019-61dafb?style=flat-square&logo=react) ![Tailwind CSS](https://img.shields.io/badge/Styled%20with-Tailwind%204-38bdf8?style=flat-square&logo=tailwindcss) ![TypeScript](https://img.shields.io/badge/Built%20with-TypeScript-3178c6?style=flat-square&logo=typescript)

---

## ✨ Features

### 🧮 Interactive Calculators
- **Puppy Feeding Calculator** - Personalized portion sizes and feeding schedules
- **Training Timeline** - Custom training roadmap with milestones
- **Vaccination Schedule** - Complete immunization timeline
- **Grooming Frequency** - Tailored grooming routines by coat type
- **Pet Insurance Cost** - Insurance plan comparison and cost estimates

### 📚 Educational Content
- Comprehensive puppy care guides
- Science-backed recommendations
- Expert tips for first-time owners
- Affiliate-curated product recommendations

### 🎨 Design
- **Soft Maximalism with Editorial Elegance** design philosophy
- Magazine-quality layout with Fraunces + Manrope typography
- Warm color palette: Terracotta, Sage Green, Cream
- Fully responsive and mobile-optimized

### 🔍 SEO Optimized
- Meta tags and structured data
- Targeted keywords: "puppy care guide", "puppy feeding calculator", etc.
- Fast loading with Vite build optimization

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/puppyparenttoolkit.git
cd puppyparenttoolkit

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Visit `http://localhost:3000` to see the site.

### Build for Production

```bash
# Build the project
pnpm build

# Preview production build
pnpm preview
```

---

## 📁 Project Structure

```
puppyparenttoolkit/
├── client/
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── components/
│   │   │   ├── calculators/ # 5 interactive calculators
│   │   │   ├── ui/          # shadcn/ui components
│   │   │   └── SEO.tsx      # SEO meta tags component
│   │   ├── pages/
│   │   │   ├── Home.tsx     # Landing page
│   │   │   ├── Calculators.tsx
│   │   │   └── About.tsx
│   │   ├── contexts/        # React contexts (Theme)
│   │   ├── hooks/           # Custom React hooks
│   │   ├── lib/             # Utility functions
│   │   ├── index.css        # Global styles & design tokens
│   │   ├── App.tsx          # Route configuration
│   │   └── main.tsx         # App entry point
│   └── index.html
├── server/                  # Placeholder for future backend
├── shared/                  # Shared constants
├── package.json
├── vite.config.ts
└── tsconfig.json
```

---

## 🛠️ Tech Stack

- **Framework:** React 19
- **Routing:** Wouter
- **Styling:** Tailwind CSS 4
- **UI Components:** shadcn/ui + Radix UI
- **Icons:** Lucide React
- **Build Tool:** Vite
- **Language:** TypeScript
- **Package Manager:** pnpm

---

## 🎯 Key Calculators

### 1. Feeding Calculator
Calculates daily food amounts, meal frequency, and calorie needs based on:
- Puppy age and weight
- Breed size (small, medium, large, giant)
- Activity level
- Food type (dry, wet, raw)

### 2. Training Timeline
Generates personalized training schedules for:
- Potty training
- Crate training
- Basic commands
- Leash training
- Socialization
- Bite inhibition

### 3. Vaccination Schedule
Creates complete immunization timelines including:
- Core vaccines (DHPP, Rabies)
- Non-core vaccines (Bordetella, Lyme, Leptospirosis)
- Cost estimates
- Appointment reminders

### 4. Grooming Frequency
Recommends grooming schedules for:
- Brushing
- Bathing
- Nail trimming
- Ear cleaning
- Teeth brushing
- Professional grooming

### 5. Insurance Cost Calculator
Estimates pet insurance costs based on:
- Puppy age and breed
- Location
- Coverage level
- Deductible and reimbursement rates
- Breed-specific health risks

---

## 💰 Monetization

The site uses affiliate marketing to monetize while providing value:

- **Pet Supply Affiliates:** Chewy, Petco, Innovet Pet
- **Insurance Affiliates:** ASPCA Pet Insurance, Embrace
- **Training Resources:** Online courses and equipment

All affiliate relationships are transparently disclosed on the About page.

---

## 🎨 Design Philosophy

**Soft Maximalism with Editorial Elegance**

- Magazine-inspired layouts with intentional white space
- Gradient mesh backgrounds (terracotta, sage, cream)
- Decorative corner flourishes and spot graphics
- Fraunces (display) + Manrope (body) typography
- Refined micro-interactions and purposeful animations

---

## 📈 SEO Strategy

**Target Keywords:**
- puppy care guide
- puppy feeding calculator
- puppy training timeline
- puppy vaccination schedule
- pet insurance cost calculator
- first time dog owner

**Optimization:**
- Semantic HTML structure
- Meta tags and Open Graph
- Structured data (Schema.org)
- Fast loading (Vite optimization)
- Mobile-first responsive design

---

## 🚢 Deployment

### Cloudflare Pages (Recommended)

1. Push code to GitHub
2. Connect repository to Cloudflare Pages
3. Configure build settings:
   - **Build command:** `pnpm install && pnpm run build`
   - **Build output:** `dist/public`
   - **Framework preset:** Vite

See [DEPLOYMENT_GUIDE.md](../DEPLOYMENT_GUIDE.md) for detailed instructions.

### Other Platforms

The site can be deployed to any static hosting platform:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

---

## 🤝 Contributing

This is a personal project, but suggestions and feedback are welcome!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## 📄 License

MIT License - feel free to use this project as inspiration for your own niche microsites.

---

## 🐶 About

PuppyParent Toolkit was created to help first-time dog owners navigate the exciting but overwhelming journey of raising a puppy. Our mission is to provide science-backed tools and trustworthy information that empower puppy parents to make informed decisions.

**Made with ❤️ for puppy parents everywhere.**

---

## 📞 Support

For questions or feedback about the site:
- Open an issue on GitHub
- Visit the About page for more information

---

## 🔮 Roadmap

- [ ] Add comprehensive guide pages (Nutrition, Training, Health, Grooming)
- [ ] Implement newsletter signup
- [ ] Create blog section with weekly articles
- [ ] Add mobile hamburger menu
- [ ] Implement calculator result export (PDF/email)
- [ ] Add social sharing buttons
- [ ] Create FAQ section
- [ ] Build resource library

---

**Star ⭐ this repo if you find it helpful!**
