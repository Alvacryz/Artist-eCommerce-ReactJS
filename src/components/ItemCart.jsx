import React from "react";
import { useCartContext } from "../context/CartContext";

const ItemCart = ({ name, price, url, id, quantity }) => {
  const { removeItem } = useCartContext();
  const handleRemove = () => removeItem(id);

  return (
      <tr className='cartWrapper'>
        <td>
          <img
            src={url}
            placeholder="blurred"
            alt="item"
            width={150}
            height={150}
          />
        </td>
        <td className='cartBlock'>
          <h2>{name}</h2>
          <p>${price} USD</p>
        </td>
        <td className='cartBlock'>
          <span>
            x{quantity}
          </span>
          <button onClick={handleRemove}>
            X
          </button>
        </td>
        <td className='cartBlock'>
          ${price*quantity} USD
        </td>
      </tr>
  );
};
export default ItemCart;
