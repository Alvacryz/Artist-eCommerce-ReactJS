import './NavBar.css'
import CartWidget from './CartWidget.jsx'

function NavBar() {
    return (
        <div className = "top">
            <header className = "headerStyle">
                <h1>Sample Title</h1>
            </header>
            <nav className = "navStyle">
                <p className = "navButton">Button 1</p>
                <p className = "navButton">Button 2</p>
                <p className = "navButton">Button 3</p>
                <p className = "navButton">Button 4</p>
                <CartWidget />
            </nav>
        </div>
    )
}

export default NavBar
