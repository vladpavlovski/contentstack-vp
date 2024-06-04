import React from 'react'
import Section from '@/components/section'
import HeroBanner from '@/components/hero-banner'
import CardSection from '@/components/card-section'
import TeamSection from '@/components/team-section'
import SectionBucket from '@/components/section-bucket'
import AboutSectionBucket from '@/components/about-section-bucket'
import SectionWithHtmlCode from '@/components/section-with-html-code'
import { RenderProps } from '../typescript/component'

export default function RenderComponents(props: RenderProps) {
  const { pageComponents, blogPost, entryUid, contentTypeUid, locale } = props
  return (
    <div
      data-pageref={entryUid}
      data-contenttype={contentTypeUid}
      data-locale={locale}
    >
      {pageComponents?.map((component, key: number) => {
        if (component.hero_banner) {
          return blogPost ? null : (
            <HeroBanner
              banner={component.hero_banner}
              key={`component-${key}`}
            />
          )
        }
        if (component.section) {
          return (
            <Section section={component.section} key={`component-${key}`} />
          )
        }
        if (component.section_with_buckets) {
          return component.section_with_buckets.bucket_tabular ? (
            <AboutSectionBucket
              sectionWithBuckets={component.section_with_buckets}
              key={`component-${key}`}
            />
          ) : (
            <SectionBucket
              section={component.section_with_buckets}
              key={`component-${key}`}
            />
          )
        }
        if (component.from_blog) {
          return null
        }
        if (component.section_with_cards) {
          return (
            <CardSection
              cards={component.section_with_cards.cards}
              key={`component-${key}`}
            />
          )
        }
        if (component.section_with_html_code) {
          return (
            <SectionWithHtmlCode
              embedCode={component.section_with_html_code}
              key={`component-${key}`}
            />
          )
        }
        if (component.our_team) {
          return (
            <TeamSection
              ourTeam={component.our_team}
              key={`component-${key}`}
            />
          )
        }
      })}
    </div>
  )
}
