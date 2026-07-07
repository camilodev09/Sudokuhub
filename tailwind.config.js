/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        carbon: '#000C43',
        graphite: '#050714',
        cian: '#00FFFF',
        tactical: '#3CF73D',
        lilac: '#FF00FF',
        cyber: '#888888',
        error: '#FF4545',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
        orbitron: ['Orbitron', 'sans-serif'],
      },
      boxShadow: {
        'glow-cian': '0 0 15px rgba(0, 255, 255, 0.6)',
        'glow-tactical': '0 0 15px rgba(60, 247, 61, 0.6)',
        'glow-lilac': '0 0 15px rgba(255, 0, 255, 0.6)',
        'cyber-card': '0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid-size': '20px 20px',
      }
    },
  },
  plugins: [],
}
