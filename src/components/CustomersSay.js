import Card from "./Card";

const CustomersSay = () => {

    const customers = [
        {
          name: "Logan Bolton",
          jobTitle: "Marketing Coordinator at Larkin",
          statement:
            "It's a great experience. The ambiance is very welcoming and charming. Amazing wines, food and service. Staff are extremely knowledgeable and make great recommendations.",
          ImageSrc: "https://cdn.pixabay.com/photo/2022/08/31/05/03/entrepreneur-7422407_1280.jpg"
        },

        {
            name: "Lucky Ryder",
            jobTitle: "President of Sales at Wiegand",
            statement:
              "This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation, wide wine list and wonderful dessert. I recommend to everyone!",
            ImageSrc: "https://cdn.pixabay.com/photo/2016/01/07/04/52/designer-1125324_1280.jpg"
          },

          {
            name: "Sunday Poon",
            jobTitle: "Account Executive at Raynor",
            statement:
              "First time in Little Lemon and YOU have to go! It's the cutest little spot with amazing food. The Bruschetta is to die for. IT WAS FIRE!! The service we received was so amazing and we will surely be back again.",
            ImageSrc: "https://cdn.pixabay.com/photo/2014/11/19/10/52/man-537136_1280.jpg"
          },

          {
            name: "Amelia Barney",
            jobTitle: "Project Manager at Considine",
            statement:
              "Do yourself a favor and visit this lovely restaurant in Chicago. The service is unmatched. The staff truly cares about your experience. The food is absolutely amazing &ndash; we simply had the best meal while in Chicago.",
            ImageSrc: "https://cdn.pixabay.com/photo/2015/08/11/12/11/aurelie-berger-884272_1280.jpg"
          }
    ]

    return (
        <section className="customers-say">
        <h1 style={{fontSize: "2.5rem", fontWeight: "400", paddingTop: "2.25rem", textAlign: "center"}}>Testimonials</h1>
        <div className="container">
        {customers.map((customer) => (
          <Card
            name={customer.name}
            jobTitle={customer.jobTitle}
            statement={customer.statement}
            imageSrc={customer.ImageSrc}
          />
        ))}
        </div>
        </section>
    );
};

export default CustomersSay;