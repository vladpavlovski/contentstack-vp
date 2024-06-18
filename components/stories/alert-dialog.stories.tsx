import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogProps,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'

import type { Meta, StoryObj } from '@storybook/react'
import { StoryHeader } from './StoryHeader'

const meta: Meta<AlertDialogProps> = {
  title: 'Components/Alert Dialog',
  component: AlertDialog,
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
      <AlertDialog {...props}>
        <AlertDialogTrigger asChild>
          <Button variant='destructive'>Delete profile</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  },
}

export default meta

type Story = StoryObj<AlertDialogProps>

export const Default: Story = {}
