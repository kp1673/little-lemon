import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import restaurant from "../assets/restaurant.jpg";
import BookingForm from "./BookingForm";
import {fetchAPI, submitAPI} from "../assets/js/api"


const initializeTimes = () => {
    return fetchAPI(new Date());
};

const updateTimes = (state, action) => {
    if (action.payLoad.date.length !== 0 && action.type === 'UPDATE_TIMES') {
        return fetchAPI(new Date(action.payLoad.date));
    } else {
        return state;
    }
};


const BookingPage = () => {

    const [availableTimes, setAvailableTimes] = useReducer(updateTimes, initializeTimes());

    const navigate = useNavigate();

    const submitForm = (formData) => {
        if (submitAPI(formData)){
            navigate("/confirmed-booking");
        }
    };

    return (
        <main className="booking" style={{ backgroundImage: `url(${restaurant})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
            <h1 style={{fontSize: "4rem", fontWeight: "500", textShadow: "0 1px 0 #fff", textAlign: "center", color: "var(--mainColor)", padding: "1.25rem 0"}}>Reservation</h1>
            <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} submitForm={submitForm}/>
        </main>
    );
};

export default BookingPage;