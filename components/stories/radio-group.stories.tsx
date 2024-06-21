import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { RadioGroupProps } from '@radix-ui/react-radio-group'
import type { Meta, StoryObj } from '@storybook/react'
import { StoryHeader } from './StoryHeader'

const meta: Meta<RadioGroupProps> = {
  title: 'Components/Radio Group',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => {
      return (
        <StoryHeader
          description={
            'A set of checkable buttons—known as radio buttons—where ' +
            'no more than one of the buttons can be checked at a time.'
          }
          slug='radio-group'
        >
          <Story />
        </StoryHeader>
      )
    },
  ],
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
    asChild: false,
  },
}

export default meta

type Story = StoryObj<RadioGroupProps>

export const Default: Story = {}

export const Disabled: Story = {
  args: {
    disabled: true,
    asChild: false,
  },
}
