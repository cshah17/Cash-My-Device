import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import Recaptcha from 'react-recaptcha';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import moment from 'moment'

import Support from './Support';
import { UserTradeInfoById } from '../../../../services/myAccountService'
import { checkOutDataAsGuestById } from '../../../../services/addressService'
import { isEmpty } from "../../../../validation/index";
import Stepper from '../../../Stepper/index';


const TrackYourOrder = (props) => {

    const [myOrderTrade, setMyOrderTrade] = useState()
    const [orderNo, setOrderNo] = useState()
    const [isOrder, setIsOrder] = useState(false)

    const handleSubmit = (value) => {
        setMyOrderTrade()
        setOrderNo(value.orderId)
        if (props.token) {
            UserTradeInfoById(value.orderId).then((res) => {
                if (!isEmpty(res.data)) {
                    inProgressStepper(res.data.results);
                    setIsOrder(false);
                } else {
                    setIsOrder(true);
                }
            }).catch((err) => {
                console.log(err);
            })
        } else {
            checkOutDataAsGuestById(value.orderId).then((res) => {
                if (!isEmpty(res.data)) {
                    inProgressStepper(res.data.results);
                    setIsOrder(false);
                } else {
                    setIsOrder(true);
                }
            }).catch((err) => {
                console.log(err);
            })
        }
    }

    const inProgressStepper = async (obj) => {
        await obj.map(x => {
            if (x.status == null) {
                const step = []
                if (isEmpty(x.orderDate)) {
                    step.push({ title: "Order placed", activeStep: 0 }, { title: "Shipping label sent", activeStep: 0 },
                        { title: "Shipping received & device review", activeStep: 0 }, { title: "Payment processed", activeStep: 0 })
                }
                else if (!isEmpty(x.totalPayment) || !isEmpty(x.paymentMethod)) {
                    step.push({ title: "Order placed", activeStep: 5 }, { title: "Shipping label sent", activeStep: 5 },
                        { title: "Shipping received & device review", activeStep: 5 }, { title: "Waiting for Your acceptance", activeStep: 5 }, { title: "Device Accepted", activeStep: 5 }, { title: "Payment processed", activeStep: 5 })
                }
                else if (!isEmpty(x.deviceAccepted) && x.deviceAccepted === "yes" && !isEmpty(x.deviceAccepted)) {
                    step.push({ title: "Order placed", activeStep: 4 }, { title: "Shipping label sent", activeStep: 4 },
                        { title: "Shipping received & device review", activeStep: 4 }, { title: "Waiting for Your acceptance", activeStep: 4 }, { title: "Device Accepted", activeStep: 4 }, { title: "Payment processed", activeStep: 4 })
                }
                else if (!isEmpty(x.deviceTrackingOutbound) && x.deviceAccepted === "no") {
                    step.push({ title: "Order placed", activeStep: 3 }, { title: "Shipping label sent", activeStep: 3 },
                        { title: "Shipping received & device review", activeStep: 3 }, { title: "Sent you a item back", activeStep: 3 })
                }
                else if (!isEmpty(x.deviceAccepted) && x.deviceAccepted === "yes") {
                    step.push({ title: "Order placed", activeStep: 3 }, { title: "Shipping label sent", activeStep: 3 },
                        { title: "Shipping received & device review", activeStep: 3 }, { title: "Waiting for Your acceptance", activeStep: 3 }, { title: "Device Accepted", activeStep: 3 }, { title: "Payment processed", activeStep: 3 })
                }
                else if (!isEmpty(x.deviceAccepted) && x.deviceAccepted === "no") {
                    step.push({ title: "Order placed", activeStep: 2 }, { title: "Shipping label sent", activeStep: 2 },
                        { title: "Shipping received & device review", activeStep: 2 }, { title: "Sent you a item back", activeStep: 2 })
                }
                else if (!isEmpty(x.deviceAccepted)) {
                    step.push({ title: "Order placed", activeStep: 3 }, { title: "Shipping label sent", activeStep: 3 },
                        { title: "Shipping received & device review", activeStep: 3 }, { title: "Device Accepted", activeStep: 3 },
                        { title: "Payment processed", activeStep: 3 })
                }
                else if (!isEmpty(x.deviceAccepted) && x.deviceReview === "requested") {
                    step.push({ title: "Order placed", activeStep: 3 }, { title: "Shipping label sent", activeStep: 3 },
                        { title: "Shipping received & device review", activeStep: 3 }, { title: "Waiting for Your acceptance", activeStep: 3 }, { title: "Payment processed", activeStep: 3 })
                }
                else if (!isEmpty(x.deviceReview) && x.deviceReview === "ok") {
                    step.push({ title: "Order placed", activeStep: 2 }, { title: "Shipping label sent", activeStep: 2 },
                        { title: "Shipping received & device review", activeStep: 2 }, { title: "Device Accepted", activeStep: 2 },
                        { title: "Payment processed", activeStep: 2 })
                }
                else if (!isEmpty(x.deviceReview) && x.deviceReview === "requested") {
                    step.push({ title: "Order placed", activeStep: 2 }, { title: "Shipping label sent", activeStep: 2 },
                        { title: "Shipping received & device review", activeStep: 2 }, { title: "Waiting for Your acceptance", activeStep: 2 }, { title: "Payment processed", activeStep: 2 })
                }
                else if (!isEmpty(x.deviceReceived)) {
                    step.push({ title: "Order placed", activeStep: 2 }, { title: "Shipping label sent", activeStep: 2 },
                        { title: "Shipping received & device review", activeStep: 2 }, { title: "Payment processed", activeStep: 2 })
                }
                else if (isEmpty(x.deviceReceived)) {
                    step.push({ title: "Order placed", activeStep: 1 },
                        { title: "Shipping label sent", activeStep: 1 },
                        { title: "Shipping received & device review", activeStep: 1 }, { title: "Payment processed", activeStep: 2 })
                }
                else if (!isEmpty(x.lableSent) || !isEmpty(x.deviceTrackingInbound) || !isEmpty(x.deviceShippingMethod)) {
                    step.push({ title: "Order placed", activeStep: 1 },
                        { title: "Shipping label sent", activeStep: 1 },
                        { title: "Shipping received & device review", activeStep: 1 }, { title: "Payment processed", activeStep: 1 })
                } else if (isEmpty(x.lableSent) && isEmpty(x.deviceTrackingInbound) && isEmpty(x.deviceShippingMethod)) {
                    step.push({ title: "Order placed", activeStep: 0 }, { title: "Shipping label sent", activeStep: 0 },
                        { title: "Shipping received & device review", activeStep: 0 }, { title: "Payment processed", activeStep: 0 })
                }
                x.steps = step;
                return x
            } else {
                return x
            }
        })
        setMyOrderTrade(obj)
    }

    const sendTicketSchema = Yup.object().shape({
        orderId: Yup.string()
            .required('Order id required!'),
    })

    const initialValues = {
        orderId: ""
    }

    return (
        <div>
            <Support {...props}></Support>
            <br />
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={sendTicketSchema}
                render={({ values, setFieldValue }) => (
                    <Form>
                        <FieldArray
                            name="devices"
                            render={arrayHelpers => (
                                <div className="row">
                                    <div className="col-md-6">
                                        <Field className="form-control" placeholder="Enter your order id" type="text" name="orderId" />
                                        <ErrorMessage name="orderId" className="text-danger" component="div" />
                                    </div>
                                    <div className="col-md-12 mt-4">
                                        <button type="submit" className="px-5 btn btn-outline-primary btn-lg">
                                            Search
                                        </button>
                                    </div>
                                </div>
                            )}
                        />
                    </Form>
                )}
            />

            <div>
                {!isEmpty(myOrderTrade) && myOrderTrade.map((item, index) => {
                    if (item.status === null) {
                        return (
                            <div className="m-4 border-bottom bg-aliceblue row" key={index}>
                                <div className="col-md-6 mt-3">
                                    <label>Trade Reference No : <span className="ml-2">{item.tradeReferenceNo}</span></label>
                                </div>
                                <div className="col-md-6 mt-3">
                                    <label>Date : <span className="ml-2">{moment(item.orderDate).format('MM-DD-YYYY')}</span></label>
                                </div>
                                <div className="col-md-6">
                                    <label>Address : <span className="ml-2">{item.address}</span></label>
                                </div>
                                <div className="col-md-12">
                                    <label>Payment Method : <span className="ml-2">{item.paymentMethod}</span></label>
                                </div>
                                <div className="col-md-12 mb-4">
                                    <Stepper steps={item.steps} activeStep={item.steps[0].activeStep} />
                                </div>
                            </div>
                        )
                    }
                }
                )}
                {isEmpty(myOrderTrade) && isOrder &&
                    <div className="mt-2 text-danger">
                        order no not found with {orderNo} doesn’t exist please try again
                    </div>
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TrackYourOrder);

