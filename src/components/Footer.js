import footerLogo from "../assets/logo.png";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
    <footer>
        <div className="footer-bar">
            <figure>
            <img src={footerLogo} alt="Little Lemon Logo" />
            <p style={{fontWeight: "700", marginTop: "0.5rem"}}>HOURS</p>
            <p>Monday &ndash; Sunday</p>
            <div>10:30 AM &ndash; 11:00 PM</div>
            </figure>
            <div className="doormat-nav">
                <p style={{fontWeight: "700"}}>RESTAURANT</p>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/booking">Reservations</Link></li>
                    <li><Link to="/order-online">Order Online</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div>
            <div className="contact">
                <p style={{fontWeight: "700"}}>CONTACT</p>
                <ul>
                    <li>Little Lemon</li>
                    <li>1872 University Drive</li>
                    <li>Chicago IL, 60606</li>
                    <li>Email: hello@littlelemon.com</li>
                    <li>Tel: (312) 456-7890</li>
                </ul>
            </div>
            <div className="social-media-links">
                <p style={{fontWeight: "700"}}>STAY IN TOUCH</p>
                <ul>
                <li><a href="https://twitter.com" className="fab fa-twitter" target="_blank" rel="noreferrer"> </a></li>
                <li><a href="https://facebook.com" className="fab fa-facebook-f" target="_blank" rel="noreferrer"> </a></li>
                <li><a href="https://pinterest.com" className="fab fa-pinterest" target="_blank" rel="noreferrer"> </a> </li>
                <li><a href="https://instagram.com" className="fab fa-instagram" target="_blank" rel="noreferrer"> </a></li>
                </ul>
            </div>
        </div>
        <div className="copyright">
            <span>
                © 2023 Little Lemon. <span style={{display: "inline-block"}}>All Rights Reserved.</span>
            </span>
        </div>
    </footer>
    );
};

export default Footer;