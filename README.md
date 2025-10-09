# 🎨 Triumph Painters - Professional Painting Services Website

A modern, responsive website for Triumph Painters, a professional painting contractor serving Miami, Florida and surrounding areas.

![Triumph Painters Website](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-15.3.2-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)

## 🌟 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Responsive Design**: Perfect display on desktop, tablet, and mobile devices
- **SEO Optimized**: Comprehensive metadata, structured data, Google Analytics ready
- **Professional UI**: Deep blue and orange branding with shadcn/ui components
- **Complete Service Pages**: Commercial, Residential, Industrial, Epoxy Flooring
- **Lead Generation**: Contact form with validation and quote requests
- **Local Focus**: Optimized for Miami-Dade, Broward, and South Florida market

## 🏗️ Pages Structure

- **Homepage** (`/`) - Hero section, services overview, company information
- **Commercial Painting** (`/commercial`) - Business painting services with specialty sections
- **Residential Painting** (`/residential`) - Home painting services with testimonials
- **Industrial Painting** (`/industrial`) - Specialized industrial and manufacturing services
- **Epoxy Flooring** (`/epoxy`) - Professional flooring installation and repair
- **Contact** (`/contact`) - Quote request form with service selection

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ or Bun runtime
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/triumph-painters.git
   cd triumph-painters
   ```

2. **Install dependencies**
   ```bash
   bun install
   # or
   npm install
   ```

3. **Run development server**
   ```bash
   bun run dev
   # or
   npm run dev
   ```

4. **Open browser**
   Visit [http://localhost:3000](http://localhost:3000)

## 📦 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Package Manager**: Bun
- **Linting**: ESLint + Biome
- **Deployment**: Ready for Netlify/Vercel

## 🎨 Design System

- **Primary Color**: Deep Blue (`#1e3a8a`)
- **Accent Color**: Orange (`#ea580c`)
- **Typography**: System fonts with proper hierarchy
- **Components**: Consistent shadcn/ui components
- **Layout**: Mobile-first responsive design

## 🌐 Deployment

### Deploy to Netlify (Recommended)

1. **Build the project**
   ```bash
   bun run build
   ```

2. **Deploy to Netlify**
   - Connect your GitHub repository to Netlify
   - Set build command: `bun run build`
   - Set publish directory: `out` (for static export)

### Environment Variables

Create a `.env.local` file for local development:
```env
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

## 📁 Project Structure

```
triumph-painters/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── commercial/         # Commercial painting page
│   │   ├── residential/        # Residential painting page
│   │   ├── industrial/         # Industrial painting page
│   │   ├── epoxy/             # Epoxy flooring page
│   │   ├── contact/           # Contact form page
│   │   ├── layout.tsx         # Root layout with SEO
│   │   └── page.tsx           # Homepage
│   ├── components/            # Reusable components
│   │   ├── ui/               # shadcn/ui components
│   │   └── Header.tsx        # Navigation header
│   └── lib/                  # Utilities
├── public/                   # Static assets
└── .same/                   # Development tracking
```

## 🛠️ Development Commands

```bash
# Start development server
bun run dev

# Build for production
bun run build

# Start production server
bun run start

# Run linting
bun run lint

# Type checking
bun run type-check
```

## 📊 SEO Features

- ✅ Optimized meta tags and Open Graph
- ✅ Structured data (LocalBusiness schema)
- ✅ Google Analytics 4 integration
- ✅ Sitemap ready
- ✅ Mobile-friendly design
- ✅ Fast loading performance

## 🤝 Contributing

This is a client project. For updates or modifications, please contact the development team.

## 📄 License

© 2025 Triumph Painters. All rights reserved.

---

**Built with ❤️ using [Same](https://same.new)**

## 📞 Contact Information

**Triumph Painters**
- 📍 1450 Brickell Bay Dr, Miami, FL 33131
- 📞 305-555-0123
- ✉️ info@triumphpainters.com
- 🌐 Service Area: Miami-Dade, Broward, 100+ mile radius
