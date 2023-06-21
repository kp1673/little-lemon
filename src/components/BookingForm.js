import { useReducer, useState, useRef, useEffect } from 'react'
import Alert from "./Alert"

const initialState = {
  date: '',
  time: '',
  count: '',
  occasion: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
}

const initializeData = () => {
    const bookingDate = JSON.parse(localStorage.getItem("booking"));
    if (bookingDate && ( new Date(bookingDate) > new Date() )) {
        return {...initialState, date: bookingDate};
    } else {
        return initialState;
    }
}

const formReducer = (state, action) => {
  if (action.reset) {
      return initialState;
  }
  return {
      ...state,
      [action.name]: action.value
  }
};

const initialValidityState = {
    dateError: "",
    timeError: "",
    countError: "",
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    phoneError: "",
    isFormValid: false
}

const nameRegExp = /^[a-zA-Z]+[a-zA-Z]+$/;
const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const telRegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
/*
const isValidTime = (timeString) => {

    const dt1 = new Date(2023, 5, 1, 10, 0);
    const dt2 = new Date(2023, 5, 1, 23, 0);
    let t = timeString.split(':');
    const dt = new Date(2023, 5, 1, parseInt(t[0]), parseInt(t[1]));

    if (dt >= dt1 && dt <= dt2){
        return true;
    } else {
        return false;
        }

};
*/
const formValidityReducer = (state, action) => {

    let isFilled, isValid;

    switch(action.type){

        case "VALIDATE_FIRST_NAME":
        isFilled = action.payLoad.firstName.length > 0;
        isValid = nameRegExp.test(action.payLoad.firstName);
        if (!isFilled){
            return{
                ...state,
                ...({firstNameError: "First name is required.", isFormValid: isFilled && !state.dateError && !state.timeNameError && !state.countError && !state.lastNameError && !state.emailError && !state.phoneError}),
            }
        } else if (!isValid) {
            return{
                ...state,
                ...({firstNameError: "Please enter a valid first name.", isFormValid: isValid && !state.dateError && !state.timeError && !state.countError && !state.lastNameError && !state.emailError && !state.phoneError}),
            }
        } else {
            return{
                ...state,
                ...({firstNameError: "", isFormValid: true && !state.dateError && !state.timeError && !state.countError && !state.lastNameError && !state.emailError && !state.phoneError}),
            }
        }
        case "VALIDATE_LAST_NAME":
        isFilled = action.payLoad.lastName.length > 0;
        isValid = nameRegExp.test(action.payLoad.lastName);
        if (!isFilled) {
            return{
                ...state,
                ...({lastNameError: "Last name is required.", isFormValid: isFilled && !state.dateError && !state.timeError && !state.countError && !state.firstNameError && !state.emailError && !state.phoneError})
            }
        } else if (!isValid) {
            return{
                ...state,
                ...({lastNameError: "Please enter a valid last name.", isFormValid: isValid && !state.dateError && !state.timeError && !state.countError && !state.firstNameError && !state.emailError && !state.phoneError})
            }
        } else {
            return{
                ...state,
                ...({lastNameError: "", isFormValid: true && !state.dateError && !state.timeError && !state.countError && !state.firstNameError && !state.emailError && !state.phoneError})
            }
        }
        case "VALIDATE_DATE":
        isFilled = action.payLoad.date.length > 0;
        if (isFilled) {
            return{
                ...state,
                ...({dateError: "", isFormValid: isFilled &&  !state.timeError && !state.countError && !state.firstNameError && !state.lastNameError && !state.emailError && !state.phoneError})
            }
        } else {
            return{
                ...state,
                ...({dateError: "Reservation date is required.", isFormValid: isFilled &&  !state.timeError && !state.countError && !state.firstNameError && !state.lastNameError && !state.emailError && !state.phoneError})
        }
        }
        case "VALIDATE_TIME":
        isFilled = action.payLoad.time.length > 0;
        /*isValid = isValidTime(action.payLoad.time);*/
        isValid = action.payLoad.date.length > 0;
        if (!isFilled) {
            return{
                ...state,
                ...({timeError: "Reservation time is required.", isFormValid: isFilled && !state.dateError && !state.countError && !state.firstNameError && !state.lastNameError && !state.emailError && !state.phoneError})
            }
        } else if (!isValid) {
            return{
                ...state,
                ...({timeError: "Please choose a reservation date first.", isFormValid: isValid && !state.dateError && !state.countError && !state.firstNameError && !state.lastNameError && !state.emailError && !state.phoneError})
            }
        } else {
            return{
                ...state,
                ...({timeError: "", isFormValid: true && !state.dateError && !state.countError && !state.firstNameError && !state.lastNameError && !state.emailError && !state.phoneError})
            }
        }
        case "VALIDATE_COUNT":
        isFilled = action.payLoad.count.length > 0;
        isValid = action.payLoad.count >=1 && action.payLoad.count <= 10;
        if (!isFilled) {
            return{
                ...state,
                ...({countError: "Number of diners is required.", isFormValid: isFilled && !state.dateError && !state.timeError && !state.firstNameError && !state.lastNameError && !state.emailError && !state.phoneError})
            }
        } else if (!isValid) {
            return{
                ...state,
                ...({countError: "Please enter a number between 1 and 10 inclusive.", isFormValid: isValid && !state.dateError && !state.timeError && !state.firstNameError && !state.lastNameError && !state.emailError && !state.phoneError})
            }
        } else {
            return{
                ...state,
                ...({countError: "", isFormValid: true && !state.dateError && !state.timeError && !state.firstNameError && !state.lastNameError && !state.emailError && !state.phoneError})
            }
        }
        case "VALIDATE_EMAIL":
        isFilled = action.payLoad.email.length > 0;
        isValid = emailRegExp.test(action.payLoad.email);
        if (!isFilled) {
            return{
                ...state,
                ...({emailError: "Email is required.", isFormValid: isFilled && !state.dateError && !state.timeError && !state.countError && !state.firstNameError && !state.lastNameError && !state.phoneError})
            }
        } else if (!isValid) {
            return{
                ...state,
                ...({emailError: "Please enter a valid email address.", isFormValid: isValid && !state.dateError && !state.timeError && !state.countError && !state.firstNameError && !state.lastNameError && !state.phoneError})
            }
        } else {
            return{
                ...state,
                ...({emailError: "", isFormValid: true && !state.dateError && !state.timeError && !state.countError && !state.firstNameError && !state.lastNameError && !state.phoneError})
            }
        }
        case "VALIDATE_PHONE":
        isValid = action.payLoad.phone.length === 0 || telRegExp.test(action.payLoad.phone);
        if (isValid) {
            return{
                ...state,
                ...({phoneError: "", isFormValid: isValid && !state.dateError && !state.timeError && !state.countError && !state.firstNameError && !state.lastNameError && !state.emailError})
            }
        } else {
            return{
                ...state,
                ...({phoneError: "Please enter a valid phone number.", isFormValid: isValid && !state.dateError && !state.timeError && !state.countError && !state.firstNameError && !state.lastNameError && !state.emailError})
            }
        }
        case "RESET":
            return initialValidityState
    default:
        return state
    }
}


