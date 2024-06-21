import { withThemeByClassName } from '@storybook/addon-themes'
import type { Preview } from '@storybook/react'
import { themes } from '@storybook/theming'
import '../styles/globals.css'
import { ThemeProvider } from '../components/theme/theme-provider'
import React from 'react'
import { darkUIStorybook, lightUIStorybook, commonTheme } from './themes-storybook-ui'
import { Toaster } from '@/components/ui/sonner'

const preview: Preview = {
  parameters: {
    // https://storybook.js.org/addons/storybook-dark-mode
    darkMode: {
      classTarget: 'html',
      stylePreview: true,
      darkClass: 'dark',
      lightClass: 'light',
      // Override the default dark theme
      dark: { ...themes.dark, ...darkUIStorybook, ...commonTheme },
      // Override the default light theme
      light: { ...themes.normal, ...lightUIStorybook, ...commonTheme },
      // Set the initial theme
      current: 'dark',
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  // Decorators: https://storybook.js.org/docs/react/writing-stories/decorators#page-top
  decorators: [
    (Story) => {
      return (
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          disableTransitionOnChange
          // enableSystem
        >
          <div>
            <Story />
            <Toaster />
          </div>
        </ThemeProvider>
      )
    },
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'dark',
    }),
  ],
  //👇 Enables auto-generated documentation for all stories
  tags: ['autodocs'],
}

export default preview
