import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import '../../styles/NavBar.css'

function CartWidget(){
    const { cartItemsNumber } = useCartContext()
    const num = cartItemsNumber()

    return(
        <Link to='/cart'>
            <button className = "navButton navIcon">
                <img src="https://img.icons8.com/material-outlined/24/000000/shopping-cart--v1.png" alt=""/>
                {cartItemsNumber() > 0 ? (
                    <p className='cartWidgetNumber'>[{num}]</p>
                    ) : (
                    <p className='cartWidgetNumber'></p>
                )}
            </button>
        </Link>
    )
}

export default CartWidget