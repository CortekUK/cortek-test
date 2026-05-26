import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sora: ['Sora', 'sans-serif'],
				inter: ['Inter', 'sans-serif'],
			},
			maxWidth: {
				container: "1280px",
			},
			colors: {
				// ── Funnel palette (used by /get-started, scoped under .funnel-root) ──
				navy: {
					950: 'rgb(var(--navy-950-rgb, 10 15 30) / <alpha-value>)',
					900: 'rgb(var(--navy-900-rgb, 15 22 41) / <alpha-value>)',
					800: 'rgb(var(--navy-800-rgb, 21 29 56) / <alpha-value>)',
					700: 'rgb(var(--navy-700-rgb, 30 42 74) / <alpha-value>)',
					600: 'rgb(var(--navy-600-rgb, 42 58 92) / <alpha-value>)',
				},
				slate: {
					300: 'rgb(var(--slate-300-rgb, 203 213 225) / <alpha-value>)',
					400: 'rgb(var(--slate-400-rgb, 148 163 184) / <alpha-value>)',
					500: 'rgb(var(--slate-500-rgb, 100 116 139) / <alpha-value>)',
				},
				'brand-purple': {
					DEFAULT: '#6a38c2',
					light: '#7c4ad4',
				},
				'brand-blue': {
					DEFAULT: '#2d81f7',
					light: '#4c92f7',
				},
			'brand-cyan': {
					DEFAULT: '#4DD4FF',
				},
				gold: { 400: '#fbbf24' },
				'on-brand': '#ffffff',
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: {
					DEFAULT: 'hsl(var(--background))',
					light: 'hsl(var(--background-light))',
					card: 'hsl(var(--background-card))',
					section: 'hsl(var(--background-section))',
				},
				foreground: {
					DEFAULT: 'hsl(var(--foreground))',
					secondary: 'hsl(var(--foreground-secondary))',
					muted: 'hsl(var(--foreground-muted))',
				},
				'deep-purple': {
					DEFAULT: 'hsl(var(--deep-purple))',
					hover: 'hsl(var(--deep-purple-hover))',
				},
				'electric-blue': {
					DEFAULT: 'hsl(var(--electric-blue))',
					hover: 'hsl(var(--electric-blue-hover))',
				},
				'bright-cyan': {
					DEFAULT: 'hsl(var(--bright-cyan))',
				},
				neutral: {
					silver: 'hsl(var(--neutral-silver))',
					border: 'hsl(var(--neutral-border))',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					hover: 'hsl(var(--primary-hover))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					hover: 'hsl(var(--secondary-hover))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'background-position-spin': {
					'0%': { backgroundPosition: 'top center' },
					'100%': { backgroundPosition: 'bottom center' }
				},
				marquee: {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-50%)' }
				},
				'scroll-left': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-50%)' }
				},
				'scroll-right': {
					'0%': { transform: 'translateX(-50%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'gradient-flow': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '200% 0', opacity: '0' },
					'50%': { opacity: '1' },
					'100%': { backgroundPosition: '-200% 0', opacity: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'background-position-spin': 'background-position-spin 3000ms infinite alternate',
				marquee: 'marquee var(--duration) linear infinite',
				'scroll-left': 'scroll-left 15s linear infinite',
				'scroll-right': 'scroll-right 15s linear infinite',
				'scroll-left-desktop': 'scroll-left 30s linear infinite',
				'scroll-right-desktop': 'scroll-right 30s linear infinite',
				'shimmer': 'shimmer 3s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
