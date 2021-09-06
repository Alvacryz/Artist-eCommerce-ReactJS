import './Navigation Bar/NavBar.css'

// ----- Item Details Mounting HTML:
function ItemDetail({producto}){
    return(
      <div key={producto.id} className='cardItem'>
          <img src={producto.image} alt="" />
          <h3>{producto.name}</h3>
          <p>{producto.desc}</p>
          <p>Precio: "{producto.price}$"</p>
          <button>Order</button>
      </div>
    )
}

export default ItemDetail