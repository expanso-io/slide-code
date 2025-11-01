import { defineConfig, presetAttributify, presetUno, presetIcons } from 'unocss'

export default () => defineConfig({
  shortcuts: {
    // Custom shortcuts for Expanso theme
    'text-gradient': 'text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-600',
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      collections: {
        carbon: () => import('@iconify-json/carbon/icons.json').then(i => i.default as any),
        logos: () => import('@iconify-json/logos/icons.json').then(i => i.default as any),
        devicon: () => import('@iconify-json/devicon/icons.json').then(i => i.default as any),
        ph: () => import('@iconify-json/ph/icons.json').then(i => i.default as any),
        ri: () => import('@iconify-json/ri/icons.json').then(i => i.default as any),
        'simple-icons': () => import('@iconify-json/simple-icons/icons.json').then(i => i.default as any),
      },
      scale: 1.2,
      warn: true,
    }),
  ],
  theme: {
    colors: {
      // Official Expanso Design System Colors
      expanso: {
        // Violet (Primary Brand)
        'primary': '#6823CD',       // violet-700
        'primary-hover': '#501E99', // violet-800
        'primary-light': '#9259ED', // violet-500
        'primary-lighter': '#883FFD', // violet-600
        'primary-subtle': '#FAF6FF', // violet-50
        
        // Grey Scale
        'grey-900': '#000000',
        'grey-800': '#454545',
        'grey-700': '#727272',
        'grey-600': '#9F9F9F',
        'grey-500': '#CFCFCF',
        'grey-300': '#E3E3E3',
        'grey-200': '#ECECEC',
        'grey-100': '#F6F6F6',
        'grey-50': '#FCFCFC',
        
        // Semantic Colors
        'success': '#59E248',
        'success-bg': '#F2FFF0',
        'error': '#FF7244',
        'error-bg': '#FFF3EF',
        'warning': '#FF953F',
        'warning-bg': '#FFF7F0',
        'info': '#00BBB4',
        'info-bg': '#ECFFFE',
      },
    },
  },
})
