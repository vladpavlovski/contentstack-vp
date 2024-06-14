import type { Preview } from '@storybook/react'
import '../app/globals.css'
import { ThemeProvider } from '../components/theme/theme-provider'
import { themes } from '@storybook/theming'
import { withThemeByClassName } from '@storybook/addon-themes'
import { fn } from '@storybook/test'
import React from 'react'
import { Toaster } from '../components/ui/toaster'
import {
  darkUIStorybook,
  lightUIStorybook,
  commonTheme,
} from './themes-storybook-ui'
import { useDarkMode } from 'storybook-dark-mode'

const preview: Preview = {
  parameters: {
    // https://storybook.js.org/addons/storybook-dark-mode
    // darkMode: {
    //   classTarget: 'html',
    //   stylePreview: true,
    //   darkClass: 'dark',
    //   lightClass: 'light',
    //   // Override the default dark theme
    //   dark: { ...themes.dark, ...darkUIStorybook, ...commonTheme },
    //   // Override the default light theme
    //   light: { ...themes.normal, ...lightUIStorybook, ...commonTheme },
    //   // Set the initial theme
    //   current: 'dark',
    // },
    actions: { onClick: fn() },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  // Decorators: https://storybook.js.org/docs/react/writing-stories/decorators#page-top
  decorators: [
    // (Story) => {
    //   const mode = useDarkMode() ? 'dark' : 'light'
    //   return (
    //     <ThemeProvider
    //       attribute='class'
    //       defaultTheme='light'
    //       disableTransitionOnChange
    //     >
    //       <div className={mode}>
    //         <Story />
    //         <Toaster />
    //       </div>
    //     </ThemeProvider>
    //   )
    // },
    // withThemeByClassName({
    //   themes: {
    //     light: 'light',
    //     dark: 'dark',
    //   },
    //   defaultTheme: 'light',
    // }),
  ],
  //👇 Enables auto-generated documentation for all stories
  tags: ['autodocs'],
}

export default preview
