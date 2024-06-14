import { Slider } from '@/components/ui/slider'
import { SliderProps } from '@radix-ui/react-slider'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<SliderProps> = {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  args: {
    step: 1,
    max: 100,
    defaultValue: [0],
  },
}

export default meta

type Story = StoryObj<SliderProps>

export const Default: Story = {}
