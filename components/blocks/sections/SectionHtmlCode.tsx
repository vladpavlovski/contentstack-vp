import parse from 'html-react-parser'

type AdditionalParam = {
  title: string
  title_h2: string
  title_h3: string
  description: string
  html_code: string
  designation: string
  name: string
}

type ObjectProps = {
  html_code_alignment: string
  title: string
  description: string
  html_code: string
  $: AdditionalParam
}

export function SectionHtmlCode({ embedCode }: { embedCode: ObjectProps }) {
  const isLeftAlignment = embedCode.html_code_alignment === 'Left'

  return (
    <div
      className={`max-width ${isLeftAlignment ? 'contact-page-section' : 'contact-maps-section'}`}
    >
      {isLeftAlignment ? (
        <>
          <div className='contact-page-content'>
            {embedCode.title && (
              <h1 {...(embedCode.$?.title as {})}>{embedCode.title}</h1>
            )}
            {typeof embedCode.description === 'string' && (
              <div {...(embedCode.$?.description as {})}>
                {parse(embedCode.description)}
              </div>
            )}
          </div>
          <div className='contact-page-form'>
            {typeof embedCode.html_code === 'string' && (
              <div {...(embedCode.$?.html_code as {})}>
                {parse(embedCode.html_code)}
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <div className='maps-details'>
            {typeof embedCode.html_code === 'string' && (
              <div {...(embedCode.$?.html_code as {})}>
                {parse(embedCode.html_code)}
              </div>
            )}
          </div>
          <div className='contact-maps-content'>
            {embedCode.title && <h2>{embedCode.title}</h2>}
            {typeof embedCode.description === 'string' && (
              <div {...(embedCode.$?.description as {})}>
                {parse(embedCode.description)}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}
