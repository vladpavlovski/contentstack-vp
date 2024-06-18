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
import { StoryHeader } from './StoryHeader'

const meta: Meta<SelectProps> = {
  title: 'Components/Select',
  component: Select,
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
          description='Displays a list of options for the user to pick from—triggered by a button.'
          slug='select'
        >
          <Story />
        </StoryHeader>
      )
    },
  ],
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
