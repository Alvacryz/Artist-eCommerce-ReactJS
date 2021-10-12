import React from "react";
import { useCartContext } from "../context/CartContext";

const ItemCart = ({ name, price, url, id, quantity }) => {
  const { removeItem } = useCartContext();
  const handleRemove = () => removeItem(id);

  return (
    <>
      <tr className='cartWrapper'>
        <td key="line1item">
          <img
            src={url}
            placeholder="blurred"
            alt="item"
            width={150}
            height={150}
          />
        </td>
        <td key="line2item">
          <h2>{name}</h2>
          <p>${price} USD</p>
        </td>
        <td key="line3item">
          <span>
            x{quantity}
          </span>
        </td>
        <td key="line4item">
          ${price*quantity} USD
        </td>
        <td key="line5item">
          <button onClick={handleRemove}>
              X
          </button>
        </td>
      </tr>
    </>
  );
};
export default ItemCart;
