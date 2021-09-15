import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import ItemCount from './Item Counter/ItemCount.jsx';
import { CartContext } from '../context/CartContext.jsx';
import '../styles/CardDetail.css'

// ----- Item Details Mounting HTML:
const ItemDetail = ( {producto} ) => {
  const [display, setdisplay] = useState('hidden');
  const { setCart, addItem } = useContext(CartContext);

  const onAdd = (count) => {
    setCart(count);
    addItem(producto, count);
  };

    return(
      <>
      <div key={producto.id} className='cardWrapper'>
        <img src={producto.image} alt="" className='cardDetailImage'/>
        <div className='cardDetail'>
            <h1 className='cardDetailName'>{producto.name}</h1>
            <p className='cardDetailDesc'>{producto.desc}</p>
            <p>Precio: "{producto.price}$"</p>
            {display ? 
            <ItemCount onAdd={onAdd} setDisplay={setdisplay} stock={producto.stock}/>
            :
            <Link to='/cart'>
            <button className='buttonBuy'>Finish your purchase</button>
            </Link>
            }
        </div>
      </div>
      </>
    )
}

export default ItemDetail