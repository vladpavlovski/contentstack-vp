import React from 'react'
import Link from 'next/link'
import { Image, Action } from '@/typescript/action'
import { Button } from '@/components/ui/button'

type AdditionalParam = {
  title: string
  title_h2: string
  title_h3: string
  description: string
  html_code: string
  designation: string
  name: string
}

type SectionProps = {
  title_h2: String
  description: string
  call_to_action: Action
  image: Image
  image_alignment: string
  $: AdditionalParam
}

export const Section = ({ section }: { section: SectionProps }) => {
  function contentSection(key: any) {
    return (
      <div key={key} className='flex flex-1 flex-col gap-4 pl-0 lg:pl-20'>
        <div className='flex flex-col gap-2'>
          <h2 className='font-regular text-left text-xl tracking-tighter md:text-3xl md:text-5xl lg:max-w-xl'>
            {section.title_h2}
          </h2>
          <p className='max-w-xl text-left text-lg leading-relaxed tracking-tight text-muted-foreground lg:max-w-sm'>
            {section.description}
          </p>
        </div>
        {section.call_to_action.title && section.call_to_action.href && (
          <Button asChild>
            <Link href={section.call_to_action.href} {...section.call_to_action.$?.title}>
              {section.call_to_action.title}
            </Link>
          </Button>
        )}
      </div>
    )
  }

  function imageContent(key: any) {
    return (
      <div className='aspect-video h-full w-full flex-1 rounded-md bg-muted'>
        <img src={section.image.url} alt={section.image.filename} key={key} />
      </div>
    )
  }
  return (
    <div className='w-full py-20 lg:py-40'>
      <div className='container mx-auto'>
        <div className='flex flex-col-reverse gap-10 lg:flex-row lg:items-center'>
          {section.image_alignment === 'Left'
            ? [imageContent('key-image'), contentSection('key-contentstection')]
            : [contentSection('key-contentstection'), imageContent('key-image')]}
        </div>
      </div>
    </div>
  )
}
