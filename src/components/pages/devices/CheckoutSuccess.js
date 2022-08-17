import React, { Component } from 'react'

class CheckOutSuccessPage extends Component {
    render() {
        return (
            <div className="text-center">
                <p className="text-color pt-3 pb-3">
                    <h4>
                        Congratulation!
                    </h4>
                </p>
                <p>
                    We have received your order
                    Please check your email for the instructions on how to ship your devices to us and for shipping label

                </p>
                <p>
                    We thrive for the best user experience
                    Please contact us if you have any questions at any point during the shipping process
                </p>

                <p>
                    For further information on what to do next please <a href="/Support/CustomerSupport">click here</a>
                </p>

            </div>
        )
    }
}

export default CheckOutSuccessPage
