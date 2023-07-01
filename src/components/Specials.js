import GreekSalad from "../assets/greek_salad.jpg";
import Bruschetta from "../assets/bruchetta.svg";
import LemonDessert from "../assets/lemon_dessert.jpg";
import { useNavigate, Link } from "react-router-dom";

const Specials = () => {
    const navigate = useNavigate();
    return (
        <section className="specials">
            <div className="specials-head">
                <h1 style={{fontSize: "2.5rem", fontWeight: "400"}}>This week's specials!</h1>
                <button aria-label="On Click" onClick={() => navigate('/menu')}>Online Menu</button>
            </div>
            <div className="specials-body">
                <article>
                <Link to="/greek-salad"><img src={GreekSalad} alt="Greek Salad"/></Link>
                    <div className="menu">
                        <span style={{fontSize: "1.125rem", fontWeight: "700"}}>Greek Salad</span>
                        <span style={{fontSize: "1.125rem",fontWeight: "500", color: "#ee9972"}}>$12.99</span>
                    </div>
                    <p>
                        The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                    </p>
                    <div className="deliver">
                        <Link to="/order-online">Order a delivery &nbsp; <i class="fa fa-truck" aria-hidden="true"></i></Link>
                    </div>
                </article>
                <article>
                    <Link to="/bruschetta"><img src={Bruschetta} alt="Bruschetta"/></Link>
                    <div className="menu">
                        <span style={{fontSize: "1.125rem", fontWeight: "700"}}>Bruschetta</span>
                        <span style={{fontSize: "1.125rem", fontWeight: "500", color: "#ee9972"}}>$5.99</span>
                    </div>
                    <p>
                    Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                    </p>
                    <div className="deliver">
                        <Link to="/order-online">Order a delivery &nbsp; <i class="fa fa-truck" aria-hidden="true"></i></Link>
                    </div>
                </article>
                <article>
                    <Link to="/lemon-dessert"><img src={LemonDessert} alt="Lemon Dessert"/></Link>
                    <div className="menu">
                        <span style={{fontSize: "1.125rem", fontWeight: "700"}}>Lemon Dessert</span>
                        <span style={{fontSize: "1.125rem", fontWeight: "500", color: "#ee9972"}}>$5.00</span>
                    </div>
                    <p>
                    This comes straight from Grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.
                    </p>
                    <div className="deliver">
                        <Link to="/order-online">Order a delivery &nbsp; <i class="fa fa-truck" aria-hidden="true"></i></Link>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Specials;