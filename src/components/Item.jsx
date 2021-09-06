import './Item Counter/ItemCount.css'

// ----- Item Card Mounting HTML:

const Item = ({item}) => {
    return(
        <div className='itemCard'>
            <img src={item.image} alt="" />
            <h3>{item.name}</h3>
            <p>Precio de : "{item.price}$"</p>
            <button>Detalles</button>
        </div>
    )
}

export default Item