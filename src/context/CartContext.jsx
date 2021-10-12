import { useContext, createContext, useState } from "react";

export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const inCart = (id) => {
    return cart.find(element => element.item.id === id);
  }

  const addItem = (item, quantity) => {
    // Busca item ID's en el cart para confirmar si ya existen y lo actualiza.
    if(inCart(item.id)){
      const updateCart = [...cart];

      updateCart.forEach( (element) => {
        if(element.item.id === item.id){
          element.quantity += quantity
        }
      })
      setCart(updateCart)
    } 
    // Agrega el item al cart.
    else{
      setCart( [...cart, {item, quantity} ] );
    }
  };

    // Limpia el cart.
  const clearCart = () => {
    setCart([]);
  };

    // Remueve un item especifico del cart.
  const removeItem = (id) => {
    const cartFilter = cart.filter( (element) => element.item.id !== id);
    return setCart(cartFilter);
  };

    const cartItemsNumber = () => {
      return cart.reduce( (acum, valor) => acum + valor.quantity, 0);
    };
  
    const totalPrice = () => {
      return cart.reduce( (acum, valor) => acum + valor.quantity * valor.item.price, 0
);
    };

  return (
    <CartContext.Provider
      value={{ cart, setCart, addItem, clearCart, removeItem, cartItemsNumber, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};