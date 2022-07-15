import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import { passwordRegex } from '../validation/validation'
import * as actions from '../store/actions/auth';

class SignUpForm extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            email: ''
        }
    }

    handleSubmit = async (values) => {
        this.state = {
            username: '',
            email: ''
        }
        const res = await this.props.onAuth(values.username, values.email, values.password1, values.password2)
        this.setState({
            username: res.username ? res.username[0] : '',
            email: res.email ? res.email[0] : ''
        })
        if (res.status) {
            this.props.history.push('/my-account', { message: "You’ve Successfully Signup!, Please confirm your email by clicking the link sent to your email to get the most out of your Account!" });
        }
    };

    render() {
        const initialValues = {
            username: '',
            email: '',
            password1: '',
            password2: '',
        }
        const signUpSchema = Yup.object().shape({
            username: Yup.string()
                .required('Please input your username!'),
            email: Yup.string()
                .required('Please input your email!')
                .email('Invalid email'),
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
                    onSubmit={this.handleSubmit}
                    validationSchema={signUpSchema}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div className="row">
                                {this.props.loading && <LoadingOutlined /> ||
                                    <>
                                        <div className="col-md-8">
                                            <label className="col-md-2 mt-2">
                                                Username:
                                           </label>
                                            <div className="col-md-10">
                                                <Field className="form-control" type="text" name="username" />
                                                <ErrorMessage name="username" className="text-danger" component="div" />
                                                {this.state.username && <div className="text-danger">{this.state.username}</div>}
                                            </div>
                                        </div>

                                        <div className="col-md-8">
                                            <label className="col-md-2 mt-2">
                                                Email:
                                           </label>
                                            <div className="col-md-10">
                                                <Field className="form-control" type="text" name="email" />
                                                <ErrorMessage name="email" className="text-danger" component="div" />
                                                {this.state.email && <div className="text-danger">{this.state.email}</div>}
                                            </div>
                                        </div>

                                        <div className="col-md-8">
                                            <label className="col-md-2 mt-2">
                                                password1:
                                           </label>
                                            <div className="col-md-10">
                                                <Field className="form-control" placeholder="Enter your password" type="password" name="password1" />
                                                <ErrorMessage name="password1" className="text-danger" component="div" />
                                            </div>
                                        </div>

                                        <div className="col-md-8">
                                            <label className="col-md-2 mt-2">
                                                password2:
                                           </label>
                                            <div className="col-md-10">
                                                <Field className="form-control" placeholder="Confirm your password" type="password" name="password2" />
                                                <ErrorMessage name="password2" className="text-danger" component="div" />
                                            </div>
                                        </div>

                                        <div className="col-md-8">
                                            <div className="col-md-10 pt-3">
                                                <button type="submit" className="btn btn-primary mr-2" disabled={isSubmitting}>
                                                    Submit
                                            </button>
                                            or
                                            <NavLink className="ml-2" to='/login'>Login</NavLink>
                                            <div className="form-group api-response"></div>
                                            </div>
                                        </div>
                                    </>
                                }
                            </div>
                        </Form>
                    )}
                </Formik>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, email, password1, password2) => dispatch(actions.authSignup(username, email, password1, password2))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);