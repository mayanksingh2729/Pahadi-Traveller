
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
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
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
				mountain: {
					50: '#f5f9ff',
					100: '#ebf2fe',
					200: '#d5e3fd',
					300: '#b2ccfb',
					400: '#86acf8',
					500: '#5b87f2',
					600: '#3e65e4',
					700: '#3254d1',
					800: '#2a43a9',
					900: '#293d85',
					950: '#1a2554',
				},
				forest: {
					50: '#f0fdf6',
					100: '#dcfce9',
					200: '#bbf8d6',
					300: '#86f0b9',
					400: '#4cde94',
					500: '#25c676',
					600: '#17a35d',
					700: '#15804c',
					800: '#166640',
					900: '#145437',
					950: '#0a2e1e',
				},
				earth: {
					50: '#faf6f2',
					100: '#f2e9df',
					200: '#e3d0bc',
					300: '#d4b395',
					400: '#c3916d',
					500: '#b77b53',
					600: '#a86746',
					700: '#8c523a',
					800: '#734434',
					900: '#5f392d',
					950: '#321c16',
				},
				spirit: {
					50: '#fff9ec',
					100: '#ffefd0',
					200: '#ffdc9f',
					300: '#ffc462',
					400: '#ffa732',
					500: '#ff8d0f',
					600: '#ff6a00',
					700: '#cc4c02',
					800: '#a13b0a',
					900: '#82330c',
					950: '#461804',
				},
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
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				slideUp: {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fadeIn 1s ease-in-out',
				'slide-up': 'slideUp 0.5s ease-out'
			},
			fontFamily: {
				'heading': ['"Playfair Display"', 'serif'],
				'sans': ['"Poppins"', 'sans-serif'],
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
