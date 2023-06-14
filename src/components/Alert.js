import React, { useState, forwardRef, useImperativeHandle } from 'react'

const Alert = ({timeout}, ref) => {
    const [show, setShow] = useState(false);
    const [alertMsg, setAlertMsg] = useState(false);

    useImperativeHandle(ref, () => ({
        showAlert(msg = "") {
            setShow(true);
            setAlertMsg(msg);
            setTimeout(() => {
                setShow(false)
            }, timeout);
        },
    }));

    const closeAlert = () => {
        setShow(false);
        setAlertMsg(false);
    }

    return (
    <div className={`alert-container ${show ? "show" : ""}`}>
        <div className="alert-outer-container">
            <i className="fas fa-check-circle"></i>
        </div>
        <div className="alert-inner-container">
            <p>Your Booking Has Been Confirmed!</p>
            <p>{alertMsg}</p>
        </div>
        <button className="alert-inner-button" onClick={closeAlert}>&times;</button>
    </div>
  );
}

export default forwardRef(Alert)
