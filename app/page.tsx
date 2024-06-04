import { getPageRes } from '../helper'
import Skeleton from 'react-loading-skeleton'
import RenderComponents from '@/components/render-components'

async function fetchData() {
  try {
    const entryRes = await getPageRes('/')
    if (!entryRes) throw new Error('Status code 404')
    return entryRes
  } catch (error) {
    console.error(error)
  }
}

export default async function Page() {
  const entry = await fetchData()

  return entry ? (
    <RenderComponents
      pageComponents={entry.page_components}
      contentTypeUid='page'
      entryUid={entry.uid}
      locale={entry.locale}
    />
  ) : (
    <Skeleton count={3} height={300} />
  )
}
