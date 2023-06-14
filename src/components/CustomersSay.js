const CustomersSay = () => {
    return (
        <section className="customers-say">
        <h1 style={{fontSize: "2.5rem", fontWeight: "400", paddingTop: "2.25rem", textAlign: "center"}}>Testimonials</h1>
        <div className="container">
        <div className="customer">
            <figure className="photo">
                <span className="fa fa-custom">&#xf005; &#xf005; &#xf005; &#xf005; &#xf005;</span>
                <img src="https://cdn.pixabay.com/photo/2022/08/31/05/03/entrepreneur-7422407_1280.jpg" alt="Tessa Cherie"/>
            </figure>
            <div className="person">
            <span style={{fontSize: "1.125rem", fontWeight: "700"}}>Logan Bolton</span>
            <p style={{fontSize: "1.0rem", fontWeight: "500", color: "var(--mainColor)"}}>Marketing Coordinator at Larkin</p>
            </div>
            <blockquote className="review">
                It's a great experience. The ambiance is very welcoming and charming. Amazing wines, food and service. Staff are extremely knowledgeable and make great recommendations.
            </blockquote>
        </div>
        <div className="customer">
            <figure className="photo">
            <span className="fa fa-custom">&#xf005; &#xf005; &#xf005; &#xf005; &#xf005;</span>
            <img src="https://cdn.pixabay.com/photo/2016/01/07/04/52/designer-1125324_1280.jpg" alt="Lucky Ryder"/>
            </figure>
            <div className="person">
            <span style={{fontSize: "1.125rem", fontWeight: "700"}}>Lucky Ryder</span>
            <p style={{fontSize: "1rem", fontWeight: "500", color: "var(--mainColor)"}}>President of Sales at Wiegand</p>
            </div>
            <blockquote className="review">
                This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation, wide wine list and wonderful dessert. I recommend to everyone!
            </blockquote>
        </div>
        <div className="customer">
            <figure className="photo">
                <span className="fa fa-custom">&#xf005; &#xf005; &#xf005; &#xf005; &#xf005;</span>
                <img src="https://cdn.pixabay.com/photo/2014/11/19/10/52/man-537136_1280.jpg" alt="Sunday Poon"/>
            </figure>
            <div className="person">
            <span style={{fontSize: "1.125rem", fontWeight: "700"}}>Sunday Poon</span>
            <p style={{fontSize: "1rem", fontWeight: "500", color: "var(--mainColor)"}}>Account Executive at Raynor</p>
            </div>
            <blockquote className="review">
                First time in Little Lemon and YOU have to go! It's the cutest little spot with amazing food. The Bruschetta is to die for. IT WAS FIRE!! The service we received was so amazing and we will surely be back again.
            </blockquote>
        </div>
        <div className="customer">
            <figure className="photo">
                <span className="fa fa-custom">&#xf005; &#xf005; &#xf005; &#xf005; &#xf005;</span>
                <img src="https://cdn.pixabay.com/photo/2015/08/11/12/11/aurelie-berger-884272_1280.jpg" alt="Jeffrey Barney"/>
            </figure>
            <div className="person">
            <span style={{fontSize: "1.125rem", fontWeight: "700"}}>Amelia Barney</span>
            <p style={{fontSize: "1rem", fontWeight: "500", color: "var(--mainColor)"}}>Project Manager at Considine</p>
            </div>
            <blockquote className="review">Do yourself a favor and visit this lovely restaurant in Chicago. The service is unmatched. The staff truly cares about your experience. The food is absolutely amazing &ndash; we simply had the best meal while in Chicago.</blockquote>
        </div>
        </div>
        </section>
    );
};

export default CustomersSay;