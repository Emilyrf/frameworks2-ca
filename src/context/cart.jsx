import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [isAddToCartDisabled, setIsAddToCartDisabled] = useState(false);


  const addToCart = (item) => {
    setIsAddToCartDisabled(true);
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }

    setShowSuccessAlert(true);
    setTimeout(() => {
      setIsAddToCartDisabled(false);
      setShowSuccessAlert(false);
    }, 3000);
  };

  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    const total = cartItems.reduce((total, item) => total + item.discountedPrice * item.quantity, 0);

    // Format the total as currency (USD in this example)
    return total.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);


  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        showSuccessAlert,
        isAddToCartDisabled,
        removeFromCart,
        clearCart,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};