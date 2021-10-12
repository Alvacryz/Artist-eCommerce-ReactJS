import { Link, useLocation } from 'react-router-dom'
import '../../styles/NavBar.css'
import CartWidget from './CartWidget.jsx'

// --- Scroll Effect Navbar
window.onscroll = function() {onscrollFunction()};

function onscrollFunction() {
    let desktopCSS = document.getElementById("navStyle-desktop").style;
    let mobileCSS = document.getElementById("navStyle-mobile").style;

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        desktopCSS.top = "0";
        desktopCSS.opacity = "100%";
      }
    else {
        desktopCSS.top = "-80px";
        desktopCSS.opacity = "0%";
        mobileCSS.display = "none";
        document.body.style.overflow = "visible"
    }
};

function clickSnapTop(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'});
};

// --- Dropdown Effect
function navListDisplay(){
    let mobileCSS = document.getElementById("navStyle-mobile").style;
    if(mobileCSS.display === "block"){
        mobileCSS.display = "none";
        document.body.style.overflow = "visible"
    } else{
        mobileCSS.display = "block";
        document.body.style.overflow = "hidden"
    }
};

function NavBar() {
    let currentLocation = useLocation();
    return (
    <>
        <nav id = "navStyle-desktop">
            <Link to={'/'} onClick={clickSnapTop}>
                <h1 className = "navLogo">AlvArts</h1>
            </Link>
            <Link to={'/'} onClick={clickSnapTop}>
                <button className = "navButton">Home</button>
            </Link>
            <Link to={'/commission'} onClick={clickSnapTop}>
                <button className = "navButton">Commission</button>
            </Link>
            <Link to={'/policy'} onClick={clickSnapTop}>
                <button className = "navButton">{"T&C"}</button>
            </Link>

            {currentLocation.pathname !== '/cart' ? <CartWidget />
            :
            null
            }
            {/* Mobile HTML */}
            <i className = "fas fa-bars fa-2x navListButton" onClick={navListDisplay}/>
        </nav>
        <div id = "navStyle-mobile">
            <div className = "navStyle-mobileContainer">
                <Link to={'/'} className = "navButtonList" onClick={clickSnapTop}>
                    <p>Home</p>
                </Link>
                <Link to={'/commission'} className = "navButtonList"  onClick={clickSnapTop}>
                    <p>Commission</p>
                </Link>
                <Link to={'/policy'} className = "navButtonList" onClick={clickSnapTop}>
                    <p>Terms {'&'} Conditions</p>
                </Link>
                <Link to={'/cart'} className = "navButtonList" onClick={clickSnapTop}>
                    <p>Cart</p>
                </Link>
            </div>
        </div>
    </>
    )
}

export default NavBar