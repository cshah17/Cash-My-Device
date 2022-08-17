import React from 'react';
import Support from './Support';
import Button from 'react-bootstrap/Button';


const CustomerSupport = (props) => {
    return (
        <div>
            <Support {...props}></Support>
            <div className="row mt-5 ml-3">
                <div className="col-md-4 mt-2">

                    <h4> <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-envelope-fill mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                    </svg> Email</h4>
                    <label>You'll get a response within 72 hours</label>
                    <Button className="w-5 mt-2" onClick={() => props.history.push('/Support/CustomerSupport/SendTicket')} variant="secondary">Email Us</Button>
                </div>
                <div className="col-md-4 mt-2">
                    <h4> <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-telephone-fill mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z" />
                    </svg>Call Us</h4>
                    <label>We're here from6am - 5pm PT</label>
                    <div className="col-md-12">
                        <label className="text-info h5 mt-3">  000 - Cash my device</label>
                    </div>
                </div>
                <div className="col-md-4 mt-2">
                    <h4><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chat-dots-fill mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    </svg>Chat</h4>
                    <label>Chat live with our team 6am - 5pm PT</label>
                    <Button className="w-5 mt-2" variant="secondary">Chat Now</Button>
                </div>
            </div>

        </div>
    )
}

export default CustomerSupport;
