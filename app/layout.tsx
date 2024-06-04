import React from 'react'
import type { Metadata } from 'next'
import './globals.css'
import Header from '../components/header'
import Footer from '../components/footer'
import '../styles/style.css'
import 'react-loading-skeleton/dist/skeleton.css'

export const metadata: Metadata = {
  title: 'Rapid7',
  description: 'Rapid7 Website',
  applicationName: 'Rapid7-Website',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
      </head>
      <body className={`antialiased`}>
        <Header />
        <main className='mainClass'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

// TODO: SEO staff
// const metaData = (seo: any) => {
//   const metaArr = [];
//   for (const key in seo) {
//     if (seo.enable_search_indexing) {
//       metaArr.push(
//         <meta
//           name={
//             key.includes('meta_')
//               ? key.split('meta_')[1].toString()
//               : key.toString()
//           }
//           content={seo[key].toString()}
//           key={key}
//         />
//       );
//     }
//   }
//   return metaArr;
// };
// {page?.seo && page.seo.enable_search_indexing && metaData(page.seo)}
