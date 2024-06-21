import React from 'react'
import { cn } from '@/styles/utils'

type SkeletonProps = React.ComponentPropsWithoutRef<'div'>

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-muted', className)}
      {...props}
    />
  )
}

export { Skeleton, type SkeletonProps }
