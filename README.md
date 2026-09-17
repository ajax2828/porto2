# Portofolio Ihsanzaki

Website portofolio pribadi dengan gaya Google Stitch / Material Design 3, dibangun dengan **Next.js (App Router) + Tailwind CSS v4**.

## Teknologi

- Next.js 15 (App Router, SSR, TypeScript)
- React 19
- Tailwind CSS v4 (`@tailwindcss/postcss`)
- Motion for React (animasi scroll / reduced-motion aware)
- Lucide React (ikon)
- shadcn/ui-style komponen (Button) dengan CVA + tailwind-merge

## Menjalankan

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # produksi build
npm run start      # menjalankan hasil build
npm run lint       # eslint
```

## Struktur

```
app/                # halaman & layout Next.js (App Router)
  layout.tsx        # HTML shell + tema (dark/light) + metadata
  page.tsx          # halaman utama portofolio
  globals.css       # Tailwind v4 + design system (token warna/bayangan)
components/         # komponen React
  ui/button.tsx
  portfolio/PortfolioPage.tsx
  theme/ThemeToggle.tsx
data/portfolio.ts   # semua konten (nama, proyek, pengalaman, tulisan) — ganti di sini
lib/                # util
public/             # favicon, robots.txt
```

## Mengubah konten

Edit `data/portfolio.ts` — semua data (nama, intro, skills, proyek, pengalaman, artikel) ada di satu file tanpa perlu menyentuh komponen.
