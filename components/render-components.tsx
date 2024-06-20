import React from 'react'
import { Section } from '@/components/blocks/sections/Section'
import { Hero1 } from '@/components/blocks/heroes/Hero1'
import CardSection from '@/components/card-section'
import TeamSection from '@/components/team-section'
import SectionBucket from '@/components/section-bucket'
import AboutSectionBucket from '@/components/about-section-bucket'
import SectionWithHtmlCode from '@/components/section-with-html-code'
import { RenderProps } from '../typescript/component'

const componentRenderers = {
  hero_banner: (component, key, blogPost) =>
    blogPost ? null : <Hero1 banner={component.hero_banner} key={key} />,
  section: (component, key) => (
    <Section section={component.section} key={key} />
  ),
  section_with_buckets: (component, key) =>
    component.section_with_buckets.bucket_tabular ? (
      <AboutSectionBucket
        sectionWithBuckets={component.section_with_buckets}
        key={key}
      />
    ) : (
      <SectionBucket section={component.section_with_buckets} key={key} />
    ),
  from_blog: () => null,
  section_with_cards: (component, key) => (
    <CardSection cards={component.section_with_cards.cards} key={key} />
  ),
  section_with_html_code: (component, key) => (
    <SectionWithHtmlCode
      embedCode={component.section_with_html_code}
      key={key}
    />
  ),
  our_team: (component, key) => (
    <TeamSection ourTeam={component.our_team} key={key} />
  ),
}

export default function RenderComponents(props: RenderProps) {
  const { pageComponents, blogPost, entryUid, contentTypeUid, locale } = props
  return (
    <div
      data-pageref={entryUid}
      data-contenttype={contentTypeUid}
      data-locale={locale}
    >
      {pageComponents?.map((component, key) => {
        for (let type in component) {
          if (componentRenderers[type]) {
            return componentRenderers[type](
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
