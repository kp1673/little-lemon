import { useEffect } from 'react';
import { useLocation, Link } from "react-router-dom";
import PageNotFound from "./PageNotFound";

const ConfirmedBooking = () => {

  const location = useLocation();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const formatPhoneNumber = (numberstr) => {

    let cleaned = ('' + numberstr).replace(/\D/g, '');
    let match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);

    if (match) {
      let intlCode = (match[1] ? '+1 ' : '');
      return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
    }

    return null;
  };

  if (location.state) {

  return (
    <main className="confirmed-booking">
    <table>
      <tbody>
        <tr>
          <td colSpan={5} style={{backgroundColor: "var(--secondaryColor)"}}>
            <div style={{textAlign: "center"}}>
              <h1 style={{fontWeight: "500"}}>
                Booking Has Been Confirmed.
              </h1>
            </div>
          </td>
        </tr>
        <tr>
          <td colSpan={5}>
            <p style={{marginBottom: "1rem"}}>
              <strong>{`Dear ${location.state.formData.firstName.charAt(0).toUpperCase() + location.state.formData.firstName.slice(1)},`}</strong><br/><br/>Thank you for booking at Little Lemon. We are delighted to confirm the following reservation. Should you require further assistance, feel free to email or call us directly.</p>
            <p style={{marginBottom: "0.5rem"}}>
            A confirmation of reservation has also been sent to your email address. We look forward to welcoming you soon.
            </p>
          </td>
        </tr>
        <tr>
          <td colSpan={5} style={{backgroundColor: "var(--secondaryColor)"}}>
            <h2 style={{fontWeight: "500"}}>
              Reservation Details:
            </h2>
          </td>
        </tr>
        <tr>
          <td>
            <div>
              <h3>Guest Name</h3>
            </div>
          </td>
          <td colSpan={4}>{`${location.state.formData.firstName.charAt(0).toUpperCase()+ location.state.formData.firstName.slice(1)} ${location.state.formData.lastName.charAt(0).toUpperCase()+ location.state.formData.lastName.slice(1)}`}
          </td>
        </tr>
        <tr>
          <td>
            <div>
              <h3>Confirmation No</h3>
            </div>
          </td>
          <td colSpan={4}>{Math.floor(100000 + Math.random() * 900000)}
          </td>
        </tr>
        <tr>
          <td>
            <div>
              <h3>Reservation Date</h3>
            </div>
          </td>
          <td colSpan={4}>{new Date(location.state.formData.date+'T00:00:00').toLocaleDateString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
          </td>
        </tr>
        <tr>
          <td>
            <div>
              <h3>Reservation Time</h3>
            </div>
          </td>
          <td colSpan={4}>{location.state.formData.time}
          </td>
        </tr>
        <tr>
          <td>
            <div>
              <h3>Number of Diners</h3>
            </div>
          </td>
          <td colSpan={4}>{location.state.formData.count}&nbsp;{parseInt(location.state.formData.count) > 1 ? "People" : "Person"}
          </td>
        </tr>
        <tr>
          <td>
            <div>
              <h3>Occasion</h3>
            </div>
          </td>
          <td colSpan={4}>{location.state.formData.occasion ? location.state.formData.occasion : "-"}
          </td>
        </tr>
        <tr>
          <td colSpan={5} style={{backgroundColor: "var(--secondaryColor)"}}>
            <h2 style={{fontWeight: "500"}}>
              Contact Details:
            </h2>
          </td>
        </tr>
        <tr>
          <td>
            <div>
              <h3>Email</h3>
            </div>
          </td>
          <td colSpan={4}>{location.state.formData.email}
          </td>
        </tr>
        <tr>
          <td>
            <div>
              <h3>Phone Number</h3>
            </div>
          </td>
          <td colSpan={4}>{location.state.formData.phone ? formatPhoneNumber(location.state.formData.phone) : "-"}
          </td>
        </tr>
        <tr>
          <td colSpan={5} style={{backgroundColor: "var(--secondaryColor)"}}>
            <h2 style={{fontWeight: "500"}}>
              Restaurant Policy:
            </h2>
          </td>
        </tr>
        <tr>
          <td>
            <div>
              <h3>Grace Period for Arrival</h3>
            </div>
          </td>
          <td colSpan={4}>
            15 Minutes
          </td>
        </tr>
        <tr>
          <td>
            <div>
              <h3>Reservation Time Limit</h3>
            </div>
          </td>
          <td colSpan={4}>
            90 Minutes
          </td>
        </tr>
        <tr>
          <td>
            <div>
              <h3>Cancellation Policy</h3>
            </div>
          </td>
          <td colSpan={4}>
            Guaranteed reservations canceled within 48 hours of arrival will be subject to a cancellation charge.
          </td>
        </tr>
      </tbody>
    </table>
    <div style={{textAlign:"center"}}>
        <Link to="/" aria-label="back to homepage">Back to Homepage</Link>
    </div>
  </main>
  )
  } else {
    return <PageNotFound/>;
  }
}

export default ConfirmedBooking