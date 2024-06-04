import RenderComponents from '../../@/components/render-components'
import { getPageRes } from '../../helper'
import Skeleton from 'react-loading-skeleton'

async function fetchData(entryUrl: string) {
  try {
    const entryRes = await getPageRes(`/${entryUrl}`)
    if (!entryRes) throw new Error('Status code 404')
    return entryRes
  } catch (error) {
    console.error(error)
  }
}

export default async function Page({
  params,
}: {
  params: {
    page: string
  }
}) {
  const { page } = params

  const entry = await fetchData(page)

  return entry?.page_components ? (
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
