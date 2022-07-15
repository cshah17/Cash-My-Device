import React from 'react'
import { NavLink } from 'react-router-dom';

function ThankYou() {
    return (
        <div className="row d-flex justify-content-center">
            <div className="col-md-6 text-center">
                <h1 className="text-info">Thank You!</h1>
                <h4 className="mt-4">An account representative will be in touch within 48 hours.</h4>
                <h4 className="mt-3 mb-3">If you have any question before then, please
                <span className="text-info"> <NavLink className="ml-2" to='/Support'>visit our help center.</NavLink> </span></h4>
                <h4 className="mt-5"><span className="text-info">Refer an Organization </span> and earn $200!</h4>
            </div>
        </div>
    )
}

export default ThankYou
