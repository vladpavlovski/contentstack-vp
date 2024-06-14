import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { RadioGroupProps } from '@radix-ui/react-radio-group'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<RadioGroupProps> = {
  title: 'Components/Radio Group',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  render(props) {
    return (
      <RadioGroup {...props} defaultValue='comfortable'>
        <div className='flex items-center gap-2'>
          <RadioGroupItem value='default' id='r1' />
          <Label htmlFor='r1'>Default</Label>
        </div>
        <div className='flex items-center gap-2'>
          <RadioGroupItem value='comfortable' id='r2' />
          <Label htmlFor='r2'>Comfortable</Label>
        </div>
        <div className='flex items-center gap-2'>
          <RadioGroupItem value='compact' id='r3' />
          <Label htmlFor='r3'>Compact</Label>
        </div>
      </RadioGroup>
    )
  },
  args: {
    disabled: false,
  },
}

export default meta

type Story = StoryObj<RadioGroupProps>

export const Default: Story = {}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
