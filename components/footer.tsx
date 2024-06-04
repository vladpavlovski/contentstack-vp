import Link from 'next/link'
import parse from 'html-react-parser'
import { getFooterRes } from '../helper'
import Skeleton from 'react-loading-skeleton'

async function fetchData() {
  try {
    const footerRes = await getFooterRes()
    return footerRes
  } catch (error) {
    console.error(error)
  }
}

export default async function Footer() {
  const footerData = await fetchData()

  return (
    <footer>
      <div className='max-width footer-div'>
        <div className='col-quarter'>
          {footerData && footerData.logo ? (
            <Link href='/' className='logo-tag'>
              <img
                src={footerData.logo.url}
                alt={footerData.title}
                title={footerData.title}
                className='logo footer-logo'
              />
            </Link>
          ) : (
            <Skeleton width={150} />
          )}
        </div>
        <div className='col-half'>
          <nav>
            <ul className='nav-ul'>
              {footerData ? (
                footerData.navigation.link.map((menu) => (
                  <li className='footer-nav-li' key={menu.title}>
                    <Link href={menu.href}>{menu.title}</Link>
                  </li>
                ))
              ) : (
                <Skeleton width={300} />
              )}
            </ul>
          </nav>
        </div>
        <div className='col-quarter social-link'>
          <div className='social-nav'>
            {footerData ? (
              footerData.social?.social_share.map((social) => (
                <a
                  href={social.link.href}
                  title={social.link.title}
                  key={social.link.title}
                >
                  {social.icon && (
                    <img src={social.icon.url} alt={social.link.title} />
                  )}
                </a>
              ))
            ) : (
              <Skeleton width={200} />
            )}
          </div>
        </div>
      </div>
      {footerData && typeof footerData.copyright === 'string' ? (
        <div className='copyright'>{parse(footerData.copyright)}</div>
      ) : (
        <div className='copyright'>
          <Skeleton width={500} />
        </div>
      )}
    </footer>
  )
}
