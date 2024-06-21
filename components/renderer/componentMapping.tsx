/* eslint-disable no-unused-vars */
import React from 'react'
import { Section } from '@/components/blocks/sections/Section'
import { Hero1 } from '@/components/blocks/heroes/Hero1'
import { SectionBucket } from '@/components/blocks/sections/SectionBucket'
import { Component } from '@/typescript/component'
import { AboutSectionBucket } from '@/components/blocks/sections/SectionBucketAbout'
import { CardSection } from '@/components/blocks/sections/SectionCard'
import { TeamSection } from '@/components/blocks/sections/SectionTeam'
import { SectionHtmlCode } from '@/components/blocks/sections/SectionHtmlCode'

// Define the component renderers type
type ComponentRenderers = {
  [key in keyof Component]: (component: Component, key: string, blogPost?: boolean) => React.ReactNode
}

// Initialize the component renderers
export const componentRenderers: ComponentRenderers = {
  hero_banner: (component, key, blogPost) => (blogPost ? null : <Hero1 banner={component.hero_banner} key={key} />),
  section: (component, key) => <Section section={component.section!} key={key} />,
  section_with_buckets: (component, key) =>
    component.section_with_buckets!.bucket_tabular ? (
      <AboutSectionBucket sectionWithBuckets={component.section_with_buckets!} key={key} />
    ) : (
      <SectionBucket section={component.section_with_buckets!} key={key} />
    ),
  from_blog: () => null,
  section_with_cards: (component, key) => <CardSection cards={component.section_with_cards!.cards} key={key} />,
  section_with_html_code: (component, key) => (
    <SectionHtmlCode embedCode={component.section_with_html_code!} key={key} />
  ),
  our_team: (component, key) => <TeamSection ourTeam={component.our_team!} key={key} />,
}
