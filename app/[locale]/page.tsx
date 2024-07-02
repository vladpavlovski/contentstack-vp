import RenderComponents from '@/components/renderer/RenderComponents'
import { getPageRes } from '@/api'
import Skeleton from 'react-loading-skeleton'
import { Locale } from '@/locales/i18n-config'

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

export default async function Page({ params: { locale } }: { params: { locale: Locale } }) {
  const entry = await fetchData()

  if (!entry) return <Skeleton count={3} height={300} />

  return (
    <RenderComponents
      pageComponents={entry.page_components}
      contentTypeUid='page'
      entryUid={entry.uid}
      locale={locale}
    />
  )
}
