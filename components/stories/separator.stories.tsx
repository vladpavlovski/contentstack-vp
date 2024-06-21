import { Separator } from '@/components/ui/separator'
import { SeparatorProps } from '@radix-ui/react-separator'
import type { Meta, StoryObj } from '@storybook/react'
import { StoryHeader } from './StoryHeader'

const meta: Meta<SeparatorProps> = {
  title: 'Components/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => {
      return (
        <StoryHeader description='Visually or semantically separates content.' slug='separator'>
          <Story />
        </StoryHeader>
      )
    },
  ],
  render() {
    return (
      <>
        <div className='space-y-1'>
          <h4 className='text-sm font-medium leading-none'>Radix Primitives</h4>
          <p className='text-sm text-muted-foreground'>An open-source UI component library.</p>
        </div>
        <Separator className='my-4' />
        <div className='flex h-5 items-center space-x-4 text-sm'>
          <div>Blog</div>
          <Separator orientation='vertical' />
          <div>Docs</div>
          <Separator orientation='vertical' />
          <div>Source</div>
        </div>
      </>
    )
  },
  argTypes: {
    orientation: {
      description: 'The orientation of the separator.',
      table: {
        type: { summary: 'string' },
      },
      control: {
        disable: true,
      },
    },
    decorative: {
      description: 'Whether the separator is purely decorative.',
      table: {
        type: { summary: 'boolean' },
        // defaultValue: { summary: true },
      },
      control: {
        disable: true,
      },
    },
  },
}

export default meta

type Story = StoryObj<SeparatorProps>

export const Default: Story = {}
