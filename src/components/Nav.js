import {Link} from "react-router-dom";
import { useRef } from "react";

const Nav = () => {

    const navRef = useRef();

    const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

    const hideNavbar = () => {
        navRef.current.classList.remove("responsive_nav")
    };

    return (
        <nav>
            <ul ref={navRef} onClick={hideNavbar}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/booking">Reservations</Link></li>
                <li><Link to="/order-online">Order Online</Link></li>
                <li><Link to="/login">Login</Link></li>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}><i className="fas fa-times"></i></button>
            </ul>
            <button className="nav-btn" onClick={showNavbar}><i className="fa-solid fa-bars"></i></button>
        </nav>
    );
};

export default Nav;