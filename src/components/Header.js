import Nav from "./Nav";
import Logo from '../assets/Logo.svg'
import {Link} from 'react-router-dom';

const Header = () => {
    return (
    <header>
        <Link to="/" style={{zIndex: '3'}}>
            <img src={Logo} alt="Little Lemon Logo"/>
        </Link>
        <Nav/>
    </header>
    );
};

export default Header;