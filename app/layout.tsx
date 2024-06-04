import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/third-party.css";
import "../styles/style.css";
import "react-loading-skeleton/dist/skeleton.css";
import "@contentstack/live-preview-utils/dist/main.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Contentstack-Nextjs-Starter-App",
  description: "Generated by create next app",
  applicationName: "Contentstack-Nextjs-Starter-App",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* <link
            href='https://fonts.googleapis.com/css?family=Inter&amp;display=swap'
            rel='stylesheet'
          /> */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
          integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossOrigin="anonymous"
          defer
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="mainClass">{children}</main>
        <Footer />
      </body>
    </html>
  );
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
