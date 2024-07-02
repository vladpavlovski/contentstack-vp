import React from 'react'
import { RenderProps, Component } from '@/typescript/component'
import { Section } from '@/components/blocks/sections/Section'
import { Hero1 } from '@/components/blocks/heroes/Hero1'
import { SectionBucket } from '@/components/blocks/sections/SectionBucket'
import { AboutSectionBucket } from '@/components/blocks/sections/SectionBucketAbout'
import { CardSection } from '@/components/blocks/sections/SectionCard'
import { TeamSection } from '@/components/blocks/sections/SectionTeam'
import { SectionHtmlCode } from '@/components/blocks/sections/SectionHtmlCode'

const RenderComponents = ({ pageComponents, blogPost, entryUid, contentTypeUid, locale }: RenderProps) => {
  return (
    <div data-pageref={entryUid} data-contenttype={contentTypeUid} data-locale={locale}>
      {pageComponents?.map((component, index) => {
        const type = Object.keys(component)[0] as keyof Component
        const key = `${type}-${index}`
        switch (type) {
          case 'hero_banner':
            return blogPost ? null : <Hero1 banner={component.hero_banner} key={key} />
          case 'section':
            return <Section section={component.section!} key={key} />
          case 'section_with_buckets':
            return component.section_with_buckets!.bucket_tabular ? (
              <AboutSectionBucket sectionWithBuckets={component.section_with_buckets!} key={key} />
            ) : (
              <SectionBucket section={component.section_with_buckets!} key={key} />
            )
          case 'from_blog':
            return <div key={key} />
          case 'section_with_cards':
            return <CardSection cards={component.section_with_cards!.cards} key={key} />
          case 'section_with_html_code':
            return <SectionHtmlCode embedCode={component.section_with_html_code!} key={key} />
          case 'our_team':
            return <TeamSection ourTeam={component.our_team!} key={key} />
          default:
            return null // In case no matching type is found
        }
      })}
    </div>
  )
}

export default RenderComponents
