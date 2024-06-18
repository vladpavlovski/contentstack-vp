import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import {
  User,
  CreditCard,
  Settings,
  Keyboard,
  Users,
  UserPlus,
  Mail,
  MessageSquare,
  PlusCircle,
  Plus,
  Github,
  LifeBuoy,
  Cloud,
  LogOut,
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuProps,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { StoryHeader } from './StoryHeader'

const meta: Meta<DropdownMenuProps> = {
  title: 'Components/Dropdown Menu',
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => {
      return (
        <StoryHeader
          description='Displays a menu to the user—such as a set of actions or functions—triggered by a button.'
          slug='dropdown-menu'
        >
          <Story />
        </StoryHeader>
      )
    },
  ],
  render(props) {
    return (
      <DropdownMenu {...props}>
        <DropdownMenuTrigger asChild>
          <Button variant='outline'>Open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56'>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <User className='mr-2 h-4 w-4' />
              <span>Profile</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CreditCard className='mr-2 h-4 w-4' />
              <span>Billing</span>
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className='mr-2 h-4 w-4' />
              <span>Settings</span>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Keyboard className='mr-2 h-4 w-4' />
              <span>Keyboard shortcuts</span>
              <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Users className='mr-2 h-4 w-4' />
              <span>Team</span>
            </DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <UserPlus className='mr-2 h-4 w-4' />
                <span>Invite users</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>
                    <Mail className='mr-2 h-4 w-4' />
                    <span>Email</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <MessageSquare className='mr-2 h-4 w-4' />
                    <span>Message</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <PlusCircle className='mr-2 h-4 w-4' />
                    <span>More...</span>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuItem>
              <Plus className='mr-2 h-4 w-4' />
              <span>New Team</span>
              <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Github className='mr-2 h-4 w-4' />
            <span>GitHub</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LifeBuoy className='mr-2 h-4 w-4' />
            <span>Support</span>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            <Cloud className='mr-2 h-4 w-4' />
            <span>API</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogOut className='mr-2 h-4 w-4' />
            <span>Log out</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}

export default meta

type Story = StoryObj<DropdownMenuProps>

export const Default: Story = {}

export const Checkboxes: Story = {
  render(props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checked, setChecked] = useState({
      statusBar: true,
      activityBar: false,
      panel: true,
    })

    return (
      <DropdownMenu {...props}>
        <DropdownMenuTrigger asChild>
          <Button variant='outline'>Open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56'>
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={checked.statusBar}
            onCheckedChange={(event) =>
              setChecked((prev) => ({
                ...prev,
                statusBar: event,
              }))
            }
          >
            Status Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={checked.activityBar}
            onCheckedChange={(event) =>
              setChecked((prev) => ({
                ...prev,
                activityBar: event,
              }))
            }
            disabled
          >
            Activity Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={checked.panel}
            onCheckedChange={(event) =>
              setChecked((prev) => ({
                ...prev,
                panel: event,
              }))
            }
          >
            Panel
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}

export const RadioGroup: Story = {
  render(props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [position, setPosition] = useState('bottom')

    return (
      <DropdownMenu {...props}>
        <DropdownMenuTrigger asChild>
          <Button variant='outline'>Open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56'>
          <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value='top'>Top</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value='bottom'>Bottom</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value='right'>Right</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}
