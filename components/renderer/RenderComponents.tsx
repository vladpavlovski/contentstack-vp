/* eslint-disable no-unused-vars */
import React from 'react'
import { RenderProps, Component } from '@/typescript/component'
import { componentRenderers } from './componentMapping'

const RenderComponents: React.FC<RenderProps> = (props) => {
  const { pageComponents, blogPost, entryUid, contentTypeUid, locale } = props

  return (
    <div
      data-pageref={entryUid}
      data-contenttype={contentTypeUid}
      data-locale={locale}
    >
      {pageComponents?.map((component, key) => {
        for (let type in component) {
          if (componentRenderers[type as keyof Component]) {
            return componentRenderers[type as keyof Component]!(
              component,
              `component-${key}`,
              blogPost
            )
          }
        }
        return null // In case no matching type is found
      })}
    </div>
  )
}

export default RenderComponents
