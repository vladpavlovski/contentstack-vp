import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { SwitchProps } from '@radix-ui/react-switch'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<SwitchProps> = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  args: {
    disabled: false,
  },
}

export default meta

type Story = StoryObj<SwitchProps>

export const Default: Story = {}

export const WithLabel: Story = {
  render(props) {
    return (
      <div className='flex items-center gap-2'>
        <Switch {...props} id='airplane-mode' />
        <Label htmlFor='airplane-mode'>Airplane Mode</Label>
      </div>
    )
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
