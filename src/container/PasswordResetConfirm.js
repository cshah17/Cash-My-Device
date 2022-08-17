import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import * as Yup from 'yup';

import isEmpty from '../validation/isEmpty'
import { confirmResetPassword } from '../services/authService';
import { passwordRegex } from '../validation/validation';


const PasswordResetConfirm = (props) => {
    const { uid, token } = useParams();
    const [isError, setIsError] = useState(false)

    const handleSubmit = (values) => {
        const obj = {
            uid,
            token,
            new_password1: values.password1,
            new_password2: values.password2
        }
        confirmResetPassword(obj).then(
            (res) => {
                if (!isEmpty(res)) {
                    this.props.history.push('/login', { message: "Your password has been reset please login with new password" });
                } else {
                    setIsError(true)
                }
            }
        ).catch(err => setIsError(true))
    };

    const initialValues = {
        password1: '',
        password2: '',
    }

    const loginSchema = Yup.object().shape({
        password1: Yup.string()
            .required('Please input your password1!')
            .matches(passwordRegex, "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            ),
        password2: Yup.string()
            .required('Please input your password2!')
            .oneOf([Yup.ref('password1'), null], 'Password1 do not match'),
    });

    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => handleSubmit(values)}
                validationSchema={loginSchema}
            >
                <Form>
                    <div className="row">
                        <div className="col-md-8">
                            <h5 className="text-info ml-4"> To reset you password, Please enter your new password below. </h5>
                        </div>

                        <div className="col-md-8">
                            <label className="col-md-2 mt-2">
                                password1:
                             </label>
                            <div className="col-md-10">
                                <Field className="form-control" placeholder="Enter your new password" type="password" name="password1" />
                                <ErrorMessage name="password1" className="text-danger" component="div" />
                            </div>
                        </div>

                        <div className="col-md-8">
                            <label className="col-md-2 mt-2">
                                password2:
                            </label>
                            <div className="col-md-10">
                                <Field className="form-control" placeholder="confirm your new password" type="password" name="password2" />
                                <ErrorMessage name="password2" className="text-danger" component="div" />
                            </div>
                        </div>

                        <div className="col-md-8">
                            <div className="col-md-10 pt-3">
                                <button type="submit" className="btn btn-primary mr-2">
                                    Submit
                                </button>
                            </div>
                        </div>

                        {
                            isError && (
                                <div className="col-md-8 mt-2">
                                    <div className="col-md-8 p-2 ml-4 bg-dark text-white pl-1">
                                        link has expired please go to login page and use forget password and username link to received new link
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

export default PasswordResetConfirm;