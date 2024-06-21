import RenderComponents from '@/components/renderer/RenderComponents'
import { getPageRes } from '../api'
import Skeleton from 'react-loading-skeleton'

async function fetchData() {
  try {
    const entryRes = await getPageRes('/')
    if (!entryRes) throw new Error('Status code 404')
    return entryRes
  } catch (error) {
    // eslint-disable-next-line no-console
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
