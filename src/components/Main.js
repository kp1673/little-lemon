import {Routes, Route} from "react-router-dom";
import Homepage from "./Homepage";
import BookingPage from "./BookingPage";
import PageNotFound from "./PageNotFound";

const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/booking" element={<BookingPage/>}/>
            <Route path="*" element={<PageNotFound/>} />
        </Routes>
    );
};

export default Main;