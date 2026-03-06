// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  image:{
     responsiveStyles: true,
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [starlight({
      title: 'Aníbal Fermandois',
      sidebar: [
        {
          label: 'Projects',
          autogenerate: { directory: 'projects' },
        },
        {
          label: 'Experience',
          autogenerate: { directory: 'experience' },
        },
      ],
  })]
});