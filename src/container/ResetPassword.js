import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { NavLink } from 'react-router-dom';
import * as Yup from 'yup';

import { resetPassword } from '../services/authService';

class ResetPassword extends React.Component {
    constructor() {
        super();
        this.state = {
            errorMessage: ''
        }
    }

    handleSubmit = (values) => {
        resetPassword(values).then(
            (res) => {
                this.setState({
                    errorMessage: true
                })
                setTimeout(() => {
                    this.props.history.push('/login');
                }, 5000);
            }
        ).catch(err => console.log(err))
    };

    render() {
        const initialValues = {
            email: ''
        }
        const loginSchema = Yup.object().shape({
            email: Yup.string()
                .required('Please input your email!')
                .email('Invalid email'),
        });
        return (
            <div>
                {
                    this.props.loading ?
                        <LoadingOutlined />
                        :
                        <Formik
                            initialValues={initialValues}
                            onSubmit={this.handleSubmit}
                            validationSchema={loginSchema}
                        >
                            <Form>
                                <div className="row">
                                    <div className="col-md-8">
                                        <h1 className="text-info ml-4"> Forgot your password or username </h1>
                                    </div>
                                    <div className="col-md-6">
                                        <h5 className="mt-3 mb-3 ml-4">Don't worry. Resetting your password is easy, just tell us the email address you registered. </h5>
                                    </div>
                                    <div className="col-md-8">
                                        <label className="col-md-2 mt-2">
                                            Email:
                                           </label>
                                        <div className="col-md-10">
                                            <Field className="form-control" type="text" name="email" />
                                            <ErrorMessage name="email" className="text-danger" component="div" />
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="col-md-10 pt-3">
                                            <button type="submit" className="btn btn-primary mr-2">
                                                Submit
                                            </button>
                                        </div>
                                    {
                                        this.state.errorMessage && (
                                            <div className="col-md-8 mt-2">
                                                <div className="col-md-10 p-2 bg-dark text-white pl-1">
                                                     we have send you a link to reset your password in your mail,please follow the step shown in email.
                                                </div>
                                            </div>
                                        )
                                    }
                                    </div>
                                </div>
                            </Form>
                        </Formik>
                }
            </div>
        );
    }
}

export default ResetPassword;