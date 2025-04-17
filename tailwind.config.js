// tailwind.config.js
import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      // Aquí puedes extender con tus propios valores si lo deseas
    }
  },
  plugins: [typography, daisyui],
  daisyui: {
    /**
     * Definimos un array de temas. Cada tema puede ser:
     * - Una cadena con nombre de tema predefinido.
     * - Un objeto con clave = nombre y valor = definición de colores.
     */
    themes: [
      {
        /* Tema personalizado “caramellatte” */
        caramellatte: {
          primary: 'oklch(55% 0.135 66.442)',
          'primary-content': 'oklch(100% 0 0)',
          secondary: 'oklch(51% 0.262 276.966)',
          'secondary-content': 'oklch(90% 0.076 70.697)',
          accent: 'oklch(51% 0.222 16.935)',
          'accent-content': 'oklch(90% 0.076 70.697)',
          neutral: 'oklch(28% 0.066 53.813)',
          'neutral-content': 'oklch(98% 0.016 73.684)',
          'base-100': 'oklch(98% 0.016 73.684)',
          'base-200': 'oklch(95% 0.038 75.164)',
          'base-300': 'oklch(90% 0.076 70.697)',
          'base-content': 'oklch(55% 0.163 48.998)',
          info: 'oklch(45% 0.085 224.283)',
          'info-content': 'oklch(90% 0.076 70.697)',
          success: 'oklch(45% 0.124 130.933)',
          'success-content': 'oklch(90% 0.076 70.697)',
          warning: 'oklch(92% 0.12 95.746)',
          'warning-content': 'oklch(41% 0.112 45.904)',
          error: 'oklch(80% 0.114 19.571)',
          'error-content': 'oklch(39% 0.141 25.723)',

          /* Radios, bordes y profundidades */
          'rounded-box': '1rem', // border radius para contenedores
          'rounded-btn': '0.5rem', // border radius para botones
          'rounded-badge': '1.9rem', // border radius para badges

          'border-width': '2px',
          'btn-border': '2px', // grosor de borde en botones
          'tab-radius': '0.5rem', // borde de tabs

          depth: '1', // nivel de “sombra” o elevación
          noise: '1' // nivel de “grano” en fondos
        }
      }
    ],
    /* Opcional: puedes definir el tema oscuro por defecto si lo necesitas */
    darkTheme: 'dracula',
    /* Si quieres forzar tu tema sin tener que usar data-theme en HTML */
    defaultTheme: 'caramellatte'
  }
};
