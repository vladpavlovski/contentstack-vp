import Link from 'next/link'
import { getFooterRes } from '@/api'
import Skeleton from 'react-loading-skeleton'

export const Footer = async () => {
  const footerData = await getFooterRes()
  const navigationItems = [
    {
      title: 'Home',
      href: '/',
      description: '',
    },
    {
      title: 'Product',
      description: 'Managing a small business today is already tough.',
      items: [
        {
          title: 'Reports',
          href: '/reports',
        },
        {
          title: 'Statistics',
          href: '/statistics',
        },
        {
          title: 'Dashboards',
          href: '/dashboards',
        },
        {
          title: 'Recordings',
          href: '/recordings',
        },
      ],
    },
    {
      title: 'Company',
      description: 'Managing a small business today is already tough.',
      items: [
        {
          title: 'About us',
          href: '/about',
        },
        {
          title: 'Fundraising',
          href: '/fundraising',
        },
        {
          title: 'Investors',
          href: '/investors',
        },
        {
          title: 'Contact us',
          href: '/contact',
        },
      ],
    },
  ]

  return (
    <footer>
      <div className='w-full bg-foreground py-20 text-background lg:py-40'>
        <div className='container mx-auto'>
          <div className='grid items-center gap-10 lg:grid-cols-2'>
            <div className='flex flex-col items-start gap-8'>
              <div className='flex flex-col gap-2'>
                {footerData && footerData.logo ? (
                  <Link href='/'>
                    <img src={footerData.logo.url} alt={footerData.title} title={footerData.title} />
                  </Link>
                ) : (
                  <Skeleton width={150} />
                )}
              </div>
              <div className='flex flex-row gap-20'>
                <div className='flex max-w-lg flex-col text-left text-sm leading-relaxed tracking-tight text-white'>
                  <p>Rapid7</p>
                  <p>Address</p>
                  <p>CA 00000</p>
                </div>
                <div className='flex max-w-lg flex-col text-left text-sm leading-relaxed tracking-tight text-white'>
                  <Link href='/'>Terms of service</Link>
                  <Link href='/'>Privacy Policy</Link>
                </div>
              </div>
            </div>
            <div className='grid items-start gap-10 lg:grid-cols-3'>
              {navigationItems.map((item) => (
                <div key={item.title} className='flex flex-col items-start gap-1 text-base'>
                  <div className='flex flex-col gap-2'>
                    {item.href ? (
                      <Link href={item.href} className='flex items-center justify-between'>
                        <span className='text-xl'>{item.title}</span>
                      </Link>
                    ) : (
                      <p className='text-xl'>{item.title}</p>
                    )}
                    {item.items &&
                      item.items.map((subItem) => (
                        <Link key={subItem.title} href={subItem.href} className='flex items-center justify-between'>
                          <span className='text-background/75'>{subItem.title}</span>
                        </Link>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
