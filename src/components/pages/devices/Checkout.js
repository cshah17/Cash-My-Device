import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { connect, useSelector } from 'react-redux';
import { checkOutData, checkOutDataAsGuest } from "../../../services/addressService";
import { rewards, userRewards } from "../../../services/myAccountService";
import * as actions from '../../../store/actions/cart';
import { isEmpty } from '../../../validation';
import Stepper from '../../Stepper/index';

const CheckOutPage = (props) => {
    const cartData = useSelector(state => state.cart);
    const [total, setTotal] = useState(0)
    const [promoCode, setPromoCode] = useState(null)
    const [promoErrorMessage, setPromoErrorMessage] = useState(null)
    const [promoSuccessMessage, setPromoSuccessMessage] = useState(null)
    const [promoCodeBonus, setPromoCodeBonus] = useState(null)

    const previousPage = () => {
        props.history.push("/cart/address");
    }

    const handleSubmit = () => {
        const obj = {
            devices: cartData.items,
            TotalPayment: total,
            address: props.address.addressId,
            paymentMethod: props.paymentMethod.paymentId
        }
        if (props.token) {
            checkOutData(obj).then(
                (res) => {
                    props.history.push("/check-out-success");
                    props.clearCart();
                }
            ).catch(err => {
                console.log(err);
            })
        } else {
            const data = {
                firstName: props.address.firstName,
                lastName: props.address.lastName,
                email: '',
                devices: cartData.items,
                totalPayment: total,
                paymentMethod: props.paymentMethod.method,
                payment_name: props.paymentMethod.name,
                paymentUsername: props.paymentMethod.useName,
                paymentPhone: props.paymentMethod.phone,
                paymentEmail: props.paymentMethod.email,
                phoneNumber: props.paymentMethod.phone ? props.paymentMethod.phone : '',
                addressType: props.address.addType,
                addressLine1: props.address.addressLine1,
                addressLine2: props.address.addressLine2,
                city: props.address.city,
                state: props.address.state,
                zipcode: props.address.zip
            }
            checkOutDataAsGuest(data).then(
                (res) => {
                    props.history.push("/check-out-success");
                    props.clearCart();
                }
            ).catch(err => {
                console.log(err);
            })
        }
    };

    const applyPromoCode = () => {
        if (promoCode) {
            const obj = {
                promocode: promoCode
            };
            rewards(obj).then(
                (res) => {
                    if (!isEmpty(res.data.results)) {
                        const bonus = res.data.results[0].bonus.replace('$', '')
                        setPromoCodeBonus(parseInt(bonus))
                        if (isEmpty(res.data.results[0].condition)) {
                            const finalTotal = total + parseInt(bonus)
                            setTotal(finalTotal)
                            setPromoSuccessMessage(`Promo code ${promoCode} applied`)
                        } else {
                            const error = [];
                            const condition = res.data.results[0].condition
                            if (condition.includes('cartValue=>$100')) {
                                if (total > 100) { } else {
                                    error.push('Cart value should be minimum $100')
                                }
                            }
                            if (condition.includes('registerUserOnly')) {
                                if (props.token) {
                                    const userRewardsObj = {
                                        id: localStorage.getItem('UserId'),
                                        promocode: res.data.results[0].id
                                    }
                                    userRewards(userRewardsObj).then(
                                        (response) => {
                                            if (!isEmpty(response.data.results[0].promocode)) {
                                                const finalTotal = total + parseInt(bonus)
                                                setTotal(finalTotal)
                                                setPromoSuccessMessage(`Promo code ${promoCode} applied`)
                                            } else {
                                                error.push('Invalid promo code')
                                            }
                                        })
                                } else {
                                    error.push('Please login or register to avail this promo code')
                                }
                            }

                            if (!error.length) {
                                const finalTotal = total + parseInt(bonus)
                                setTotal(finalTotal)
                                setPromoSuccessMessage(`Promo code ${promoCode} applied`)
                            } else {
                                setPromoErrorMessage(error[0])
                            }

                        }
                    }
                }
            ).catch(err => {
                console.log(err);
            })
        }
    }

    useEffect(() => {
        var total = cartData && cartData.items.length &&
            cartData.items.reduce((a, { deviceOffer }) => a + deviceOffer, 0) || 0
        setTotal(total)
    }, [cartData])

    useEffect(() => {
        if (isEmpty(props.items)) {
            props.history.push("/cart");
        }
    });

    return (
        <div>
            <div>
                {
                    props.totalPayment >= 1 &&
                    <Stepper steps={[{ title: "Select" }, { title: "Payment" }, { title: "Address" }, { title: "Checkout" }]} activeStep={3} />
                }
                {
                    props.totalPayment === 0 &&
                    <Stepper steps={[{ title: "Select" }, { title: "Address" }, { title: "Checkout" }]} activeStep={2} />
                }
            </div>

            <div className="mt-4 ml-5">
                <h4> Summary </h4>
            </div>
            <Formik
                initialValues={{ method: props.paymentMethod.method ? props.paymentMethod.method : '' }}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="row mt-4 ml-1 mr-1">
                            {
                                !isEmpty(cartData.items) && cartData.items.map((item, index) => (
                                    <div className="col-md-12 mt-4 bg-aliceblue d-flex justify-content-space-between" key={index} >
                                        <div className="ml-2 mt-2 mb-2 d-flex">
                                            <img width="80" src={item.imagePath} />
                                            <div className="ml-2 mt-2">
                                                <h4>
                                                    {item.deviceModel} <br />
                                                </h4>
                                                <h5>
                                                    {item.deviceCondition === '100%' ? "Good" : item.deviceCondition === '75%' ? "Used" : item.deviceCondition === '50%' ? "Poor" : item.deviceCondition === 'Broken' ? "Faulty" : item.deviceCondition}
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="ml-2 mt-2">
                                            <h3>
                                                {item.deviceOffer <= 0 && 'Recycle now'}
                                                {item.deviceOffer > 0 && `$ ${item.deviceOffer}`}
                                            </h3>
                                        </div>
                                    </div>
                                ))
                            }
                            <div className="col-md-12 mt-4 d-flex">
                                <div>
                                    <Field className="form-control" onChange={(e) => {
                                        setPromoCode(e.target.value)
                                        setPromoErrorMessage(null)
                                        setPromoSuccessMessage(null)
                                        setTotal(total - promoCodeBonus)
                                        setPromoCodeBonus(null)
                                    }} placeholder="Enter promo code" type="text" name="promoCode" />
                                </div>
                                <div >
                                    <Button className="w-100" onClick={applyPromoCode} variant="secondary ml-4">Apply</Button>
                                </div>
                            </div>
                            {
                                promoErrorMessage &&
                                <div className="ml-4 mt-2 text-danger">
                                    {promoErrorMessage}
                                </div>
                            }

                            {
                                promoSuccessMessage &&
                                <div className="ml-4 mt-2 text-success">
                                    {promoSuccessMessage}
                                </div>
                            }
                            <div className="col-md-12 mt-4">
                                <h4>Name : {cartData && cartData.address.firstName}</h4>
                            </div>
                            {
                                cartData && cartData.address &&
                                <div className="col-md-12 mt-2">
                                    <h6>Address : {cartData.address.addressLine1}, {cartData.address.state}, {cartData.address.city}</h6>
                                </div>
                            }

                            <div className="col-md-12 mt-2">
                                <h6>Payment mode : {cartData && cartData.payment.method}</h6>
                            </div>

                            {
                                total > 0 &&
                                <div className="col-md-12">
                                    <hr />
                                    <h3>Total : {total}</h3>
                                </div>
                            }

                            <div className="col-md-6 mt-4 d-flex">
                                <Button className="w-100" onClick={previousPage} variant="secondary ml-4">previous</Button>
                                <Button className="w-100" type="submit" variant="secondary ml-4">
                                    {total <= 0 && 'Recycle now'} {total > 0 && 'Cash My Devices Now'}
                                </Button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div >
    )
}

const mapStateToProps = state => {
    return {
        paymentMethod: state.cart.payment,
        items: state.cart.items,
        token: state.auth.token,
        address: state.cart.address,
        totalPayment: state.cart.totalPayment
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addPayment: (value) => dispatch(actions.updateCartPayment(value)),
        clearCart: (username, password) => dispatch(actions.clearCartItem())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckOutPage);
