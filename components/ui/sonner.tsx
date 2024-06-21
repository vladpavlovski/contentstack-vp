'use client'

import React from 'react'
import { useTheme } from 'next-themes'
import { Toaster as Sonner } from 'sonner'
import { cn } from '@/styles/utils'

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className='toaster group'
      toastOptions={{
        classNames: {
          toast: cn(
            'toast group group-[.toaster]:border-border group-[.toaster]:bg-background',
            'group-[.toaster]:text-foreground group-[.toaster]:shadow-lg'
          ),
          description: 'group-[.toast]:text-muted-foreground',
          actionButton: 'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
          cancelButton: 'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
