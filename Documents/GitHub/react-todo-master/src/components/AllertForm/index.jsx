import React from 'react';


import './AlertForm.scss';


const AlertForm = ({ text }) => {
    return (
        <div className="alert__form">
            {text}
        </div>
    )
}

export default AlertForm;