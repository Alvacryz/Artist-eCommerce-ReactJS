import { Link } from 'react-router-dom'
import '../styles/CardItem.css'

// ----- Item Card Mounting HTML:

const Item = ({item}) => {
    return(
        <div className='itemCard'>
            <img src={item.image} alt="" className='itemImage'/>
            <h1 className='itemCardTitle'>{item.name}</h1>
            <p className='itemCardPrice'>{item.price}$ USD</p>
            <Link to={`/details/${item.id}`}>
            <button className='itemCardButton'>Order</button>
            </Link>
        </div>
    )
}

export default Item