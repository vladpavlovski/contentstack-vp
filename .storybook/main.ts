import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: [
    // '../components/stories/**/*.mdx',
    '../components/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],

  addons: [
    '@storybook/addon-links',
    { name: '@storybook/addon-essentials', options: { docs: false } },
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
    'storybook-dark-mode',
    '@storybook/addon-a11y',
  ],

  framework: {
    name: '@storybook/nextjs',
    options: { builder: { useSWC: true } },
  },

  // staticDirs: ['../public'],

  docs: {
    //👇 See the table below for the list of supported options
    defaultName: 'Documentation',
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
}
export default config
