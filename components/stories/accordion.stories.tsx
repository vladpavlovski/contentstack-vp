import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  AlertDialogProps,
} from '@/components/ui/accordion'
import type { Meta, StoryObj } from '@storybook/react'
import { StoryHeader } from './StoryHeader'

const meta: Meta<AlertDialogProps> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  args: {
    type: 'single',
    collapsible: false,
  },
  argTypes: {
    type: {
      control: {
        type: 'inline-radio',
      },
      options: ['single', 'multiple'],
      description: 'The type of accordion',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'single' },
      },
    },
    collapsible: {
      description: 'Whether or not the accordion can be collapsed.',
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <StoryHeader
          description='A vertically stacked set of interactive headings that each reveal a section of content'
          slug='accordion'
        >
          <Story />
        </StoryHeader>
      )
    },
  ],
  render(props) {
    return (
      <Accordion {...props} className='w-full'>
        <AccordionItem value='item-1'>
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-3'>
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  },
}

export default meta

type Story = StoryObj<AlertDialogProps>

export const Default: Story = {}
