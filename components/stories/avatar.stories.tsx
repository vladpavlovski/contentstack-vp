import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { AvatarProps } from '@radix-ui/react-avatar'
import type { Meta, StoryObj } from '@storybook/react'
import { StoryHeader } from './StoryHeader'

const meta: Meta<AvatarProps> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => {
      return (
        <StoryHeader
          description='A modal dialog that interrupts the user with important content and expects a response.'
          slug='alert-dialog'
        >
          <Story />
        </StoryHeader>
      )
    },
  ],
  render(props) {
    return (
      <Avatar {...props}>
        <AvatarImage src='https://github.com/upaulouski-r7.png' />
        <AvatarFallback>VP</AvatarFallback>
      </Avatar>
    )
  },
}

export default meta

type Story = StoryObj<AvatarProps>

export const Default: Story = {}

export const Group: Story = {
  render(props) {
    const users = [
      {
        username: 'kvarley-r7',
        fallback: 'KV',
      },
      {
        username: 'upaulouski-r7',
        fallback: 'VP',
      },
    ]

    return (
      <div className='flex items-center -space-x-5'>
        {users.map((user) => (
          <Avatar {...props} key={user.username}>
            <AvatarImage src={`https://github.com/${user.username}.png`} />
            <AvatarFallback>{user.fallback}</AvatarFallback>
          </Avatar>
        ))}
      </div>
    )
  },
}
