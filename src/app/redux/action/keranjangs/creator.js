import { actionType } from '@/app/redux/action/keranjangs/type';

// Fungsi untuk mengambil data dari localStorage
const getCartFromLocalStorage = () => {
  try {
    const cart = localStorage.getItem('keranjangs');
    return cart ? JSON.parse(cart) : [];
  } catch (error) {
    console.error('Error reading cart from localStorage:', error);
    return [];
  }
};

// Fungsi untuk menyimpan data ke localStorage
const saveCartToLocalStorage = (cart) => {
  try {
    localStorage.setItem('keranjangs', JSON.stringify(cart));
  } catch (error) {
    console.error('Error saving cart to localStorage:', error);
  }
};

// Ambil daftar keranjang dari localStorage dan simpan ke Redux
export const getListKeranjangs = () => {
  return (dispatch) => {
    const cart = getCartFromLocalStorage();
    dispatch(saveListKeranjangs(cart));
  };
};

// Simpan daftar keranjang ke Redux
export const saveListKeranjangs = (payload) => {
  saveCartToLocalStorage(payload);
  return {
    type: actionType.loadKeranjangs,
    payload: payload
  };
};

// Tambah produk ke keranjang
export const addToCart = (product, variant, quantity) => {
  return (dispatch, getState) => {
    const state = getState();

    // Pastikan keranjang tidak undefined
    const cart = state.keranjangs?.keranjangsList ? [...state.keranjangs.keranjangsList] : [];

    const itemIndex = cart.findIndex(
      (item) => item.id === product.id && item.variant.id === variant.id
    );

    if (itemIndex !== -1) {
      cart[itemIndex] = {
        ...cart[itemIndex],
        quantity: cart[itemIndex].quantity + quantity
      };
    } else {
      cart.push({
        ...product,
        variant,
        quantity
      });
    }

    dispatch(saveListKeranjangs(cart));
  };
};

// Hapus item dari keranjang
export const removeFromCart = (productId, variantId) => {
  return (dispatch, getState) => {
    let cart = getState().keranjang.keranjangsList.filter(
      (item) => !(item.id === productId && item.variant.id === variantId)
    );
    dispatch(saveListKeranjangs(cart));
  };
};

// Kosongkan keranjang
export const clearCart = () => {
  return (dispatch) => {
    dispatch(saveListKeranjangs([]));
  };
};
