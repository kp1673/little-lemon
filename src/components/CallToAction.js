import Restaurant from "../assets/restauranfood.jpg";
import { useNavigate } from "react-router-dom";

const CallToAction = () => {
    const navigate = useNavigate();
    return (
        <section className="call-to-action">
            <div className="hero">
            <div className="text">
                <h1 style={{fontSize: "4rem", fontWeight: "500", color: "#f4ce14"}}>Little Lemon</h1>
                <h2 style={{fontSize: "2.5rem", fontWeight: "400", color: "#edefee"}}>Chicago</h2>
                <p style={{fontSize: "1.125rem", fontWeight: "500", color: "#fff", marginTop: "1.25rem"}}>
                    We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                </p>
                <button onClick={() => navigate('booking')}>Reserve a Table</button>
            </div>
            <img src={Restaurant} alt="Restaurant"/>
            </div>
        </section>
    );
};

export default CallToAction;