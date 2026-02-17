# Greeting Card App

Aplikasi kartu ucapan interaktif yang dibangun dengan Next.js, Prisma, Supabase, Tailwind CSS, dan Framer Motion.

## Fitur

- 🎨 Background gradient animasi
- ✨ Glassmorphism card design
- 🎭 Animasi flip card dengan Framer Motion
- 📱 Responsive design
- 🗄️ Database dengan Prisma & Supabase

## Tech Stack

- **Next.js 15** - React Framework
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Prisma** - ORM
- **Supabase** - Database & Auth

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Setup environment variables:
- Copy `.env.example` ke `.env`
- Isi dengan credentials Supabase Anda

3. Initialize Prisma:
```bash
npx prisma generate
npx prisma db push
```

4. Run development server:
```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## Project Structure

```
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/       # React Components
│   │   └── GreetingCard.tsx
│   └── lib/             # Utility Functions
│       ├── prisma.ts
│       └── supabase.ts
├── prisma/
│   └── schema.prisma    # Database Schema
└── public/              # Static Assets
```

## Customization

Edit [src/components/GreetingCard.tsx](src/components/GreetingCard.tsx) untuk mengkustomisasi kartu ucapan Anda.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Prisma](https://www.prisma.io/docs)
- [Supabase](https://supabase.com/docs)
