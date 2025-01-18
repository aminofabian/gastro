import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: '#005B94',
  				50: '#E6F3FF',
  				100: '#CCE7FF',
  				200: '#99CFFF',
  				300: '#66B7FF',
  				400: '#339FFF',
  				500: '#005B94',
  				600: '#004B7A',
  				700: '#003B61',
  				800: '#002B47',
  				900: '#001B2E',
  				foreground: '#FFFFFF'
  			},
  			secondary: {
  				DEFAULT: '#39B54A',
  				50: '#E8F7EA',
  				100: '#D1EFD5',
  				200: '#A3DFAB',
  				300: '#75CF81',
  				400: '#47BF57',
  				500: '#39B54A',
  				600: '#2E943C',
  				700: '#23732E',
  				800: '#185220',
  				900: '#0D3112',
  				foreground: '#FFFFFF'
  			},
  			accent: {
  				DEFAULT: '#FF6B6B',
  				foreground: '#FFFFFF'
  			},
  			muted: {
  				DEFAULT: '#F5F7FA',
  				foreground: '#64748B'
  			},
  			destructive: {
  				DEFAULT: '#FF4444',
  				foreground: '#FFFFFF'
  			},
  			border: '#E2E8F0',
  			input: '#F1F5F9',
  			ring: '#005B94',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: '0.75rem',
  			md: '0.5rem',
  			sm: '0.25rem'
  		},
  		fontFamily: {
  			sans: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
  			heading: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
  		},
  		boxShadow: {
  			'soft': '0 2px 15px rgba(0, 0, 0, 0.05)',
  			'medium': '0 4px 20px rgba(0, 0, 0, 0.1)',
  		},
  	}
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
} satisfies Config;
