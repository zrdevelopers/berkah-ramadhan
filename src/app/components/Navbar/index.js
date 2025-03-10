'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './cart.scss';

const Index = () => {
  const domain = process.env.NEXT_PUBLIC_DOMAIN;
  const pathname = usePathname();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef(null); // Untuk mendeteksi klik di luar dropdown

  const cartItems = [
    { id: 1, name: 'Cokelat Premium', price: 'Rp 25.000', image: '/images/cokelat.png' },
    { id: 2, name: 'Kaos Limited Edition', price: 'Rp 120.000', image: '/images/kaos.png' },
    { id: 3, name: 'Sepatu Sneakers', price: 'Rp 350.000', image: '/images/sneakers.png' },
    { id: 4, name: 'Jam Tangan Sport', price: 'Rp 500.000', image: '/images/watch.png' },
    { id: 5, name: 'Buku Inspiratif', price: 'Rp 85.000', image: '/images/book.png' },
    { id: 6, name: 'Headphone Wireless', price: 'Rp 750.000', image: '/images/headphone.png' }
  ];

  const displayedItems = cartItems.slice(0, 4);
  const remainingItemsCount = cartItems.length - displayedItems.length;

  // Menutup dropdown saat klik di luar area cart
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
            {pathname === '/keranjang' ? (
              <li className="nav-item">
                <Link
                  className={`nav-link ${pathname === '/keranjang' ? 'selected' : ''}`}
                  href="/keranjang"
                >
                  Keranjang Saya
                </Link>
              </li>
            ) : (
              <li
                className="nav-item cart"
                ref={cartRef} // Gunakan ref untuk mendeteksi klik luar
                onMouseEnter={() => setIsCartOpen(true)}
                onClick={() => setIsCartOpen(isCartOpen)}
              >
                <Link className={`nav-link ${pathname === '/keranjang' ? 'selected' : ''}`} href="">
                  <span className="cart-icon">🛒</span>
                </Link>
                <span className="favorite-counter">{cartItems.length}</span>

                {/* Dropdown Produk dalam Keranjang */}
                <div
                  className={`cart-dropdown ${isCartOpen ? 'open' : ''}`}
                  onMouseLeave={() => setIsCartOpen(false)}
                >
                  <div className="cart-items">
                    {displayedItems.length > 0 ? (
                      displayedItems.map((item) => (
                        <div className="cart-item" key={item.id}>
                          <img src={item.image} alt={item.name} className="cart-item-image" />
                          <div className="cart-item-info">
                            <p className="cart-item-name">{item.name}</p>
                            <p className="cart-item-price">{item.price}</p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="empty-cart">
                        <p className="empty-cart-message">Oops! Keranjangmu masih kosong.</p>
                        <Link
                          href="/"
                          className="shop-now-button"
                          onClick={() => setIsCartOpen(false)}
                        >
                          Mulai Belanja
                        </Link>
                      </div>
                    )}
                  </div>

                  {remainingItemsCount > 0 && (
                    <div className="cart-footer">
                      <p className="remaining-items">{remainingItemsCount} Produk Lainnya</p>
                      <Link
                        href="/keranjang"
                        className="view-cart-button"
                        onClick={() => setIsCartOpen(false)}
                      >
                        Lihat Keranjang
                      </Link>
                    </div>
                  )}
                </div>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Index;
