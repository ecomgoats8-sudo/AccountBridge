# AccountBridge - Facebook Account Acquisition Platform

A modern, professional website for buying and selling Facebook accounts with transparent pricing and secure transactions.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Add your EmailJS credentials to .env
```

### Development

```bash
# Start development server
npm run dev
```

Visit `http://localhost:5173`

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Forms**: React Hook Form + Zod
- **Email**: EmailJS
- **Icons**: Lucide React
- **Routing**: React Router DOM

## 🌐 Deployment

This project is optimized for Vercel deployment. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

### Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/YOUR_REPO)

**Important**: Don't forget to add environment variables in Vercel dashboard!

## 🔐 Environment Variables

Required environment variables (see `.env.example`):

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
EMAILJS_PRIVATE_KEY=your_private_key
```

Get these from [EmailJS Dashboard](https://dashboard.emailjs.com/)

## 📁 Project Structure

```
agency-v2/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   │   └── ui/         # shadcn/ui components
│   ├── lib/            # Utilities and helpers
│   │   └── email.ts    # EmailJS configuration
│   ├── pages/          # Page components
│   └── main.tsx        # Application entry point
├── .env.example        # Environment variables template
├── vercel.json         # Vercel configuration
└── vite.config.ts      # Vite configuration
```

## 🎨 Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark mode optimized
- ✅ Contact form with email integration
- ✅ SEO optimized
- ✅ Fast page loads with Vite
- ✅ Type-safe with TypeScript
- ✅ Accessible UI components

## 📝 License

Private - All rights reserved

## 🤝 Support

For issues or questions, contact the development team.
