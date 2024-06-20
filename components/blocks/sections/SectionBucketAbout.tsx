import React from 'react'
import parse from 'html-react-parser'
import { Action, Image } from '@/typescript/action'

type AdditionalParam = {
  title_h2?: string
  title_h3?: string
  description?: string
}

type Bucket = {
  title_h3: string
  description: string
  icon: Image
  $: AdditionalParam
  url: string
}

type BucketsList = {
  title_h3: string
  description: string
  url: string
  call_to_action: Action
  icon: Image
  $: AdditionalParam
}

type BucketProps = {
  title_h2: string
  buckets: BucketsList[]
  $: AdditionalParam
}

export function AboutSectionBucket({
  sectionWithBuckets,
}: {
  sectionWithBuckets: BucketProps
}) {
  function bucketContent(bucket: Bucket, index: number) {
    return (
      <div
        key={index}
        className='flex flex-col items-center p-4 md:flex-row md:items-start md:space-x-4'
      >
        {bucket.icon && (
          <img
            {...(bucket.icon.$?.url as {})}
            src={bucket.icon.url}
            alt='art work'
            className='mb-4 h-20 w-20 object-cover md:mb-0'
          />
        )}
        <div>
          {bucket.title_h3 && (
            <h3
              {...(bucket.$?.title_h3 as {})}
              className='mb-2 text-lg font-semibold'
            >
              {bucket.title_h3}
            </h3>
          )}
          {typeof bucket.description === 'string' && (
            <div {...(bucket.$?.description as {})} className='text-base'>
              {parse(bucket.description)}
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className='mx-auto max-w-7xl px-4 py-8'>
      <div className='mb-8 text-center'>
        {sectionWithBuckets.title_h2 && (
          <h2
            {...(sectionWithBuckets.$?.title_h2 as {})}
            className='text-3xl font-bold'
          >
            {sectionWithBuckets.title_h2}
          </h2>
        )}
      </div>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
        {sectionWithBuckets.buckets.map((bucket, index) =>
          bucketContent(bucket, index)
        )}
      </div>
    </div>
  )
}
