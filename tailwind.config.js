/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C98C8C",
        gold: "#C9A24D",
        soft: "#F9F2F2", // More red-toned soft background
        rose: "#E8B4B8",
        champagne: "#F7E7CE",
        blush: "#F4E4E6",
        warmWhite: "#FDF8F8", // Warm white with red undertones
        lightRose: "#F5ECEC" // Very light rose for subtle backgrounds
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
        script: ["Dancing Script", "cursive"]
      },
      backgroundImage: {
        'subtle-pattern': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23E8B4B8\" fill-opacity=\"0.08\"%3E%3Cpath d=\"m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        'floral-light': "url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23E8B4B8\" fill-opacity=\"0.06\"%3E%3Cpath d=\"M50 10c-2.5 0-4.5 2-4.5 4.5 0 1.5.8 2.8 2 3.6v3.4c-3.2.8-5.5 3.6-5.5 7s2.3 6.2 5.5 7v3.4c-1.2.8-2 2.1-2 3.6 0 2.5 2 4.5 4.5 4.5s4.5-2 4.5-4.5c0-1.5-.8-2.8-2-3.6v-3.4c3.2-.8 5.5-3.6 5.5-7s-2.3-6.2-5.5-7v-3.4c1.2-.8 2-2.1 2-3.6 0-2.5-2-4.5-4.5-4.5zM25 35c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5zM75 35c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5zM50 60c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        'rose-pattern': "url('data:image/svg+xml,%3Csvg width=\"80\" height=\"80\" viewBox=\"0 0 80 80\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23C98C8C\" fill-opacity=\"0.04\"%3E%3Cpath d=\"M40 20c-5.5 0-10 4.5-10 10 0 3 1.3 5.7 3.4 7.6-1.5 1.5-2.4 3.6-2.4 5.9 0 4.4 3.6 8 8 8s8-3.6 8-8c0-2.3-.9-4.4-2.4-5.9 2.1-1.9 3.4-4.6 3.4-7.6 0-5.5-4.5-10-10-10zm0 4c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6zm0 16c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        'vine-pattern': "url('data:image/svg+xml,%3Csvg width=\"120\" height=\"120\" viewBox=\"0 0 120 120\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg stroke=\"%23E8B4B8\" stroke-opacity=\"0.05\" stroke-width=\"1\"%3E%3Cpath d=\"M60 10c10 0 20 5 25 15-5-5-15-10-25-5s-15 15-10 25c-10-5-15-15-15-25s10-20 25-10z\"/%3E%3Cpath d=\"M20 60c0-10 5-20 15-25-5 5-10 15-5 25s15 15 25 10c-5 10-15 15-25 15s-20-10-10-25z\"/%3E%3Cpath d=\"M60 110c-10 0-20-5-25-15 5 5 15 10 25 5s15-15 10-25c10 5 15 15 15 25s-10 20-25 10z\"/%3E%3Cpath d=\"M100 60c0 10-5 20-15 25 5-5 10-15 5-25s-15-15-25-10c5-10 15-15 25-15s20 10 10 25z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
      }
    },
  },
  plugins: [],
}