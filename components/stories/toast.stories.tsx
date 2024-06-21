import { Button } from '@/components/ui/button'
import { Toaster } from '@/components/ui/sonner'
import type { Meta, StoryObj } from '@storybook/react'
import { ToasterProps, toast } from 'sonner'
import { StoryHeader } from './StoryHeader'

type ToasterStoryProps = ToasterProps & {
  message: string
}

const meta: Meta<ToasterStoryProps> = {
  title: 'Components/Toast',
  component: Toaster,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => {
      return (
        <StoryHeader description='A succinct message that is displayed temporarily.' slug='toast'>
          <Story />
        </StoryHeader>
      )
    },
  ],
}

export default meta

type Story = StoryObj<ToasterStoryProps>

export const Default: Story = {
  render({ message }) {
    return (
      <Button
        onClick={() => {
          toast(message, {
            description: 'Sunday, December 03, 2023 at 9:00 AM',
            action: {
              label: 'Undo',
              // eslint-disable-next-line no-console
              onClick: () => console.log('Undo'),
            },
          })
        }}
      >
        Show toast
      </Button>
    )
  },
  args: {
    message: 'Hello world!',
  },
}

export const Success: Story = {
  render({ message }) {
    return (
      <Button
        onClick={() => {
          toast.success(message)
        }}
      >
        Show toast
      </Button>
    )
  },
  args: {
    message: 'Success!',
  },
}

export const Error: Story = {
  render({ message }) {
    return (
      <Button
        onClick={() => {
          toast.error(message)
        }}
      >
        Show toast
      </Button>
    )
  },
  args: {
    message: 'Error!',
  },
}

export const PromiseToast: Story = {
  name: 'Promise',
  render() {
    const promise = () =>
      new Promise<string>((resolve, reject) => {
        setTimeout(() => {
          const random = Math.random()
          if (random > 0.5) {
            return reject('Error')
          }
          resolve('Hello')
        }, 2000)
      })

    return (
      <Button
        onClick={() => {
          toast.promise(promise, {
            loading: 'Loading...',
            success: (data) => {
              return `${data} world!`
            },
            error: 'Error',
          })
        }}
      >
        Show toast
      </Button>
    )
  },
}
