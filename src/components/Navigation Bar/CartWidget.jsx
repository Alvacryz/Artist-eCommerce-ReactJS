import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import '../../styles/NavBar.css'

function CartWidget(){
    const { cartItemsNumber } = useCartContext()
    const num = cartItemsNumber()

    function clickSnapTop(){
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'});
    };

    return(
        <Link to='/cart' onClick={clickSnapTop}>
            <button className = "navButtonCartWidget navIcon">
                <i className = "fas fa-shopping-cart"></i>
                {cartItemsNumber() > 0 ? (
                    <p className = "cartWidgetNumber">{num}</p>
                    ) : (
                    ``
                )}
            </button>
        </Link>
    )
}

export default CartWidget