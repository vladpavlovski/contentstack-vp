import { ReactNode } from 'react'

const BASE_DOC_LINK = 'https://www.radix-ui.com/primitives/docs/components/'

export const StoryHeader = ({
  children,
  description,
  slug,
}: {
  children: ReactNode
  description: string
  slug: string
}) => {
  return (
    <section>
      <p>{description}</p>
      <div style={{ display: 'flex', gap: '20px', color: '#029CFD' }}>
        <a href={`${BASE_DOC_LINK}${slug}`} target='_blank' rel='noreferrer'>
          Radix
        </a>
        <span> | </span>
        <a href={`${BASE_DOC_LINK}${slug}#api-reference`} target='_blank' rel='noreferrer'>
          API Reference
        </a>
      </div>
      <br />
      <hr />
      <br />
      {children}
    </section>
  )
}
