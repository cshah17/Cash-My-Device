import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { iPodApi } from "../../../services/iPhoneApiService";
import { addToCart } from "../../../store/actions/cart";
import { isEmpty } from "../../../validation/index";
import LoaderSpinner from "../../Loader/loaderSpinner";



const deviceList1 = [
    {
        devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Air+Pods/Air+pods+Pro.jpeg',
        label: "Airpods Pro",
        deviceDetail: ['Wireless charging case'],
        imagePath: "https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Air+Pods/Air+pods+Pro.jpeg"
    },
    {
        devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Air+Pods/Air+pods+2.jpeg',
        label: "Airpods 2",
        deviceDetail: ['Wireless charging case', 'Wired charging case', 'Don’t have idea'],
        imagePath: "https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Air+Pods/Air+pods+2.jpeg"
    },
    {
        devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Air+Pods/Air+pods+2.jpeg',
        label: "Airpods",
        deviceDetail: [],
        imagePath: "https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Air+Pods/Air+pods+2.jpeg"
    }
]


const IPod = (props) => {
    const dispatch = useDispatch();
    const [selectedDevice, setSelectedDevice] = useState()
    const [offers, setOffers] = useState()
    const [imagePath, setImagePath] = useState()
    const [isLoader, setIsLoader] = useState(false)

    const [isBrokenOrNo, setIsBrokenOrNo] = useState(false)

    const selectDevice = (obj) => {
        setSelectedDevice([obj]);
        setImagePath(obj.imagePath);
    }

    const handelSubmits = (value) => {
        setIsLoader(true);
        iPodApi(selectedDevice[0].label, value.charChingCaseType, value.condition).then(res => {
            setIsLoader(false)
            if (!isEmpty(res.data && res.data.results)) {
                setIsLoader(false)
                let offer = +res.data.results[0].offer
                if (offer >= 100 && offer <= 200) {
                    offer += 5
                }
                setOffers([{ ...res.data.results[0], offer }])
                if (offer <= 0) {
                    setIsBrokenOrNo(true)
                }
            }
        }).catch(err => {
            setIsLoader(false)
            console.log(err);
        })
    }

    const addCart = (value) => {
        const data = {
            deviceType: "IPod",
            deviceModel: value.airpods_model,
            deviceCapacity: "",
            deviceCarrier: "",
            deviceCondition: value.airpods_condition,
            deviceYear: "",
            deviceProcessor: "",
            deviceOffer: parseInt(value.offer),
            deviceGeneration: "",
            deviceSize: "",
            deviceEdition: "",
            deviceBand: "",
            deviceEngraving: "",
            imagePath: imagePath,
            id: value.id
        }
        dispatch(addToCart(data))
        props.history.push("/cart");
    }

    const selectDevicesSchema = Yup.object().shape({
        condition: Yup.string()
            .nullable(),
        charChingCaseType: Yup.string()
            .nullable(),
    })
    return (
        <div className="sell-a-device-container">
            {
                isEmpty(selectedDevice) &&
                <div className={!isEmpty(selectedDevice) ? 'device-selected' : ''}>
                    <div className="row mt-5">
                        {
                            !isEmpty(deviceList1) && deviceList1.map((item, index) => (
                                <div className={`device-item-div col-md-4 sol-sm-4 cursor-pointer justify-content-space-between ${selectedDevice && selectedDevice[0].devicePhoto === item.devicePhoto ? 'active' : ''}`} key={index}>
                                    <div className="mt-2 text-center">
                                        <img height="200" src={item.devicePhoto} onClick={() => selectDevice(item)} />
                                    </div>
                                    <div className="text-center mt-1">
                                        <label className="w-100" onClick={() => selectDevice(item)} variant="warning">{item.label}</label>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            }

            <Formik
                initialValues={{
                    charChingCaseType: "",
                    condition: ""
                }}
                validationSchema={selectDevicesSchema}
                onSubmit={handelSubmits}
            >
                {({ values, handleChange }) => (
                    <Form>
                        <div className="row">
                            {
                                !isEmpty(selectedDevice) && selectedDevice.map((item, index) => (
                                    <div className="col-md-12" key={index}>
                                        <div className="d-flex align-items-center">
                                            <h4>{item.label} </h4> <span className="ml-2 cursor-pointer text-info h6" onClick={(e) => {
                                                handleChange({
                                                    target: {
                                                        name: "charChingCaseType",
                                                        value: '',
                                                    }
                                                })
                                                handleChange({
                                                    target: {
                                                        name: "condition",
                                                        value: null,
                                                    }
                                                })
                                                setSelectedDevice()
                                                setOffers()
                                                setIsBrokenOrNo(false)
                                            }} >/ Change Model</span>
                                        </div>

                                        {
                                            !values.charChingCaseType && selectedDevice[0].label != "Airpods" &&
                                            <>
                                                <hr />
                                                <div>
                                                    <h4>Select your {item.label} / Charging case type </h4>
                                                </div>
                                                <div className="row">
                                                    {
                                                        !isEmpty(item.deviceDetail) && item.deviceDetail.map((x, i) => (
                                                            <div className="mt-4 col-md-12" key={i} role="group" aria-labelledby="my-radio-group">
                                                                <div className="border col-md-4">
                                                                    <div className="float-right">
                                                                        <Field className="mt-1" type="radio" name="charChingCaseType" value={x} />
                                                                    </div>
                                                                    <label className="mt-1">
                                                                        {x}
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </>
                                        }
                                    </div>
                                ))
                            }

                            {!isEmpty(selectedDevice) &&
                                <div className="col-md-12">
                                    {
                                        values.charChingCaseType && selectedDevice[0].label != "Airpods" &&
                                        <>
                                            <hr />
                                            <div className="d-flex align-items-center">
                                                <h4>{selectedDevice[0].label} / {values.charChingCaseType} </h4> <span className="ml-2 cursor-pointer text-info h6" onClick={(e) => {
                                                    handleChange({
                                                        target: {
                                                            name: "charChingCaseType",
                                                            value: '',
                                                        }
                                                    })
                                                    handleChange({
                                                        target: {
                                                            name: "condition",
                                                            value: null,
                                                        }
                                                    })
                                                    setOffers()
                                                    setIsBrokenOrNo(false)
                                                }} >/ Change Charching Case type</span>
                                            </div>
                                        </>
                                    }

                                    {
                                        (selectedDevice[0].label === "Airpods" ? true : values.charChingCaseType ? true : false) && isEmpty(offers) &&
                                        <>
                                            <hr />
                                            <h4>
                                                Select Cosmetic Condition
                                           </h4>
                                            <div className="mt-4 mr-3 row" role="group" aria-labelledby="my-radio-group">
                                                <div className="col-md-2 ml-4 mt-2 border py-2">
                                                    <div className="d-flex justify-content-between">
                                                        <label className="h5"> Good</label>
                                                        <Field className="mt-1" type="radio" name="condition" value="Good" />
                                                    </div>
                                                    <label className="mt-2">
                                                        Both AirPods function perfectly with minimal wear and tear. Charging case included.
                                                    </label>
                                                </div>

                                                <div className="col-md-2 ml-4 mt-2 border py-2">
                                                    <div className="d-flex justify-content-between">
                                                        <label className="h5"> Fair</label>
                                                        <Field className="mt-1" type="radio" name="condition" value="Fair" />
                                                    </div>
                                                    <label className="mt-2">
                                                        Both AirPods function perfectly with minimal wear and tear. Charging case included.
                                                   </label>
                                                </div>

                                                <div className="col-md-2 ml-4 mt-2 border py-2">
                                                    <div className="d-flex justify-content-between">
                                                        <label className="h5"> Faulty</label>
                                                        <Field className="mt-1" type="radio" name="condition" value="Broken" />
                                                    </div>
                                                    <label className="mt-2">
                                                        One or both AirPods do not function correctly.Charging case included.
                                                   </label>
                                                </div>

                                            </div>
                                        </>
                                    }

                                    {
                                        !isEmpty(offers) &&
                                        <>
                                            <hr />
                                            <div className="d-flex align-items-center">
                                                <h4>{selectedDevice[0].label} / {values.charChingCaseType}/{values.condition} </h4> <span className="ml-2 cursor-pointer text-info h6" onClick={(e) => {
                                                    handleChange({
                                                        target: {
                                                            name: "condition",
                                                            value: null,
                                                        }
                                                    })
                                                    setIsBrokenOrNo(false)
                                                    setOffers()
                                                }} >/ Change condition</span>
                                            </div>
                                        </>
                                    }

                                    {
                                        values.condition && isEmpty(offers) &&
                                        <div className="d-flex justify-content-center">
                                            <div className="col-md-6 mt-4 text-center">
                                                <Button variant="outline-secondary" className="w-100" type="submit">Show my Offer</Button>
                                            </div>
                                        </div>
                                    }
                                </div>
                            }

                            {isLoader && isEmpty(offers) &&
                                <div className="text-center col-md-12">
                                    <LoaderSpinner></LoaderSpinner>
                                </div>
                            }

                            {!isEmpty(offers) && !isBrokenOrNo &&
                                <div className="mt-4 col-md-12 text-center">
                                    <div className="d-flex justify-content-center">
                                        <div className="col-md-2">
                                            <h1 className="border p-4 m-0">
                                                $ {offers[0].offer}
                                            </h1>
                                            <div className="border-right p-1 border-bottom border-left">
                                                <h5 className="mt-1">Your Offer </h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <div className="mt-4 col-md-6">
                                            <Button variant="outline-primary" className="w-100" onClick={() => addCart(offers[0])} type="submit">Sell Now</Button>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <p className="mb-0">*Offered value of the device is subject to device review </p>
                                        <p className="mb-0">We may requote you with higher offer value if we find the cosmetic condition of the device better than what you thought of and vice versa </p>
                                        <p className="mb-0">We process the payment immediately after receiving your device we offer free express shipping. </p>
                                        <p className="mb-0">We don’t pay for the devices that have been reported lost or stolen</p>
                                    </div>
                                </div>
                            }

                            {isBrokenOrNo &&
                                <div className="mt-4 col-md-12 text-center">
                                    <div className="mt-3 bg-custom-danger">
                                        <p className="mb-0">Currently we’re not able to offer any value for the selected device in described condition but </p>
                                        <p className="mb-0">we can safely recycle it in a way which won’t harm environment in any way and leave zero carbon footprint but</p>
                                        <p className="mb-0">We’re glad to offer you $5 bonus on you next device trade/sell worth in offer value more than $100 use promocode RECYCLE at checkout to avail the bonus. </p>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <div className="mt-4 col-md-6">
                                            <Button variant="outline-primary" className="w-100" onClick={() => addCart({
                                                offer: 0,
                                                airpods_condition: values.condition,
                                                id: selectedDevice[0].label,
                                                imagePath: imagePath,
                                                airpods_model: selectedDevice[0].label
                                            })}>Recycle now</Button>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </Form>
                )}
            </Formik>
        </div >
    )
}

export default IPod
