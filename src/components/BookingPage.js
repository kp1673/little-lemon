import { useReducer, useEffect } from "react";
import { useLocation } from "react-router-dom";
import restaurant from "../assets/restaurant.jpg";
import BookingForm from "./BookingForm";
import {fetchAPI} from "../assets/js/api"


const initializeTimes = () => {
    return fetchAPI(new Date());
};

const updateTimes = (state, action) => {
    if (action.type === 'UPDATE_TIMES') {
        return fetchAPI(new Date(action.payLoad.date +"T00:00:00"));
    } else {
        return state;
    }
};


const BookingPage = () => {

    const [availableTimes, setAvailableTimes] = useReducer(updateTimes, initializeTimes());

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);

    return (
        <main className="booking" style={{ backgroundImage: `url(${restaurant})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
            <h1 style={{fontSize: "4rem", fontWeight: "500", textShadow: "0 1px 0 #fff", textAlign: "center", color: "var(--mainColor)", padding: "1.25rem 0"}}>Reservation</h1>
            <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes}/>
        </main>
    );
};

export default BookingPage;