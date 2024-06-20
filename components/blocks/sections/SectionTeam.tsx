import React from 'react'
import { Image } from '@/typescript/action'
import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'

type AdditionalParam = {
  title: string
  title_h2: string
  title_h3: string
  description: string
  html_code: string
  designation: string
  name: string
}

type Employee = {
  image: Image
  name: string
  designation: string
  $: AdditionalParam
}

type TeamProps = {
  title_h2: string
  description: string
  $: AdditionalParam
  employees: Employee[]
}

export function TeamSection({ ourTeam }: { ourTeam: TeamProps }) {
  return (
    <div className='mx-auto max-w-7xl px-4 py-8'>
      <div className='mb-8'>
        {ourTeam.title_h2 && (
          <h2
            {...(ourTeam.$?.title_h2 as {})}
            className='mb-4 text-3xl font-bold'
          >
            {ourTeam.title_h2}
          </h2>
        )}
        {ourTeam.description && (
          <p {...(ourTeam.$?.description as {})} className='text-gray-700'>
            {ourTeam.description}
          </p>
        )}
      </div>
      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3'>
        {ourTeam.employees?.map((employee, index) => (
          <Card
            key={index}
            className='rounded-lg border bg-white text-gray-900 shadow-md'
          >
            <img
              alt={employee.image.filename}
              src={employee.image.url}
              {...(employee.image.$?.url as {})}
              className='h-48 w-full rounded-t-lg object-cover'
            />
            <CardContent className='p-6'>
              {employee.name && (
                <CardTitle className='mb-2 text-xl font-semibold'>
                  {employee.name}
                </CardTitle>
              )}
              {employee.designation && (
                <CardDescription className='text-sm text-gray-600'>
                  {employee.designation}
                </CardDescription>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
