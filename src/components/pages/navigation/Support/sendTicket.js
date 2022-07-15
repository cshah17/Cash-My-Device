import React from 'react';
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import Recaptcha from 'react-recaptcha';
import * as Yup from 'yup';

import { phoneRegex } from "../../../../validation/validation";
import { generalInquiry } from "../../../../services/sellBulkService";
import { isEmpty } from "../../../../validation/index";

const SendTicket = (props) => {

    const handleSubmit = (value) => {
        const obj = {
            description: value.description,
            subject: value.subject,
            firstName: value.firstName,
            lastName: value.lastName,
            topic: value.topic,
            email: value.email,
            phoneNumber: value.phoneNumber,
        }
        generalInquiry(obj).then((res) => {
            if (!isEmpty(res.data)) {
                props.history.push('/Support/contact-emails')
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    const sendTicketSchema = Yup.object().shape({
        topic: Yup.string()
            .required('Please input your topic!'),
        subject: Yup.string()
            .required('Please input your Subject!'),
        description: Yup.string()
            .required('Please input your company description!'),
        firstName: Yup.string()
            .required('Please input your first name!'),
        lastName: Yup.string()
            .required('Please input your last name!'),
        phoneNumber: Yup.string()
            .matches(phoneRegex, 'Phone number must be 10 digit.')
            .required('Please input your phone number!'),
        email: Yup.string()
            .email('Invalid email')
            .required('Please input your email!'),
        captcha: Yup.string()
            .required('Required!'),
    })

    const initialValues = {
        description: "",
        subject: "",
        firstName: "",
        lastName: "",
        topic: "",
        email: "",
        phoneNumber: "",
        captcha: ""
    }

    return (
        <div>
            <h2>Submit a question to our support team</h2>
            <hr />
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={sendTicketSchema}
                render={({ values, setFieldValue }) => (
                    <Form>
                        <FieldArray
                            name="devices"
                            render={arrayHelpers => (
                                <div>
                                    <div className="row mt-3">
                                        <div className="col-md-10">
                                            <div className="row">
                                                <label className="col-md-12 mt-2">
                                                    Topic:
                                                </label>
                                                <div className="col-md-12">
                                                    <Field name="topic" className="form-control" as="select">
                                                        <option value="">Select Topic</option>
                                                        <option value="Payment Status">Payment Status</option>
                                                        <option value="My Order">My Order</option>
                                                        <option value="Returns">Returns</option>
                                                        <option value="Cancellation">Cancellation</option>
                                                        <option value="Shipping Status">Shipping Status</option>
                                                        <option value="General Information">General Information</option>
                                                        <option value="Other">Other</option>
                                                    </Field>
                                                    <ErrorMessage name="topic" className="text-danger" component="div" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <label className="col-md-12 mt-2">
                                                    Subject:
                                                 </label>
                                                <div className="col-md-12">
                                                    <Field className="form-control" type="text" name="subject" />
                                                    <ErrorMessage name="subject" className="text-danger" component="div" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <label className="col-md-12 mt-2">
                                                    Briefly discuss your issue or question (Never share your full credit card number:
                                                  </label>
                                                <div className="col-md-12">
                                                    <Field className="form-control" as="textarea" name="description" />
                                                    <ErrorMessage name="description" className="text-danger" component="div" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-10">
                                            <div className="row">
                                                <label className="col-md-12 mt-2">
                                                    First Name:
                                                </label>
                                                <div className="col-md-12">
                                                    <Field className="form-control" type="text" name="firstName" />
                                                    <ErrorMessage name="firstName" className="text-danger" component="div" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <label className="col-md-12 mt-2">
                                                    Last Name:
                                               </label>
                                                <div className="col-md-12">
                                                    <Field className="form-control" type="text" name="lastName" />
                                                    <ErrorMessage name="lastName" className="text-danger" component="div" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <label className="col-md-12 mt-2">
                                                    Phone Number:
                                               </label>
                                                <div className="col-md-12">
                                                    <Field className="form-control" type="text" name="phoneNumber" />
                                                    <ErrorMessage name="phoneNumber" className="text-danger" component="div" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <label className="col-md-12 mt-2">
                                                    Email:
                                                 </label>
                                                <div className="col-md-12">
                                                    <Field className="form-control" type="text" name="email" />
                                                    <ErrorMessage name="email" className="text-danger" component="div" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="row mt-3">
                                        <div className="col-md-10">
                                            <label className="mt-2">
                                                The captcha must be checked before you can submit this form.
                                            </label>
                                            <Recaptcha
                                                name="captcha"
                                                sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                                                render="explicit"
                                                verifyCallback={(response) => {
                                                    setFieldValue('captcha', response)
                                                }}
                                            />
                                            <ErrorMessage name="captcha" className="text-danger" component="div" />
                                        </div>
                                        <div className="col-md-1"></div>
                                        <div className="col-md-1"></div>
                                    </div>

                                    <div className="mt-5">
                                        <button type="submit" className="px-5 btn btn-outline-primary btn-lg">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            )}
                        />
                    </Form>
                )}
            />

        </div>
    )
}

export default SendTicket;
