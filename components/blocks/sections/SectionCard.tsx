import React from 'react'
import Link from 'next/link'
import { Action } from '@/typescript/action'
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

type AdditionalParam = {
  title_h3: string
  description: string
}

type CardType = {
  title_h3: string
  description: string
  call_to_action: Action
  $: AdditionalParam
}

type CardSectionProps = {
  cards: CardType[]
}

export function CardSection({ cards }: CardSectionProps) {
  return (
    <div className='mx-auto max-w-7xl py-8'>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {cards?.map((card, index) => (
          <Card key={index}>
            <CardHeader className='flex flex-col space-y-1.5'>
              {card.title_h3 && <CardTitle className='text-xl font-semibold'>{card.title_h3}</CardTitle>}
              {card.description && <CardDescription className='text-base'>{card.description}</CardDescription>}
            </CardHeader>
            <CardFooter className='flex items-center justify-end'>
              {card.call_to_action.title && card.call_to_action.href && (
                <Button asChild>
                  <Link href={card.call_to_action.href}>{card.call_to_action.title}</Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
