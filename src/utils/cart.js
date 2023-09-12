

const CART_KEY = 'cart';

export const getCart = () => {
    if (typeof window !== 'undefined') {
        const cart = localStorage.getItem(CART_KEY);
        return cart ? JSON.parse(cart) : [];
  } else {
        return [];
  }
} 

export const addToCart = (item) => {
    const cart = getCart();
    cart.push(item);
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
} 

export const removeFromCart = (index) => {
    const cart = getCart();
    cart.splice(index, 1);
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}