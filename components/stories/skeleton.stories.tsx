import { Skeleton, SkeletonProps } from '@/components/ui/skeleton'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<SkeletonProps> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  render() {
    return (
      <div className='flex items-center space-x-4'>
        <Skeleton className='h-12 w-12 rounded-full' />
        <div className='space-y-2'>
          <Skeleton className='h-4 w-[250px]' />
          <Skeleton className='h-4 w-[200px]' />
        </div>
      </div>
    )
  },
}

export default meta

type Story = StoryObj<SkeletonProps>

export const Default: Story = {}
