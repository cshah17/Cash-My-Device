import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as Yup from 'yup';
import * as actions from '../store/actions/auth';

class NormalLoginForm extends React.Component {
    constructor() {
        super();
        this.state = {
            errorMessage: ''
        }
    }

    handleSubmit = async (values) => {
        const res = await this.props.onAuth(values.username, values.password);
        if (res && res.status) {
            this.props.history.push('/');
        } else {
            this.setState({
                errorMessage: true
            })
        }
    };

    handleError = errorInfo => {
        console.log('Error :', errorInfo);
    };

    render() {
        const initialValues = {
            username: '',
            password: ''
        }
        const loginSchema = Yup.object().shape({
            username: Yup.string()
                .required('Please input your username!'),
            password: Yup.string()
                .required('Please input your password!'),
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
                            {({ isSubmitting }) => (
                                <Form>
                                    <div className="row">
                                        {
                                            this.props.location && this.props.location.state && this.props.location.state.message && (
                                                <div className="col-md-8 ml-4 mb-2 mt-2">
                                                    <div className="col-md-8 p-2 bg-lightgreen">
                                                        {this.props.location.state.message}
                                                    </div>
                                                </div>
                                            )
                                        }
                                        <div className="col-md-8">
                                            <label className="col-md-2 mt-2">
                                                Username:
                                           </label>
                                            <div className="col-md-10">
                                                <Field className="form-control" type="text" name="username" />
                                                <ErrorMessage name="username" className="text-danger" component="div" />
                                            </div>
                                        </div>

                                        <div className="col-md-8">
                                            <label className="col-md-2 mt-2">
                                                Password:
                                            </label>
                                            <div className="col-md-10">
                                                <Field className="form-control" type="password" name="password" />
                                                <ErrorMessage name="password" className="text-danger" component="div" />
                                                {this.state.errorMessage && <div className="text-danger">your password or username doesn’t match with our records please login with correct username and password</div>}
                                            </div>
                                        </div>

                                        <div className="col-md-8">
                                            <div className="col-md-10 pt-3">
                                                <button type="submit" className="btn btn-primary mr-2" disabled={isSubmitting}>
                                                    Submit
                                                </button>
												or
												<NavLink className="ml-2" to='/signup'>Signup</NavLink>
                                            </div>
                                        </div>

                                        <div className="col-md-8">
                                            <div className="col-md-10 pt-1">
                                                <NavLink className="ml-2" to='/password-reset'>forgot your password or username</NavLink>
                                            </div>
                                        </div>

                                    </div>
                                </Form>
                            )}
                        </Formik>
                }
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
        onAuth: (username, password) => dispatch(actions.authLogin(username, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NormalLoginForm);