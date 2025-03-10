'use client';
import React, { useState } from 'react';
import './keranjang.scss';
import Link from 'next/link';

const KeranjangPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Cokelat Premium", price: 25000, image: "/images/cokelat.png", quantity: 1, selected: false },
    { id: 2, name: "Kaos Limited Edition", price: 120000, image: "/images/kaos.png", quantity: 1, selected: false },
    { id: 3, name: "Sepatu Sneakers", price: 350000, image: "/images/sneakers.png", quantity: 1, selected: false },
  ]);

  // Handle Select All
  const handleSelectAll = () => {
    const allSelected = cartItems.every((item) => item.selected);
    setCartItems(cartItems.map((item) => ({ ...item, selected: !allSelected })));
  };

  // Handle Single Item Select
  const handleSelectItem = (id) => {
    setCartItems(
      cartItems.map((item) => (item.id === id ? { ...item, selected: !item.selected } : item))
    );
  };

  // Handle Quantity Change
  const handleQuantityChange = (id, amount) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
      )
    );
  };

  // Handle Item Removal
  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Handle Remove Selected Items
  const handleRemoveSelected = () => {
    setCartItems(cartItems.filter((item) => !item.selected));
  };

  // Calculate Total Price of Selected Items
  const calculateTotalPrice = () => {
    return cartItems
      .filter((item) => item.selected)
      .reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Get Count of Selected Items
  const selectedCount = cartItems.filter((item) => item.selected).length;

  return (
    <section className="keranjang">
      <div className="container">
        <h2 className="heading-2">
          Keranjang Belanja Kamu <span className="amount">({cartItems.length})</span>
        </h2>

        {/* Cart Header */}
        <div className="keranjang-header">
          <label>
            <input
              type="checkbox"
              checked={cartItems.length > 0 && cartItems.every((item) => item.selected)}
              onChange={handleSelectAll}
              aria-label="Select all products"
            />
          </label>
          <div>Produk</div>
          <div>Harga Satuan</div>
          <div>Kuantitas</div>
          <div>Total Harga</div>
          <div>Aksi</div>
        </div>

        {/* Cart Items */}
        <div className="keranjang-items">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div className="keranjang-item" key={item.id}>
                {/* Checkbox */}
                <label>
                  <input
                    type="checkbox"
                    checked={item.selected}
                    onChange={() => handleSelectItem(item.id)}
                  />
                </label>

                {/* Product Details */}
                <div className="product">
                  <img src={item.image} alt={item.name} className="keranjang-item-image" />
                  <p>{item.name}</p>
                </div>

                {/* Unit Price */}
                <div>Rp {item.price.toLocaleString('id-ID')}</div>

                {/* Quantity Controls */}
                <div className="quantity-controls">
                  <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                </div>

                {/* Total Price */}
                <div>Rp {(item.price * item.quantity).toLocaleString('id-ID')}</div>

                {/* Remove Action */}
                <a onClick={() => handleRemoveItem(item.id)} className="cursor-pointer">
                  Hapus
                </a>
              </div>
            ))
          ) : (
            <div className="empty-cart">
              <h3 style={{ marginBottom: '1rem' }}>Oops! Keranjangmu masih kosong.</h3>
              <Link href="/" className="shop-now-button" onClick={() => setIsCartOpen(false)}>
                Mulai Belanja
              </Link>
            </div>
          )}
        </div>

        {/* Cart Footer */}
        {cartItems.length > 0 && (
          <div className="keranjang-footer">
            <div className="left-section">
              {selectedCount > 0 && (
                <button onClick={handleRemoveSelected} className="remove-selected">
                  Hapus yang Dipilih
                </button>
              )}
            </div>

            <div className="right-section">
              <div className="total-price">
                <strong>Total ({selectedCount} produk): </strong><br/>
                <span className="rupiah">Rp {calculateTotalPrice().toLocaleString('id-ID')}</span>
              </div>
              <button className="checkout-button" disabled={selectedCount === 0}>
                Lanjut Via WhatsApp
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default KeranjangPage;
