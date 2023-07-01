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
    <div role="alert" data-testid="alert-box" className={`alert-container ${show ? "show" : ""}`}>
        <div className="alert-outer-container">
            <i className="fas fa-times-circle"></i>
        </div>
        <div className="alert-inner-container">
            <p>Form submission failed!</p>
            <p>{alertMsg}</p>
        </div>
        <button className="alert-inner-button" aria-label="Close" onClick={closeAlert}>&times;</button>
    </div>
  );
}

export default forwardRef(Alert)