function BookingForm({availableTimes, setAvailableTimes, submitForm}) {
    const alertRef = useRef();
    const btnSpinner = useRef();
    const [disabled, setDisabled] = useState(false);
    const [formData, setFormData] = useReducer(formReducer, initializeData());
    const [formValidityData, setFormValidityData] = useReducer(formValidityReducer, initialValidityState);

    useEffect(() => {
    setAvailableTimes({type: "UPDATE_TIMES", payLoad: formData});

    localStorage.setItem("booking", JSON.stringify(formData.date));
     // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formData.date]);
/*
    useEffect(() => {
        localStorage.setItem("booking", JSON.stringify(formData));
      }, [formData]);
*/
    const handleSubmit = event => {
        event.preventDefault();
        setDisabled(true);
        startSpinner();
        setTimeout(() => {
            setDisabled(false);
            setFormData({
                reset: true
            });
            setFormValidityData({type: "RESET"});
            stopSpinner();
            alertRef.current.showAlert("Please check your email for complete confirmation.");
            submitForm(formData);
        }, 3000);
      };

    const handleChange = event => {
        setFormData({
            name: event.target.name,
            value: event.target.value,
        });
    };

    const startDate = () => {
        let today, yyyy, dd, mm
        today = new Date();
        yyyy = today.toLocaleString("default", { year: "numeric" });
        mm = today.toLocaleString("default", { month: "2-digit" });
        dd = today.toLocaleString("default", { day: "2-digit" });
        return yyyy + "-" + mm + "-" + dd;
    };

    const startSpinner = () => {
        btnSpinner.current.classList.add("button--loading");
    }

    const stopSpinner = () => {
        btnSpinner.current.classList.remove("button--loading");
    }

  return (
    <>
        <Alert ref={alertRef} timeout={10000} />
        <form id="reservationForm" onSubmit={handleSubmit} aria-label="booking form" noValidate>
                <fieldset disabled={disabled}>
                    <h2 style={{marginBottom: "1.25rem"}}>TABLE BOOKING</h2>
                    <label>
                    <p>Reservation Date<span style={{color: "#f00", fontSize: "1.5rem", lineHeight: "1rem"}}>*</span></p>
                    <input
                        type="date"
                        name="date"
                        data-testid="date-input"
                        aria-label="reservation date"
                        style={{backgroundColor:formValidityData.dateError ? "#fddde6" : ""}}
                        onChange={handleChange}
                        onBlur={(e) => setFormValidityData({type: "VALIDATE_DATE", payLoad: formData})}
                        value={formData.date || ''}
                        min={startDate()}
                    />
                    {formValidityData.dateError && <small style={{color: "#f00"}} role="alert">{formValidityData.dateError}</small>}
                </label>
                <label>
                <p> Reservation Time<span style={{color: "#f00", fontSize: "1.5rem", lineHeight: "1rem"}}>*</span></p>
                <select
                    name="time"
                    aria-label="reservation time"
                    onChange={handleChange}
                    style={{backgroundColor:formValidityData.timeError ? "#fddde6" : ""}}
                    onBlur={(e) => setFormValidityData({type: "VALIDATE_TIME", payLoad: formData})}
                    value={formData.time || ''}
                    //disabled={!formData.date}
                >
                    <option value="">Select a time</option>
                    {availableTimes.map((time) => <option data-testid="select-option" key={`${time}_${new Date().getTime()}`} value={time}>{time}</option>)}
                </select>
                {formValidityData.timeError &&
                    <small style={{color: "#f00"}} role="alert">{formValidityData.timeError}</small>}
                </label>
                <label>
                    <p>Number of Diners<span style={{color: "#f00", fontSize: "1.5rem", lineHeight: "1rem"}}>*</span></p>
                    <input
                        type="number"
                        name="count"
                        aria-label="number of diners"
                        style={{backgroundColor:formValidityData.countError ? "#fddde6" : ""}}
                        onChange={handleChange}
                        onBlur={(e) => setFormValidityData({type: "VALIDATE_COUNT", payLoad: formData})}
                        step="1"
                        value={formData.count || ''}
                        min="1"
                        max="10"
                    />
                    {formValidityData.countError &&
                    <small style={{color: "#f00"}} role="alert">{formValidityData.countError}</small>}
                </label>
                <label>
                <p>Occasion</p>
                <select
                    name="occasion"
                    aria-label="occasion"
                    onChange={handleChange}
                    value={formData.occasion || ''}
                >
                    <option value="">Select an occasion</option>
                    <option value="birthday">Birthday</option>
                    <option value="engagement">Engagement</option>
                    <option value="anniversary">Anniversary</option>
                </select>
                </label>
            </fieldset>
            <fieldset disabled={disabled}>
                <h2 style={{marginBottom: "1.25rem"}}>CONTACT INFORMATION</h2>
                <label>
                    <p>First Name<span style={{color: "#f00", fontSize: "1.5rem", lineHeight: "1rem"}}>*</span></p>
                    <input
                        type="text"
                        name="firstName"
                        aria-label="first name"
                        style={{backgroundColor:formValidityData.firstNameError ?"#fddde6" : ""}}
                        onChange={handleChange}
                        onBlur={(e) => setFormValidityData({type: "VALIDATE_FIRST_NAME", payLoad: formData})}
                        value={formData.firstName || ''}
                    />
                    {formValidityData.firstNameError && <small style={{color: "#f00"}} role="alert">{formValidityData.firstNameError}</small>}
                </label>
                <label>
                    <p>Last Name<span style={{color: "#f00", fontSize: "1.5rem", lineHeight: "1rem"}}>*</span></p>
                    <input
                        type="text"
                        name="lastName"
                        aria-label="last name"
                        style={{backgroundColor:formValidityData.lastNameError ?"#fddde6" : ""}}
                        onChange={handleChange}
                        onBlur={(e) => setFormValidityData({type: "VALIDATE_LAST_NAME", payLoad: formData})}
                        value={formData.lastName || ''}
                    />
                    {formValidityData.lastNameError && <small style={{color: "#f00"}} role="alert">{formValidityData.lastNameError}</small>}
                </label>
                <label>
                    <p>Email<span style={{color: "#f00", fontSize: "1.5rem", lineHeight: "1rem"}}>*</span></p>
                    <input
                        type="email"
                        name="email"
                        aria-label="email"
                        style={{backgroundColor:formValidityData.emailError ? "#fddde6" : ""}}
                        onChange={handleChange}
                        onBlur={(e) => setFormValidityData({type: "VALIDATE_EMAIL", payLoad: formData})}
                        value={formData.email || ''}
                    />
                    {formValidityData.emailError && <small style={{color: "#f00"}} role="alert">{formValidityData.emailError}</small>}
                </label>
                <label>
                    <p>Phone Number</p>
                    <input
                        type="tel"
                        name="phone"
                        aria-label="phone number"
                        style={{backgroundColor:formValidityData.phoneError ? "#fddde6" : ""}}
                        onChange={handleChange}
                        onBlur={(e) => setFormValidityData({type: "VALIDATE_PHONE", payLoad: formData})}
                        value={formData.phone || ''}
                        placeholder="(xxx) xxx-xxxx"
                    />
                    {formValidityData.phoneError && <small style={{color: "#f00"}} role="alert">{formValidityData.phoneError}</small>}
                </label>
            </fieldset>
        </form>
        <div style={{textAlign: "center"}}>
            <button ref={btnSpinner} type="submit" form="reservationForm" disabled={!formValidityData.isFormValid}><span className="button__text">Make a Reservation</span></button>
        </div>
        </>
  )
}

export default BookingForm