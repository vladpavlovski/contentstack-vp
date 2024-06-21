import { Label } from '@/components/ui/label'
import { Textarea, TextareaProps } from '@/components/ui/textarea'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<TextareaProps> = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  args: {
    disabled: false,
    placeholder: 'Type your message here.',
  },
}

export default meta

type Story = StoryObj<TextareaProps>

export const Default: Story = {}

export const WithLabel: Story = {
  render(props) {
    return (
      <div className='space-y-2'>
        <Label htmlFor='message'>Your message</Label>
        <Textarea {...props} placeholder='Type your message here.' id='message' />
      </div>
    )
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
