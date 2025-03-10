import React from 'react';
import ReduxProvider from '@/app/redux/provider';
import Head from 'next/head';
import Script from 'next/script';
import '@/app/styles/scss/style.scss';

import Heads from '@/app/components/Head';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export const metadata = {
  authors: [{ name: 'ZRDevelopers' }],
  keywords: ['Jual Cokelat', 'Jual Kaos', 'ZRDevelopers', 'Zikri Ramdani'],
  manifest: '/berkah-ramadhan/manifest.json',
  title: 'Yuk, temukan yang kamu butuhkan! | VandZ15',
  description:
    'Tersedia berbagai pilihan cokelat lezat dan koleksi fashion trendi untuk melengkapi harimu.',
  openGraph: {
    url: 'https://zrdevelopers.github.io/berkah-ramadhan',
    images: 'https://zrdevelopers.github.io/berkah-ramadhan/assets/images/vandz15.png'
  }
};

export const viewport = {
  themeColor: '#ffffff'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head></Head>
      <Heads
        title={metadata.title}
        description={metadata.description}
        author={metadata.authors}
        keywords={metadata.keywords}
        themecolor={viewport.themeColor}
        manifest={metadata.manifest}
        url={metadata.openGraph.url}
        image={metadata.openGraph.images}
      />
      <body>
        <Navbar />
        <ReduxProvider>
          {children}
          {/* <Scripts /> */}
        </ReduxProvider>
        <Footer />
      </body>
    </html>
  );
}
