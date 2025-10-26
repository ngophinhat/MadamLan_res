import React, { createContext, useState, useContext } from 'react';
import { useNotification } from './NotificationContext';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const { showNotification } = useNotification();

  // THAY ĐỔI LOGIC Ở ĐÂY
  const addToCart = (item) => {
    const exist = cartItems.find((x) => x._id === item._id);

    if (exist) {
      // Nếu có rồi, tăng số lượng lên 1
      setCartItems(
        cartItems.map((x) =>
          x._id === item._id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      // Nếu chưa có, thêm vào với số lượng là 1
      setCartItems([...cartItems, { ...item, qty: 1 }]);
    }
    showNotification(`Đã cập nhật món "${item.name}"`);
  };

  // THÊM HÀM MỚI ĐỂ GIẢM SỐ LƯỢNG
  const decreaseQuantity = (item) => {
    const exist = cartItems.find((x) => x._id === item._id);

    if (exist.qty === 1) {
      // Nếu số lượng là 1, giảm nữa thì sẽ xóa khỏi giỏ hàng
      setCartItems(cartItems.filter((x) => x._id !== item._id));
    } else {
      // Nếu số lượng > 1, chỉ giảm đi 1
      setCartItems(
        cartItems.map((x) =>
          x._id === item._id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
    showNotification(`Đã cập nhật món "${item.name}"`);
  };
  
  // Hàm xóa thẳng khỏi giỏ hàng
  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((x) => x._id !== item._id));
  };
  
  const value = { cartItems, addToCart, removeFromCart, decreaseQuantity };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};