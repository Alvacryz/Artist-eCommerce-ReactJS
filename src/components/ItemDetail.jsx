import ItemCount from './Item Counter/ItemCount.jsx';
import '../styles/CardDetail.css'

// ----- Item Details Mounting HTML:
const ItemDetail = ({producto}) => {
  console.log(producto.name)
    return(
      <>
      <div key={producto.id} className='cardWrapper'>
        <img src={producto.image} alt="" className='cardDetailImage'/>
        <div className='cardDetail'>
            <h1 className='cardDetailName'>{producto.name}</h1>
            <p className='cardDetailDesc'>{producto.desc}</p>
            <p>Precio: "{producto.price}$"</p>
            <ItemCount initial={1} stock={producto.stock}/>
        </div>
      </div>
      </>
    )
}

export default ItemDetail