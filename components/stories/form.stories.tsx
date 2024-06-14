/* eslint-disable react-hooks/rules-of-hooks */

import { Button } from '@/components/ui/button'
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
  FormProps,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Toaster } from '@/components/ui/sonner'
import { toast } from '@/components/ui/use-toast'
import type { Meta, StoryObj } from '@storybook/react'
import { useForm } from 'react-hook-form'
// import { z } from 'zod'

// const FormSchema = z.object({
//   username: z.string().min(2, 'Username must be at least 2 characters.'),
// })

const meta: Meta<FormProps> = {
  title: 'Components/Form',
  decorators: [
    (Story) => (
      <>
        <Story />
        <Toaster />
      </>
    ),
  ],
  component: Form,
  parameters: {
    layout: 'centered',
  },
  render(props) {
    const form = useForm({
      // schema: FormSchema,
      defaultValues: {
        username: '',
      },
    })

    const handleSubmit = form.handleSubmit((data) => {
      toast({
        value: 'You submitted the following values:',
        description: (
          <pre className='mt-2 w-full rounded-md bg-slate-950 p-4'>
            <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
      })
    })

    return (
      <Form {...props} {...form}>
        <form onSubmit={handleSubmit} className='w-2/3 space-y-6'>
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder='username' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit'>Submit</Button>
        </form>
      </Form>
    )
  },
}

export default meta

type Story = StoryObj<FormProps>

export const Default: Story = {}
