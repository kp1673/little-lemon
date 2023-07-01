import Mario from '../assets/MarioandAdrianA.jpg'

const Chicago = () => {
    return (
        <section className='chicago'>
            <div className="container">
                <div class="text">
                    <h1 style={{fontSize: "2.5rem", fontWeight: "400"}}>About <span style={{display: "inline-block"}}>Little Lemon</span></h1>
                    <h2 style={{fontSize: "1.5rem", fontWeight: "400"}}>Chicago</h2>
                    <p style={{marginTop: "1.0rem"}}>
                        Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively and casual environment. The restaurant features a locally sourced menu with daily specials.
                    </p>
                </div>
                <img src={Mario} alt="Mario and Adrian"/>
            </div>
        </section>
    );
};

export default Chicago;