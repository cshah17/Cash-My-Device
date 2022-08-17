import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';

import * as action from '../../../store/actions/cart';
import * as actions from '../../../store/actions/auth';
import { isEmpty } from '../../../validation';
import { removeToCart } from '../../../store/actions/cart'
import { passwordRegex } from '../../../validation/validation'

const initialValuesLogin = {
    username: '',
    password: ''
}

const initialValuesRegister = {
    username: '',
    email: '',
    password1: '',
    password2: '',
}


const CartPage = (props) => {
    const dispatch = useDispatch();
    const cartData = useSelector(state => state.cart);
    const [isLogin, setIsLogin] = useState(true)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        var total = cartData && cartData.items.length > 0 &&
            cartData.items.reduce((a, { deviceOffer }) => a + deviceOffer, 0)
        setTotal(total)

    }, [cartData])

    const removeCartById = (id) => {
        dispatch(removeToCart(id))
    }

    const addMoreDevice = () => {
        props.history.push("/SellADevice");
    }

    const loginOrRegister = () => {
        setIsLogin(false)
    }

    const handleLogin = async (values) => {
        const res = await props.onAuth(values.username, values.password);
        if (res && res.status) {
            props.history.push('/cart/payment');
        }
    }

    const handleRegister = async (values) => {
        const res = await props.onRegister(values.username, values.email, values.password1, values.password1);
        if (res && res.status) {
            props.history.push("/cart/address");
        }
    }

    const checkOutAsGust = () => {
        props.totalPayment(total)
        if (total <= 1) {
            props.history.push("/cart/address");
        } else {
            props.history.push('/cart/payment');
        }
    }

    const loginSchema = Yup.object().shape({
        username: Yup.string()
            .required('Please input your username!'),
        password: Yup.string()
            .required('Please input your password!'),
    });

    const registerSchema = Yup.object().shape({
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
            <h1>
                Cart
            </h1>
            {
                !isEmpty(cartData.items) && cartData.items.map((item, index) => (
                    <div className="m-4 border-bottom bg-aliceblue row" key={index} >
                        <div className="col-md-12 mt-3">
                            <img className="img-width" src={item.imagePath} />
                        </div>
                        <div className="col-md-12 mt-3">
                            <h6 className="ml-2">{item.deviceModel} , {item.deviceCapacity}  {item.ipad_generation} </h6>
                            <h6 className="ml-2 mt-1">{item.deviceCondition === '100%' ? "Good" : item.deviceCondition === '75%' ? "Used" : item.deviceCondition === '50%' ? "Poor" : item.deviceCondition === 'Broken' ? "Faulty" : item.deviceCondition} Condition  </h6>
                        </div>
                        <div className="col-md-12 mb-4">
                            {item.deviceOffer === 0 &&
                                <h4 className="ml-5 mt-2">Recycling</h4>
                            }
                            {item.deviceOffer != 0 &&
                                <h2 className="ml-5 mt-2">${item.deviceOffer}</h2>
                            }
                            <div className="ml-4 p-3 bg-primary text-center col-md-2">Today's Offer</div>
                            <span className="float-right text-danger cursor-pointer" onClick={() => removeCartById(item.id)}><svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                            </svg></span>
                        </div>
                    </div>
                ))
            }
            {
                !isEmpty(cartData.items) &&
                <div className="mt-3 mb-3 col d-flex">
                    <h3>
                        Total : ${total}
                    </h3>
                </div>
            }
            <div className="mt-3 mb-3 col d-flex">
                <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-plus-circle-fill mr-2 mt-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z" />
                </svg>

                <Button onClick={() => addMoreDevice()} variant="secondary">Add another device to sell </Button>
            </div>

            {
                isLogin && !isEmpty(cartData.items) && !props.token &&
                <div className="row mt-4 justify-content-center">
                    <div className="col-md-4">
                        <Button className="w-100" onClick={() => checkOutAsGust()} variant="outline-primary">Check out As a Guest </Button>
                    </div>
                    <div className="col-md-1">
                        <div className="text-center">
                            
                            <h1>OR</h1>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <Button className="w-100" onClick={() => loginOrRegister()} variant="outline-primary">Login or Register to Checkout  </Button>
                        <div className="mt-4">
                            <ul>
                                <li>We recommend to create the account if you don't have one!</li>
                                <li>If you are a existing customer kindly sign in to proceed2</li>
                                <li>Register user have more way to track their order</li>
                                <li>Its more convenient for you to get notify of each steps during the process</li>
                            </ul>
                        </div>
                    </div>
                </div>

            }

            {
                isLogin && !isEmpty(cartData.items) && props.token &&
                <div className="row mt-4 justify-content-center">
                    <div className="col-md-4">
                        <Button className="w-100" onClick={() => checkOutAsGust()} variant="outline-primary">Check out  </Button>
                    </div>
                </div>

            }


            {!isLogin &&
                <div className="row mt-5">
                    <div className="col-md-12 ml-4 mb-1">
                        <h4>Log In</h4>
                    </div>
                    <div className="col-md-12">
                        <Formik
                            initialValues={initialValuesLogin}
                            onSubmit={handleLogin}
                            validationSchema={loginSchema}
                        >
                            {({ isSubmitting }) => (
                                <Form>
                                    <div className="row">
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
                                            </div>
                                        </div>

                                        <div className="col-md-8">
                                            <div className="col-md-10 pt-3">
                                                <button type="submit" className="btn btn-primary mr-2">
                                                    Login
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                    <div className="col-md-6 text-center text-bold">
                        <h6>
                            Or <br />
                     Create Account (Register)
                        </h6>
                    </div>
                    <div className="col-md-12">
                        <Formik
                            initialValues={initialValuesRegister}
                            onSubmit={handleRegister}
                            validationSchema={registerSchema}
                        >
                            {({ isSubmitting }) => (
                                <Form>
                                    <div className="row">
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
                                                Email:
                                           </label>
                                            <div className="col-md-10">
                                                <Field className="form-control" type="text" name="email" />
                                                <ErrorMessage name="email" className="text-danger" component="div" />
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <label className="col-md-2 mt-2">
                                                Password1:
                                           </label>
                                            <div className="col-md-10">
                                                <Field className="form-control" placeholder="Enter your password" type="password" name="password1" />
                                                <ErrorMessage name="password1" className="text-danger" component="div" />
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <label className="col-md-2 mt-2">
                                                Password2:
                                           </label>
                                            <div className="col-md-10">
                                                <Field className="form-control" placeholder="Confirm your password" type="password" name="password2" />
                                                <ErrorMessage name="password2" className="text-danger" component="div" />
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="col-md-10 pt-3">
                                                <button type="submit" className="btn btn-primary mr-2">
                                                    Register
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>

            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        items: state.cart.items
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, password) => dispatch(actions.authLogin(username, password)),
        onRegister: (username, email, password1, password2) => dispatch(actions.authSignup(username, email, password1, password2)),
        totalPayment: (value) => dispatch(action.updateTotalPayment(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
