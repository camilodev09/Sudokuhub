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
        carbon: '#0B0F19',
        graphite: '#131B2B',
        cian: '#00FF94',
        tactical: '#00FF94',
        lilac: '#A78BFA',
        cyber: '#888888',
        error: '#FF4545',
      },
      fontFamily: {
        syne: ['"Space Grotesk"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        orbitron: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-cian': '0 0 15px rgba(0, 255, 148, 0.4)',
        'glow-tactical': '0 0 15px rgba(0, 255, 148, 0.4)',
        'glow-lilac': '0 0 15px rgba(167, 139, 250, 0.4)',
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
