import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CallToAction from "./CallToAction";
import Chicago from "./Chicago";
import CustomersSay from "./CustomersSay";
import Specials from "./Specials";

const Homepage = () => {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);

    return (
        <main>
            <CallToAction/>
            <Specials/>
            <CustomersSay/>
            <Chicago/>
        </main>
    );
};

export default Homepage;