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
    <>
    <main className='mainCart'>
      <table>
        <thead>
          <tr>
            <th >Items</th>
            <th>Details</th>
            <th>Quantity</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartItemsNumber() > 0 ? (
          cart.map((i) => (
            <>
              <ItemCart
                name={i.item.name}
                price={i.item.price}
                url={i.item.image}
                id={i.item.id}
                quantity={i.quantity}
              />
            </>
          ))
          ) : (
          <>
          <tr>
            <td>- - -</td>
            <td>- - -</td>
            <td>- - -</td>
            <td>- - -</td>
            <td></td>
          </tr>
          </>
          )}
        </tbody>
      </table>

      <hr/>
      <div className='cartFooter'>
        {total !== 0 ?
        <>
          <p>Subtotal:</p>
          <p>${total} USD</p>
        </>
        :
          ``
        }
      </div>
      <hr />
      <div className='cartButtonMenu'>
        {cartItemsNumber() > 0 && (
          <>
            <Link className='cartContinueButton' to="/commission">
              Continue shopping
            </Link>
            <Link to="/cart" className='cartEmptyButton' onClick={clearCart}>
                Empty Cart
            </Link>
          </>
        )}

        {cartItemsNumber() === 0 && (
          <Link to="/commission" className='cartReturnButton'>
            Go back to shopping
          </Link>
        )}
      </div>
      <hr />
      <Form cart={cart} total={total} clearCart={clearCart}/>
    </main>
    </>
  );
};

export default Cart;