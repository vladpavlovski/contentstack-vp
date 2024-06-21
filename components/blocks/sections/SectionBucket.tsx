import React from 'react'
import Link from 'next/link'
import parse from 'html-react-parser'
import { Image, Action } from '@/typescript/action'
import { Button } from '@/components/ui/button'
import { cn } from '@/styles/utils'

type AdditionalParam = {
  title: string
  title_h2: string
  title_h3: string
  description: string
  html_code: string
  designation: string
  name: string
}

type Buckets = {
  title_h3: string
  description: string
  call_to_action: Action
  icon: Image
  $: AdditionalParam
}

export type BucketProps = {
  title_h2: string
  description: string
  buckets: Buckets[]
  $: AdditionalParam
}

export function SectionBucket({ section }: { section: BucketProps }) {
  return (
    <div className='w-full py-20 lg:py-40'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-10'>
          <div className='flex flex-col items-start gap-4'>
            <div className='flex flex-col gap-2'>
              {section.title_h2 && (
                <h2 className='font-regular max-w-xl text-left text-3xl tracking-tighter md:text-5xl'>
                  {section.title_h2}
                </h2>
              )}
              {section.description && (
                <p
                  className={cn(
                    'max-w-xl text-left text-lg leading-relaxed tracking-tight text-muted-foreground lg:max-w-lg'
                  )}
                >
                  {section.description}
                </p>
              )}
            </div>
          </div>
          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {section.buckets?.map((bucket, index) => (
              <div className='flex flex-col gap-2' key={index}>
                {bucket.icon && (
                  <img src={bucket.icon.url} alt='bucket icon' className='mb-2 aspect-video rounded-md bg-muted' />
                )}
                {bucket.title_h3 && <h3 className='text-xl tracking-tight'>{bucket.title_h3}</h3>}
                {typeof bucket.description === 'string' && (
                  <div className='text-base text-muted-foreground'>{parse(bucket.description)}</div>
                )}
                {bucket.call_to_action?.title && (
                  <Button asChild>
                    <Link href={bucket.call_to_action.href ? bucket.call_to_action.href : '#'} className='text-primary'>
                      {`${bucket.call_to_action.title} -->`}
                    </Link>
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
