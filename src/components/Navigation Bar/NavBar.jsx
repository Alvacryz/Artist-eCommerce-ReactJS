import { Link } from 'react-router-dom'
import '../../styles/Header.css'
import '../../styles/NavBar.css'
import CartWidget from './CartWidget.jsx'

function NavBar() {
    return (
        <div className = "top">
            <header className = "headerStyle">
                <h1>Sample Title</h1>
            </header>
            <nav className = "navStyle">
                <Link to='/'>
                    <h1 className = "logo">AlvArts</h1>
                </Link>
                <Link to={'/category/head'}>
                    <button className = "navButton">Headshot</button>
                </Link>
                <Link to={'/category/upper'}>
                    <button className = "navButton">Upperbody</button>
                </Link>
                <Link to={'/category/full'}>
                    <button className = "navButton">Full Body</button>
                </Link>
                <Link to={'/category/illustration'}>
                    <button className = "navButton">Illustration</button>
                </Link>

                <CartWidget />
            </nav>
        </div>
    )
}

export default NavBar