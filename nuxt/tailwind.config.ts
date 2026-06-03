import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          0: '#07070a',
          1: '#0a0a0d',
          2: '#111114',
          3: '#18181d'
        },
        line: {
          DEFAULT: '#26262c',
          2: '#1a1a20'
        },
        bone: {
          DEFAULT: '#f1ece4',
          2: '#c8c3bb',
          3: '#7c7973'
        },
        amber: {
          DEFAULT: 'oklch(0.82 0.14 65)',
          d: 'oklch(0.72 0.16 55)'
        },
        rec: 'oklch(0.62 0.20 25)'
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'Times New Roman', 'serif'],
        sans: ['"Schibsted Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace']
      },
      transitionTimingFunction: {
        ease: 'cubic-bezier(.22,.61,.36,1)',
        'ease-slow': 'cubic-bezier(.16,.84,.3,1)'
      },
      letterSpacing: {
        tightest: '-0.02em',
        tighter: '-0.015em',
        wider2: '.14em',
        widest2: '.18em'
      }
    }
  },
  plugins: []
}
