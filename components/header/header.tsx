import Link from 'next/link'
import { getHeaderRes } from '../../api'
import Skeleton from 'react-loading-skeleton'
import { Menu } from './menu'

async function fetchData() {
  try {
    const headerRes = await getHeaderRes()
    return headerRes
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
  }
}

export default async function Header() {
  const headerData = await fetchData()

  return (
    <header className='container sticky top-0 bg-white'>
      <div className='flex items-center justify-between'>
        <div className='my-5'>
          {headerData ? (
            <Link href='/' title='Rapid7'>
              <img
                src={headerData.logo.url}
                alt={headerData.title}
                title={headerData.title}
              />
            </Link>
          ) : (
            <Skeleton width={150} />
          )}
        </div>

        {headerData ? <Menu data={headerData} /> : <Skeleton width={300} />}

        {/* <nav className='menu'>
          
          <ul className='nav-ul header-ul'>
            {headerData ? (
              headerData.navigation_menu.map((list) => {
                return (
                  <li key={list.label} className='nav-li'>
                    <Link href={list.page_reference[0].url}>{list.label}</Link>
                  </li>
                )
              })
            ) : (
              <Skeleton width={300} />
            )}
          </ul>
        </nav> */}
      </div>
    </header>
  )
}
