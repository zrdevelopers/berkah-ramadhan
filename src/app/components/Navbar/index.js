'use client';

import React, { useState } from 'react';
import Link from 'next/link'; // Ensure Link is imported from next/link
import { usePathname } from 'next/navigation';
import './cart.scss';

const Index = () => {
  const domain = process.env.NEXT_PUBLIC_DOMAIN; // Access the environment variable
  const pathname = usePathname();
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Contoh data produk di keranjang (bisa diganti dengan state global atau props)
  const cartItems = [
    { id: 1, name: 'Cokelat Premium', price: 'Rp 25.000', image: '/images/cokelat.png' },
    { id: 2, name: 'Kaos Limited Edition', price: 'Rp 120.000', image: '/images/kaos.png' },
    { id: 3, name: 'Sepatu Sneakers', price: 'Rp 350.000', image: '/images/sneakers.png' },
    { id: 4, name: 'Jam Tangan Sport', price: 'Rp 500.000', image: '/images/watch.png' },
    { id: 5, name: 'Buku Inspiratif', price: 'Rp 85.000', image: '/images/book.png' },
    { id: 6, name: 'Headphone Wireless', price: 'Rp 750.000', image: '/images/headphone.png' }
  ];

  // Ambil hanya 2 item pertama untuk ditampilkan di dropdown
  const displayedItems = cartItems.slice(0, 4);
  const remainingItemsCount = cartItems.length - displayedItems.length;

  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <Link href="/" className="brand">
            <img src={domain + '/assets/images/vandz15.png'} alt="Logo" className="brand-img" />
          </Link>
          <ul className="nav-list">
            <li className="nav-item">
              <Link className={`nav-link ${pathname === '/' ? 'selected' : ''}`} href="/">
                <span className="produk-icon">🛍️</span>
              </Link>
            </li>
            <li
              className="nav-item cart"
              onMouseEnter={() => setIsCartOpen(true)}
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              <Link
                className={`nav-link ${pathname === '/keranjang' ? 'selected' : ''}`}
                href=""
              >
                <span className="cart-icon">🛒</span>
              </Link>
              <span className="favorite-counter">{cartItems.length}</span>

              {/* Dropdown Produk dalam Keranjang */}
              {isCartOpen && (
                <div
                className={`cart-dropdown ${isCartOpen ? 'open' : ''}`}
                // onMouseLeave={() => setIsCartOpen(false)}
                >
                  <div className="cart-items">
                    {displayedItems.map((item) => (
                      <div className="cart-item" key={item.id}>
                        <img src={item.image} alt={item.name} className="cart-item-image" />
                        <div className="cart-item-info">
                          <p className="cart-item-name">{item.name}</p>
                          <p className="cart-item-price">{item.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bagian untuk menunjukkan jumlah produk lainnya */}
                  {remainingItemsCount > 0 && (
                    <div className="cart-footer">
                      <p className="remaining-items">{remainingItemsCount} Produk Lainnya</p>
                      <Link href="/keranjang" className="view-cart-button">
                        Lihat Keranjang
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Index;
