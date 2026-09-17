import {
  Blocks,
  Bot,
  Braces,
  ChartNoAxesCombined,
  Component,
  Figma,
  Layers3,
  Sparkles,
} from "lucide-react";

export const profile = {
  name: "Muhammad Ihsanzaki",
  shortName: "MI",
  roles: ["Software Engineer", "Full-Stack Developer", "AI Engineer"],
  intro:
    "Saya seorang Software Engineer yang membangun produk digital yang cepat, rapi, dan menyenangkan untuk digunakan.",
  bio: "Software Engineer berbasis di Jakarta. Saya menyatukan kode yang bersih, sistem desain, dan teknologi AI menjadi produk digital yang berguna bagi manusia.",
  email: "hello@ihsanzaki.dev",
  location: "Jakarta, Indonesia",
  availability: "Tersedia untuk proyek pilihan",
};

export const skills = [
  "Product Strategy",
  "UI/UX Design",
  "Design Systems",
  "React",
  "TypeScript",
  "Generative AI",
  "Prototyping",
];

export const tools = [
  { name: "Figma", icon: Figma },
  { name: "React", icon: Component },
  { name: "TypeScript", icon: Braces },
  { name: "AI Studio", icon: Bot },
];

export const achievements = [
  { value: "6+", label: "Tahun berkarya" },
  { value: "32", label: "Produk dirilis" },
  { value: "8", label: "Penghargaan" },
];

export const projects = [
  {
    title: "Nusa Finance",
    category: "Fintech · 2026",
    description:
      "Pengalaman finansial personal yang mengubah data rumit menjadi keputusan harian sederhana.",
    stack: ["Product Design", "React", "AI"],
    accent: "blue",
    icon: ChartNoAxesCombined,
    metric: "+41% aktivasi",
  },
  {
    title: "Ruang Belajar",
    category: "Edtech · 2025",
    description:
      "Platform belajar adaptif yang menyusun materi berdasarkan ritme dan tujuan tiap pelajar.",
    stack: ["UX Research", "Design System", "Next.js"],
    accent: "yellow",
    icon: Layers3,
    metric: "120K pelajar",
  },
  {
    title: "Lensa AI",
    category: "Creative AI · 2025",
    description:
      "Asisten kreatif multimodal untuk membantu tim menemukan, menguji, dan menyimpan ide terbaik.",
    stack: ["Gen AI", "Prototyping", "TypeScript"],
    accent: "purple",
    icon: Sparkles,
    metric: "2× lebih cepat",
  },
  {
    title: "Satu Design System",
    category: "Enterprise · 2024",
    description:
      "Sistem desain lintas platform yang menyelaraskan 11 squad dalam satu bahasa produk.",
    stack: ["Tokens", "Accessibility", "Figma"],
    accent: "green",
    icon: Blocks,
    metric: "11 squad",
  },
];

export const experiences = [
  {
    period: "2024 — Sekarang",
    role: "Lead Product Designer",
    company: "Studio Utama",
    detail: "Memimpin strategi produk AI dan sistem desain untuk rangkaian produk B2B.",
  },
  {
    period: "2021 — 2024",
    role: "Senior Product Designer",
    company: "Nusantara Labs",
    detail: "Mendesain pengalaman finansial inklusif bersama tim produk multidisiplin.",
  },
  {
    period: "2019 — 2021",
    role: "UI/UX Designer",
    company: "Kreasi Digital",
    detail: "Membangun produk tahap awal untuk startup pendidikan dan layanan publik.",
  },
];

export const articles = [
  {
    date: "18 Agu 2026",
    title: "Merancang AI yang terasa dapat dipercaya",
    excerpt: "Prinsip praktis untuk memberi pengguna kontrol, konteks, dan rasa aman.",
    accent: "pink",
  },
  {
    date: "02 Jul 2026",
    title: "Design tokens bukan sekadar warna",
    excerpt: "Bagaimana token menyatukan keputusan desain dan engineering dalam skala besar.",
    accent: "blue",
  },
  {
    date: "14 Mei 2026",
    title: "Catatan dari 20 sesi usability test",
    excerpt: "Pola kecil yang berulang, tetapi sering terlewat saat kita membangun terlalu cepat.",
    accent: "green",
  },
];
