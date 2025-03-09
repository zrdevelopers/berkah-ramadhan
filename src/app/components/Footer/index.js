'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';

export default function Index() {
  const pathname = usePathname();
  return (
    <Fragment>
      <footer
        className={`footers ${pathname === '/keranjang' ? 'footers-mobile' : ''}`}
        id="footers"
      >
        <h3>Buruan Beli Sebelum Kehabisan!</h3>
        {/* <p> Makanan enak buat mood kamu makin semangat lagi</p> */}
        <p className="copyright-text">
          <small>
            {/* &copy; 2022 - {new Date().getFullYear()}{' '} */}
            &copy; 2024 - {new Date().getFullYear()}{' '}
            <Link href="/" className="text-primary">
              VandZ15
            </Link>{' '}
            Published by{' '}
            <a href="https://zrdevelopers.github.io/" target="_blank" className="text-primary">
              ZRDevelopers
            </a>
            . All rights reserved
          </small>
        </p>
      </footer>
    </Fragment>
  );
}
