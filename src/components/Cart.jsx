import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import "../styles/Cart.css"
import ItemCart from "./ItemCart";
import Form from "./Form.jsx";

const Cart = () => {
  const { cart, clearCart, cartItemsNumber, totalPrice } = useCartContext();
  const total = totalPrice();

  return (
    <div>
      <table>
        <thead>
          <tr className='cartWrapper'>
            <th className='cartBlockOne'>Items</th>
            <th className='cartBlockTwo'>Details</th>
            <th className='cartBlockThree'>Quantity</th>
            <th className='cartBlockFour'>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItemsNumber() > 0 ? (
          cart.map((i) => (
            <>
              <ItemCart
                key={i.item.id}
                name={i.item.name}
                price={i.item.price}
                url={i.item.image}
                id={i.item.id}
                quantity={i.quantity}
              />
            </>
          ))
          ) : (
          <p>Your cart is empty!</p>
          )}
        </tbody>
      </table>
      
      {cartItemsNumber() > 0 && (
        <>
          <hr/>
          <div className='cartFooter'>
            <p>Subtotal</p>
            <p>${total} USD</p>
          </div>
          <Link to="/">
            <button>
              Continue shopping
            </button>
          </Link>
        </>
      )}

      {cartItemsNumber() > 0 && (
        <button onClick={clearCart}>
          Empty Cart
        </button>
      )}

      {cartItemsNumber() === 0 && (
        <Link to="/">
          <button>
            Go back to shopping
          </button>
        </Link>
      )}
      <Form cart={cart} total={total} clearCart={clearCart}/>
    </div>
  );
};

export default Cart;