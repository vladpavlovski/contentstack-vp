import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { CheckboxProps } from '@radix-ui/react-checkbox'

import type { Meta, StoryObj } from '@storybook/react'
import { StoryHeader } from './StoryHeader'

const meta: Meta<CheckboxProps> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  args: {
    disabled: false,
  },
  decorators: [
    (Story) => {
      return (
        <StoryHeader
          description='A control that allows the user to toggle between checked and not checked.'
          slug='checkbox'
        >
          <Story />
        </StoryHeader>
      )
    },
  ],
}

export default meta

type Story = StoryObj<CheckboxProps>

export const Default: Story = {}

export const WithLabel: Story = {
  render(props) {
    return (
      <div className='flex items-center gap-2'>
        <Checkbox {...props} id='terms' />
        <Label htmlFor='terms'>Accept terms and conditions</Label>
      </div>
    )
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
