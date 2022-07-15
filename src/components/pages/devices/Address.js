import React, { useEffect } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';

import { addAddressData } from "../../../services/addressService";
import * as actions from '../../../store/actions/cart';
import Stepper from '../../Stepper/index';
import Button from 'react-bootstrap/Button';
import { isEmpty } from '../../../validation';

const AddressPage = (props) => {

    const previousPage = () => {
        if (props.totalPayment >= 1) {
            props.history.push("/cart/payment");
        } else {
            props.history.push("/cart");
        }
    }

    const handleSubmit = (value) => {
        const obj = {
            addressType: value.addType,
            addressLine1: value.addressLine1,
            addressLine2: value.addressLine2,
            city: value.city,
            state: value.state,
            zipcode: value.zip,
            primaryAddress: false
        }
        if (props.token) {
            addAddressData(obj).then(
                (res) => {
                    value.addressId = res.data.id
                    props.history.push("/cart/checkout");
                    props.addAddress(value)
                }
            ).catch(err => {
                console.log(err);
            })
        } else {
            props.addAddress(value)
            props.history.push("/cart/checkout");
        }
    };

    const addressSchema = Yup.object().shape({
        firstName: Yup.string()
            .required('Please input your first name!'),
        lastName: Yup.string()
            .required('Please input your last name!'),
        addType: Yup.string()
            .required('Please input your add type!'),
        addressLine1: Yup.string()
            .required('Please input your address line1!'),
        addressLine2: Yup.string()
            .required('Please input your address line2!'),
        city: Yup.string()
            .required('Please input your city!'),
        state: Yup.string()
            .required('Please input your state!'),
        zip: Yup.string()
            .required('Please input your zip!'),
        country: Yup.string()
            .required('Please input your country!'),
    });


    useEffect(() => {
        if (isEmpty(props.items)) {
            props.history.push("/cart");
        }
    });

    const initialValues = {
        firstName: props.address.firstName ? props.address.firstName : "",
        lastName: props.address.lastName ? props.address.lastName : "",
        addType: props.address.addType ? props.address.addType : "",
        addressLine1: props.address.addressLine1 ? props.address.addressLine1 : "",
        addressLine2: props.address.addressLine2 ? props.address.addressLine2 : "",
        city: props.address.city ? props.address.city : "",
        state: props.address.state ? props.address.state : "",
        zip: props.address.zip ? props.address.zip : "",
        country: 'USA'
    }

    return (
        <div>
            <div>
                {
                    props.totalPayment >= 1 &&
                    <Stepper steps={[{ title: "Select" }, { title: "Payment" }, { title: "Address" }, { title: "Checkout" }]} activeStep={2} />
                }
                {
                    props.totalPayment === 0 &&
                    <Stepper steps={[{ title: "Select" }, { title: "Address" }, { title: "Checkout" }]} activeStep={1} />

                }
            </div>
            <div className="mt-5 ml-5">
                <h3>When would you like to send us shipping box </h3>
            </div>
            <div className="mt-4 ml-5">
                <h4>Address </h4>
            </div>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={addressSchema}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="row ml-2">
                            <div className="col-md-8">
                                <div className="row">
                                    <div className="col-md-5">
                                        <label className="col-md-12 mt-2">
                                            First Name:
                                       </label>
                                        <div className="col-md-12">
                                            <Field className="form-control" type="text" name="firstName" />
                                            <ErrorMessage name="firstName" className="text-danger" component="div" />
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <label className="col-md-12 mt-2">
                                            LastName:
                                    </label>
                                        <div className="col-md-12">
                                            <Field className="form-control" type="text" name="lastName" />
                                            <ErrorMessage name="lastName" className="text-danger" component="div" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <label className="col-md-12 mt-2">
                                    Add Type:
                                 </label>
                                <div className="col-md-10">
                                    <Field className="form-control" type="text" name="addType" />
                                    <ErrorMessage name="addType" className="text-danger" component="div" />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <label className="col-md-12 mt-2">
                                    Address Line1:
                                 </label>
                                <div className="col-md-10">
                                    <Field className="form-control" type="text" name="addressLine1" />
                                    <ErrorMessage name="addressLine1" className="text-danger" component="div" />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <label className="col-md-12 mt-2">
                                    Address Line2:
                                 </label>
                                <div className="col-md-10">
                                    <Field className="form-control" type="text" name="addressLine2" />
                                    <ErrorMessage name="addressLine2" className="text-danger" component="div" />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="row">
                                    <div className="col-md-5">
                                        <label className="col-md-12 mt-2">
                                            City:
                                    </label>
                                        <div className="col-md-12">
                                            <Field className="form-control" type="text" name="city" />
                                            <ErrorMessage name="city" className="text-danger" component="div" />
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <label className="col-md-12 mt-2">
                                            State:
                                    </label>
                                        <div className="col-md-12">
                                            <Field className="form-control" type="text" name="state" />
                                            <ErrorMessage name="state" className="text-danger" component="div" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="row">
                                    <div className="col-md-5">
                                        <label className="col-md-12 mt-2">
                                            Zip:
                                    </label>
                                        <div className="col-md-12">
                                            <Field className="form-control" type="text" name="zip" />
                                            <ErrorMessage name="zip" className="text-danger" component="div" />
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <label className="col-md-12 mt-2">
                                            Country:
                                        </label>
                                        <div className="col-md-12 mt-1">
                                            <h5>USA</h5>
                                            - Currently we are only accepted device from USA
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="row mt-4 ml-1">
                            <div className="col-md-6 mt-4 d-flex">
                                <Button className="w-100" onClick={previousPage} variant="secondary ml-4">previous</Button>
                                <Button className="w-100" type="submit" variant="secondary ml-4">Next</Button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        address: state.cart.address,
        items: state.cart.items,
        token: state.auth.token,
        totalPayment: state.cart.totalPayment
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addAddress: (value) => dispatch(actions.updateCartAddress(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddressPage);
