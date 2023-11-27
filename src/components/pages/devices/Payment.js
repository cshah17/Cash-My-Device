import React, { useEffect, useState, useRef } from 'react'
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { connect } from 'react-redux';
import { userPaymentInfo } from "../../../services/addressService";

import * as actions from '../../../store/actions/cart';
import Stepper from '../../Stepper/index';
import Button from 'react-bootstrap/Button';
import { isEmpty } from '../../../validation';
import { phoneRegex } from "../../../validation/validation";

const PaymentPage = (props) => {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState()
    const fromRef = useRef()
    const previousPage = () => {
        props.history.push("/cart");
    }

    const handleSubmit = (value) => {
        if (selectedPaymentMethod) {
            value.method = selectedPaymentMethod
            props.history.push("/cart/address");
            if (props.token) {
                const paymentObj = {
                    paymentMethod: value.method,
                    name: value.name,
                    username: value.useName,
                    Phone: value.phone,
                    email: value.email
                }
                userPaymentInfo(paymentObj).then(
                    (res) => {
                        value.paymentId = res.data.id
                        props.addPayment(value)
                    }
                ).catch(err => {
                    console.log(err);
                })
            } else {
                props.addPayment(value)
            }
        }
    };

    const paymentSchema = Yup.object().shape({
        firstname: Yup.string()
            .required('Please enter firstname'),
        lastname: Yup.string()
            .required('Please enter lastname'),
        phone: Yup.string()
            .matches(phoneRegex, "Please enter valid contact number")
            .required('Please enter phone number'),
        email: Yup.string()
            .email('Please enter valid email!')
            .required('Please enter email'),
    });

    const paymentCashappSchema = Yup.object().shape({
        name: Yup.string()
            .required('Please enter name'),
        cashTag: Yup.string()
            .required('Please enter your name as per your bank account'),
        phone: Yup.string()
            .matches(phoneRegex, "Please enter valid contact number")
            .required('Please enter phone number'),
        email: Yup.string()
            .email('Please enter valid email!')
            .required('Please enter email'),
    });

    const paymentZelleSchema = Yup.object().shape({
        name: Yup.string()
            .required('Please enter name'),
        phone: Yup.string()
            .matches(phoneRegex, "Please enter valid contact number")
            .required('Please enter phone number'),
        email: Yup.string()
            .email('Please enter valid interac email!')
            .required('Please enter email'),
    });

    useEffect(() => {
        // if (isEmpty(props.items)) {
        //     props.history.push("/cart");
        // }
    });


    const nextButton = () => {
        if (fromRef.current) {
            fromRef.current.handleSubmit()
        }
    }

    return (
        <div>
            <div>
                {
                    props.totalPayment >= 1 &&
                    <Stepper steps={[{ title: "Select" }, { title: "Payment" }, { title: "Address" }, { title: "Checkout" }]} activeStep={1} />
                }
                {
                    props.totalPayment === 0 &&
                    <Stepper steps={[{ title: "Select" }, { title: "Address" }, { title: "Checkout" }]} activeStep={0} />
                }
            </div>
            <div className="mt-5 ml-5">
                <h3>How Would you like to get paid: </h3>
            </div>
            <div className="mt-4 ml-5">
                <h4>Payment method: </h4>
            </div>

            <div className="row ml-4">
                <div className="col-md-12 mt-3 mr-3 ">
                    <div className="col-md-4 p-3 bg-aliceblue rounded">
                        <label>Cash</label>
                        <input className="float-right" onClick={() => setSelectedPaymentMethod('Cash')} type="radio" value="Cash" name="method" /> <br />
                        {
                            selectedPaymentMethod === 'Cash' &&
                            <Formik
                                initialValues={{ name: '', useame: '', phone: '', email: '' }}
                                onSubmit={handleSubmit}
                                validationSchema={paymentSchema}
                                innerRef={fromRef}
                            >
                                {({ isSubmitting }) => (
                                    <Form>
                                        <div className="col-md-12 pl-0 mt-2">
                                            <label>
                                               First Name:
                                               </label>
                                            <div>
                                                <Field className="form-control" type="text" name="name" />
                                                <ErrorMessage name="name" className="text-danger" component="div" />
                                            </div>
                                        </div>
                                        <div className="col-md-12 pl-0">
                                            <label>
                                                Last Name:
                                               </label>
                                            <div>
                                                <Field className="form-control" type="text" name="useName" />
                                                <ErrorMessage name="useName" className="text-danger" component="div" />
                                            </div>
                                        </div>
                                        <div className="col-md-12 pl-0">
                                            <label>
                                                Phone:
                                               </label>
                                            <div>
                                                <Field className="form-control" type="text" name="phone" />
                                                <ErrorMessage name="phone" className="text-danger" component="div" />
                                            </div>
                                        </div>
                                        <div className="col-md-12 pl-0">
                                            <label>
                                                Email :
                                                </label>
                                            <div>
                                                <Field className="form-control" type="text" name="email" />
                                                <ErrorMessage name="email" className="text-danger" component="div" />
                                            </div>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        }
                    </div>
                </div>
                <div className="col-md-12 mt-3">
                    <div className="col-md-4 p-3 bg-aliceblue rounded">
                        <label>Check</label>
                        <input className="float-right" onClick={() => setSelectedPaymentMethod('Check')} type="radio" value="Check" name="method" /><br />
                        {
                            selectedPaymentMethod === 'Check' && <Formik
                                initialValues={{ name: '', useName: '', phone: '', email: '' }}
                                onSubmit={handleSubmit}
                                validationSchema={paymentSchema}
                                innerRef={fromRef}
                            >
                                {({ isSubmitting }) => (
                                    <Form>
                                        <div className="col-md-12 pl-0 mt-2">
                                            <label>
                                                Name:
                                                </label>
                                            <div>
                                                <Field className="form-control" type="text" name="name" />
                                                <ErrorMessage name="name" className="text-danger" component="div" />
                                            </div>
                                        </div>
                                        <div className="col-md-12 pl-0">
                                            <label>
                                                Name as per your bank account:
                                                </label>
                                            <div>
                                                <Field className="form-control" type="text" name="useName" />
                                                <ErrorMessage name="useName" className="text-danger" component="div" />
                                            </div>
                                        </div>
                                        <div className="col-md-12 pl-0">
                                            <label>
                                                Phone:
                                                </label>
                                            <div>
                                                <Field className="form-control" type="text" name="phone" />
                                                <ErrorMessage name="phone" className="text-danger" component="div" />
                                            </div>
                                        </div>
                                        <div className="col-md-12 pl-0">
                                            <label>
                                                Email :
                                               </label>
                                            <div>
                                                <Field className="form-control" type="text" name="email" />
                                                <ErrorMessage name="email" className="text-danger" component="div" />
                                            </div>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        }
                    </div>
                </div>

                <div className="col-md-12 mt-3">
                    <div className="col-md-4 p-3 bg-aliceblue rounded">
                        <label>E-Transfer</label>
                        <input className="float-right" onClick={() => setSelectedPaymentMethod('E-Transfer')} type="radio" value="E-Transfer" name="method" /><br />
                        {
                            selectedPaymentMethod === 'E-Transfer' && <Formik
                                initialValues={{ name: '', cashTag: '', phone: '', email: '' }}
                                onSubmit={handleSubmit}
                                validationSchema={paymentCashappSchema}
                                innerRef={fromRef}
                            >
                                {({ isSubmitting }) => (
                                    <Form>
                                        <div className="col-md-12 pl-0 mt-2">
                                            <label>
                                               First Name:
                                                </label>
                                            <div>
                                                <Field className="form-control" type="text" name="name" />
                                                <ErrorMessage name="name" className="text-danger" component="div" />
                                            </div>
                                        </div>
                                        <div className="col-md-12 pl-0">
                                            <label>
                                               Last Name:
                                             </label>
                                            <div>
                                                <Field className="form-control" type="text" name="cashTag" />
                                                <ErrorMessage name="cashTag" className="text-danger" component="div" />
                                            </div>
                                        </div>
                                        <div className="col-md-12 pl-0">
                                            <label>
                                                Phone:
                                                </label>
                                            <div>
                                                <Field className="form-control" type="text" name="phone" />
                                                <ErrorMessage name="phone" className="text-danger" component="div" />
                                            </div>
                                        </div>
                                        <div className="col-md-12 pl-0">
                                            <label>
                                               Email for Interac  :
                                               </label>
                                            <div>
                                                <Field className="form-control" type="text" name="email" />
                                                <ErrorMessage name="email" className="text-danger" component="div" />
                                            </div>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        }

                    </div>
                </div>

                
            </div>
            <div className="row mt-4 ml-1">
                <div className="col-md-6 mt-4 d-flex">
                    <Button className="w-100" onClick={previousPage} variant="secondary ml-4">previous</Button>
                    <Button className="w-100" onClick={nextButton} variant="secondary ml-4">Next</Button>
                </div>
            </div>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        method: state.cart.payment.method,
        totalPayment: state.cart.totalPayment,
        token: state.auth.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addPayment: (value) => dispatch(actions.updateCartPayment(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentPage);
