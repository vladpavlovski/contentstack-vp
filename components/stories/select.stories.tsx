import { Label } from '@/components/ui/label'
import {
  Select,
  SelectGroup,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectValue,
} from '@/components/ui/select'
import { SelectProps } from '@radix-ui/react-select'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<SelectProps> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  args: {
    disabled: false,
  },
  render(props) {
    return (
      <Select {...props}>
        <SelectTrigger className='w-56'>
          <SelectValue placeholder='Select a fruit…' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value='apple'>Apple</SelectItem>
            <SelectItem value='banana'>Banana</SelectItem>
            <SelectItem value='blueberry'>Blueberry</SelectItem>
            <SelectItem value='grapes'>Grapes</SelectItem>
            <SelectItem value='pineapple'>Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    )
  },
}

export default meta

type Story = StoryObj<SelectProps>

export const Default: Story = {}

export const WithLabel: Story = {
  render(props) {
    return (
      <div className='space-y-2'>
        <Label htmlFor='fruit'>Fruit</Label>
        <Select {...props}>
          <SelectTrigger id='fruit' className='w-56'>
            <SelectValue placeholder='Select a fruit' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value='apple'>Apple</SelectItem>
              <SelectItem value='banana'>Banana</SelectItem>
              <SelectItem value='blueberry'>Blueberry</SelectItem>
              <SelectItem value='grapes'>Grapes</SelectItem>
              <SelectItem value='pineapple'>Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    )
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
