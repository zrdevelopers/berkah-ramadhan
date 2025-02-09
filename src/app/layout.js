import ReduxProvider from '@/app/redux/provider';
import Head from 'next/head';
import Script from "next/script";

export const metadata = {
  // Basic metas
  authors: [{ name: 'ZRDevelopers' }],
  keywords: ['Jual Cokelat', 'Jual Kaos', 'ZRDevelopers', 'Zikri Ramdani'],
  manifest: '/berkah-ramadhan/manifest.json',
  // Page Title
  title: 'Yuk, temukan yang kamu butuhkan! | VandZ15',
  description:
    'Tersedia berbagai pilihan cokelat lezat dan koleksi fashion trendi untuk melengkapi harimu.',
  openGraph: {
    url: 'https://zrdevelopers.github.io/berkah-ramadhan',
    images: 'https://zrdevelopers.github.io/berkah-ramadhan/assets/images/vandz15.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <script
          type="text/javascript"
          src="//backgroundrunway.com/0f/2d/c5/0f2dc59c4c7876bd1607b776c607edfc.js"
          async
        />
      </Head>
      <body>
        <Script 
          type='text/javascript' 
          src='//backgroundrunway.com/a8/ff/81/a8ff8134566c16def4cbcd5103fa37d7.js'
          strategy="afterInteractive"
        />
        <ReduxProvider>
          {children}
          {/* <Scripts /> */}
        </ReduxProvider>
      </body>
    </html>
  );
}
