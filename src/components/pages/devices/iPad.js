import React, { useState ,useEffect} from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import Button from 'react-bootstrap/Button'
import * as Yup from 'yup';
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';

import LoaderSpinner from "../../Loader/loaderSpinner"
import { isEmpty } from "../../../validation/index";
import { iPadApi } from "../../../services/iPhoneApiService";
import { addToCart } from "../../../store/actions/cart";

const deviceList1 = [
    {
        devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/iPad/iPadPro.png',
        label: "iPadPro",
        deviceDetail: [
            { gen: "1st Gen", gb: ["256 GB", "128 GB ", "32 GB", "not known"], screenSize: ['9.7"', "12.9\""] }, { gen: "2nd Gen", gb: ["512 GB", "256 GB", "64 GB", "not known"], screenSize: ["10.5\"", "12.9\""] }, { gen: "3rd Gen", gb: ["1 TB", "512 GB", "256 GB", "64 GB", "not known"], screenSize: ["11\"", "12.9\""] }],
        imagePath: "https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/iPad/iPadPro.png"
    },
    {
        devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/iPad/iPadMini.png',
        label: "iPadMini",
        deviceDetail: [
            { gen: "3rd Gen", gb: ["128 GB ", "64 GB", "16 GB", "not known"], screenSize: [] }, { gen: "4th Gen", gb: ["128 GB ", "64 GB", "32 GB", "16 GB", "not known"], screenSize: [] }, { gen: "5th Gen", gb: ["256 GB", "64 GB", "not known"], screenSize: [] }],
        imagePath: "https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/iPad/iPadMini.png"
    },
    {
        devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/iPad/iPadAir.png',
        label: "ipadAir",
        deviceDetail: [
            { gen: "2nd Gen", gb: ["128 GB ", "64 GB", "32 GB", "16 GB", "not known"], screenSize: [] }, { gen: "3rd Gen", gb: ["256 GB", "64 GB", "not known"], screenSize: [] }],
        imagePath: "https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/iPad/iPadAir.png"
    },
    {
        devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/iPad/iPad.png',
        label: "iPad",
        deviceDetail: [
            { gen: "5th Gen", gb: ["128 GB ", "32 GB", "not known"], screenSize: [] }, { gen: "6th Gen", gb: ["128 GB ", "32 GB", "not known"], screenSize: [] }, { gen: "7th Gen", gb: ["128 GB ", "32 GB", "not known"], screenSize: [] }],
        imagePath: "https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/iPad/iPad.png"
    }
]


const IPad = (props) => {
    const dispatch = useDispatch();
    const [selectedDevice, setSelectedDevice] = useState()
    const [offers, setOffers] = useState()
    const [imagePath, setImagePath] = useState()
    const [deviceDetails, setDeviceDetails] = useState()
    const [isLoader, setIsLoader] = useState(false)
    const [isScreenSize, setScreenSize] = useState(false)

    const [isBrokenOrNo, setIsBrokenOrNo] = useState(false)
    let { model } = useParams();

    useEffect(() => {
        if (model) {
            deviceList1.filter(x => {
                if(x.label === model) {
                    setSelectedDevice([x])
                }
            })
        }
    }, [model])

    const selectDevice = (obj) => {
        if (obj.label === "iPadPro") {
            setScreenSize(true)
        } else {
            setScreenSize(false)
        }
        setSelectedDevice([obj]);
        setImagePath(obj.imagePath);
    }

    const handelSubmits = (value) => {
        const ipad_generation = value.deviceType.split("/")[1];
        const iphone_model = value.deviceType.split("/")[0];
        setIsLoader(true)
        iPadApi(value.capacity, value.carrier, iphone_model, value.condition, value.screenSize, ipad_generation).then(res => {
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

    const addCart = (values) => {
        const value = {
            deviceType: "IPad",
            deviceModel: values.ipad_model,
            deviceCapacity: values.ipad_capacity,
            deviceCarrier: values.ipad_carrier,
            deviceCondition: values.ipad_condition,
            deviceYear: "",
            deviceProcessor: "",
            deviceOffer: parseInt(values.offer),
            deviceGeneration: values.ipad_generation,
            deviceSize: values.ipad_screensize,
            deviceEdition: "",
            deviceBand: "",
            deviceEngraving: "",
            imagePath: imagePath,
            id: values.id
        }
        dispatch(addToCart(value))
        props.history.push("/cart");
    }

    const selectDevicesSchema = Yup.object().shape({
        deviceType: Yup.string()
            .nullable(),
        carrier: Yup.string()
            .nullable(),
        condition: Yup.string()
            .nullable(),
        screenSize: Yup.string()
            .nullable(),
        capacity: Yup.string()
            .nullable(),
    })

    const devicesDetails = (value) => {
        setDeviceDetails(value)
    }
    const ipadDetails = {
        deviceType: "",
        carrier: "",
        condition: "",
        screenSize: "",
        capacity: "",
    }
    return (
        <div className="sell-a-device-container">
            <div className={!isEmpty(selectedDevice) ? 'device-selected' : ''}>
                {
                    isEmpty(selectedDevice) &&
                    <div className="row mt-5">
                        {
                            !isEmpty(deviceList1) && deviceList1.map((item, index) => (
                                <div className={`device-item-div col-md-3 col-sm-4 d-flex flex-column cursor-pointer justify-content-space-between ${selectedDevice && selectedDevice[0].devicePhoto === item.devicePhoto ? 'active' : ''}`} key={index}>
                                    <div className="mt-2 text-center">
                                        <img src={item.devicePhoto} onClick={() => selectDevice(item)} />
                                    </div>
                                    <div className="text-center mt-1">
                                        <label className="w-100" onClick={() => selectDevice(item)} variant="warning">{item.label}</label>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                }
            </div>
            <Formik
                initialValues={ipadDetails}
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
                                            <h4> {item.label} </h4> <span className="ml-2 cursor-pointer text-info h6"
                                                onClick={(e) => {
                                                    handleChange({
                                                        target: {
                                                            name: "deviceType",
                                                            value: null,
                                                        }
                                                    })
                                                    handleChange({
                                                        target: {
                                                            name: "carrier",
                                                            value: null,
                                                        }
                                                    })
                                                    handleChange({
                                                        target: {
                                                            name: "condition",
                                                            value: null,
                                                        }
                                                    })
                                                    handleChange({
                                                        target: {
                                                            name: "screenSize",
                                                            value: '',
                                                        }
                                                    })
                                                    handleChange({
                                                        target: {
                                                            name: "capacity",
                                                            value: null,
                                                        }
                                                    })
                                                    setSelectedDevice()
                                                    setOffers()
                                                    setIsBrokenOrNo(false)
                                                }} > / Change Model</span>
                                        </div>
                                        <hr />
                                        {
                                            !values.deviceType &&
                                            < h4 >
                                                Select device generation/ {selectedDevice && selectedDevice[0].label}
                                            </h4>
                                        }
                                        {
                                            !values.deviceType &&
                                            <div className="row">
                                                {
                                                    !isEmpty(item.deviceDetail) && item.deviceDetail.map((x, i) => (
                                                        <div className="mt-2 col-md-3 col-sm-4 text-center" key={i}>
                                                            <label className="w-100 mt-1 mr-4">
                                                                <div className="w-100">
                                                                    <img src={item.devicePhoto} className="cursor-pointer" />
                                                                </div>
                                                                <Field className="mr-2" type="radio" name="deviceType" value={item.label + '/' + x.gen} onClick={() => devicesDetails(x)} />
                                                                {x.gen}
                                                            </label>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        }
                                    </div>
                                ))
                            }

                            {
                                !isEmpty(deviceDetails) && values.deviceType && <div className="col-md-12">
                                    <div className="d-flex align-items-center">
                                        <h4>{values.deviceType} </h4> <span className="ml-2 cursor-pointer text-info h6"
                                            onClick={(e) => {
                                                handleChange({
                                                    target: {
                                                        name: "deviceType",
                                                        value: null,
                                                    }
                                                })
                                                handleChange({
                                                    target: {
                                                        name: "carrier",
                                                        value: null,
                                                    }
                                                })
                                                handleChange({
                                                    target: {
                                                        name: "screenSize",
                                                        value: '',
                                                    }
                                                })
                                                handleChange({
                                                    target: {
                                                        name: "condition",
                                                        value: null,
                                                    }
                                                })
                                                handleChange({
                                                    target: {
                                                        name: "capacity",
                                                        value: null,
                                                    }
                                                })
                                                setOffers()
                                                setIsBrokenOrNo(false)
                                            }}
                                        >/ Change Generation</span>
                                    </div>
                                    {!isEmpty(deviceDetails.screenSize) &&
                                        <>
                                            <div className="mt-3">
                                                <div className="mt-3">
                                                    {values.deviceType &&
                                                        <>
                                                            <hr />
                                                            {
                                                                isScreenSize && !values.screenSize &&
                                                                < h4 >
                                                                    Select screen size/ {values.deviceType}
                                                                </h4>
                                                            }

                                                            {
                                                                !isScreenSize && !values.capacity &&
                                                                < h4 >
                                                                    Select capacity/ {values.deviceType}
                                                                </h4>
                                                            }
                                                        </>
                                                    }

                                                </div>
                                                {isScreenSize &&
                                                    values.deviceType && !values.screenSize &&

                                                    <div role="group" aria-labelledby="my-radio-group">
                                                        <div>
                                                            {
                                                                !isEmpty(deviceDetails.screenSize) && deviceDetails.screenSize.map((x, i) => (
                                                                    <label key={i} className={`ml-4 border mt-4 cursor-pointer rounded p-4 ${values.deviceCapacity === `${x}` && 'border border-dark' || ''}`}>
                                                                        <Field className="mr-2 d-none" type="radio" name="screenSize" onChange={handleChange} value={x} />
                                                                        {x}
                                                                    </label>
                                                                ))
                                                            }
                                                        </div>
                                                    </div>

                                                }
                                            </div>
                                        </>
                                    }
                                    <div className="mt-3">
                                        <div className="mt-3">
                                            {(isScreenSize && values.screenSize) &&
                                                <>
                                                    <div className="d-flex align-items-center">
                                                        <h4>{values.deviceType}/ {values.screenSize} </h4> <span className="ml-2 cursor-pointer text-info h6"
                                                            onClick={(e) => {
                                                                handleChange({
                                                                    target: {
                                                                        name: "screenSize",
                                                                        value: null,
                                                                    }
                                                                })
                                                                setOffers()
                                                                setIsBrokenOrNo(false)
                                                            }}
                                                        >/ Change screen size</span>
                                                    </div>

                                                    <hr />
                                                    {
                                                        !values.capacity &&
                                                        <h4>
                                                            Select capacity/ {values.deviceType}/ {values.screenSize}
                                                        </h4>
                                                    }
                                                </>

                                            }
                                            {!isScreenSize && !values.capacity && values.deviceType &&
                                                <>
                                                    <hr />
                                                    <h4>
                                                        Select capacity/ {values.deviceType}/ {values.screenSize}
                                                    </h4>
                                                </>
                                            }


                                        </div>
                                        {
                                            !values.capacity && values.deviceType && (isScreenSize && values.screenSize ? true : !isScreenSize && !values.screenSize ? true : false) &&

                                            <div role="group" aria-labelledby="my-radio-group">
                                                <div>
                                                    {
                                                        !isEmpty(deviceDetails.gb) && deviceDetails.gb.map((x, i) => (
                                                            <>
                                                                <label key={i} className={`ml-4 mt-4 border cursor-pointer rounded p-4 ${values.deviceCapacity === `${x}` && 'border border-dark' || ''}`}>
                                                                    <Field className="mr-2 d-none" type="radio" name="capacity" onChange={handleChange} value={x} />
                                                                    {
                                                                        x === 'not known' ? 'Not known' : x
                                                                    }
                                                                </label>
                                                            </>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            }
                            {!isEmpty(selectedDevice) && (isScreenSize && values.screenSize ? true : !isScreenSize && !values.screenSize ? true : false) &&
                                <>
                                    <div className="col-md-12">
                                        {values.capacity &&
                                            <>
                                                {
                                                    !isScreenSize &&
                                                    <hr />
                                                }
                                                <div className="d-flex align-items-center">
                                                    {
                                                        isScreenSize &&
                                                        <h4 >{values.deviceType} / {values.screenSize}/ {values.capacity} </h4>
                                                    }
                                                    {
                                                        !isScreenSize &&
                                                        <h4 >{values.deviceType} / {values.capacity} </h4>
                                                    }
                                                    <span className="ml-2 cursor-pointer text-info h6"
                                                        onClick={(e) => {
                                                            handleChange({
                                                                target: {
                                                                    name: "capacity",
                                                                    value: null,
                                                                }
                                                            })
                                                            setOffers()
                                                            setIsBrokenOrNo(false)
                                                        }}
                                                    >/ Change capacity</span>
                                                </div>

                                                <hr />
                                                {
                                                    !values.carrier && isScreenSize &&
                                                    <h4>
                                                        Select carrier/ {values.deviceType} / {values.screenSize}/ {values.capacity}
                                                    </h4>
                                                }
                                                {
                                                    !values.carrier && !isScreenSize &&
                                                    <h4>
                                                        Select carrier/ {values.deviceType} / {values.capacity}
                                                    </h4>
                                                }
                                            </>
                                        }
                                        {
                                            !values.carrier && values.capacity &&
                                            <div role="group" className="row mt-3" aria-labelledby="my-radio-group">
                                                <div className="col d-flex">
                                                    <div className="border border-dark-white rounded mx-2">
                                                        <label className={`d-flex align-items-center justify-content-center h-100 m-2 cursor-pointer text-center p-4 ${values.carrier === "other" && 'border border-dark' || ''}`}>
                                                            <Field className="mr-2 d-none" type="radio" name="carrier" value="wifi" />
                                                            <div><h1> WiFi</h1></div>
                                                        </label>
                                                    </div>

                                                    <div className="border border-dark-white rounded mx-2">
                                                        <label className={`h-100 m-2 cursor-pointer text-center  p-4 ${values.carrier === "other" && 'border border-dark' || ''}`}>
                                                            <Field className="mr-2 d-none" type="radio" name="carrier" value="unlocked" />
                                                            <div><h4>WiFi+</h4></div>
                                                            <div className="margin-5"><h4>Cellular</h4></div>
                                                            <div className="margin-5">(Carrier Unlocked)</div>
                                                        </label>
                                                    </div>

                                                    <div className="border border-dark-white rounded mx-2">
                                                        <label className={`h-100 m-2 cursor-pointer text-center  p-4 ${values.carrier === "other" && 'border border-dark' || ''}`}>
                                                            <Field className="mr-2 d-none" type="radio" name="carrier" value="other" />
                                                            <div>
                                                                <b>Other Carrier</b>
                                                            </div>
                                                            <div className="margin-5">
                                                                if you don't know
                                                            </div>
                                                            <div className="margin-5">
                                                                the carrier
                                                           </div>
                                                            <div className="margin-5 mb-1">
                                                                or not listed here
                                                           </div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    {
                                        values.carrier &&
                                        <div className="col-md-12">
                                            <div className="mt-3">
                                                {values.carrier && values.deviceType && values.capacity &&
                                                    <div className="d-flex align-items-center">
                                                        {
                                                            isScreenSize &&
                                                            <h4> {values.deviceType} / {values.screenSize}/ {values.capacity}/ {values.carrier} </h4>
                                                        }
                                                        {
                                                            !isScreenSize &&
                                                            <h4> {values.deviceType} / {values.capacity}/ {values.carrier} </h4>
                                                        }
                                                        <span className="ml-2 cursor-pointer text-info h6"
                                                            onClick={(e) => {
                                                                handleChange({
                                                                    target: {
                                                                        name: "carrier",
                                                                        value: null,
                                                                    }
                                                                })
                                                                setOffers()
                                                                setIsBrokenOrNo(false)

                                                            }} >/ Change Carrier</span>
                                                    </div>}
                                                <hr />
                                                {isEmpty(offers) && values.deviceType && values.capacity &&
                                                    <h4>
                                                        Select Cosmetic Condition
                                                   </h4>
                                                }
                                            </div>
                                            <div>
                                                {isEmpty(offers) && values.deviceType && values.capacity &&
                                                    <div className="mt-4 ml-3 mr-3 row" role="group" aria-labelledby="my-radio-group">
                                                        <div className="col-md-2 ml-2 mb-2 border py-2">
                                                            <div className="d-flex justify-content-between">
                                                                <label className="h5"> Good</label>
                                                                <Field className="mt-1" type="radio" name="condition" value="100%" />
                                                            </div>
                                                            <label className="mt-2">
                                                                Almost like new, minimal wear and tear.
                                                            </label>
                                                        </div>

                                                        <div className="col-md-2 ml-2 mb-2 border py-2">
                                                            <div className="d-flex justify-content-between">
                                                                <label className="h5"> Used</label>
                                                                <Field className="mt-1" type="radio" name="condition" value="75%" />
                                                            </div>
                                                            <label className="mt-2">
                                                                Everything works, normal to heavy wear and tear.
                                                           </label>
                                                        </div>

                                                        <div className="col-md-2 ml-2 mb-2 border py-2">
                                                            <div className="d-flex justify-content-between">
                                                                <label className="h5"> Poor</label>
                                                                <Field className="mt-1" type="radio" name="condition" value="50%" />
                                                            </div>
                                                            <label className="mt-2">
                                                                Cracked screen, broken button, or other damage.
                                                           </label>
                                                        </div>

                                                        <div className="col-md-2 ml-2 mb-2 border py-2">
                                                            <div className="d-flex justify-content-between">
                                                                <label className="h5"> Faulty</label>
                                                                <Field className="mt-1" type="radio" name="condition" value="Broken" />
                                                            </div>
                                                            <label className="mt-2">
                                                                Doesn't power on, exposed internal component, shattered screen.
                                                           </label>
                                                        </div>

                                                        <div className="col-md-12">
                                                            <ErrorMessage name="condition" className="text-danger" component="div" />
                                                        </div>
                                                    </div>
                                                }
                                                {
                                                    values.condition && values.deviceType && values.capacity &&
                                                    <div>
                                                        {!isEmpty(offers) &&
                                                            <div className="mt-3">
                                                                <div className="d-flex align-items-center">
                                                                    {
                                                                        !isScreenSize &&
                                                                        <h4>{values.deviceType}/ {values.carrier}/ {values.capacity}/ {values.condition === "100%" ? 'Good' : values.condition === "75%" ? 'Used' : values.condition === "50%" ? 'Poor' : values.condition === "Broken" ? 'Faulty' : ''}</h4>
                                                                    }
                                                                    {
                                                                        isScreenSize &&
                                                                        <h4>{values.deviceType}/ {values.carrier}/ {values.screenSize}/ {values.capacity}/ {values.condition === "100%" ? 'Good' : values.condition === "75%" ? 'Used' : values.condition === "50%" ? 'Poor' : values.condition === "Broken" ? 'Faulty' : ''}</h4>
                                                                    }

                                                                    <span className="ml-2 cursor-pointer text-info h6"
                                                                        onClick={(e) => {
                                                                            handleChange({
                                                                                target: {
                                                                                    name: "condition",
                                                                                    value: null,
                                                                                }
                                                                            })
                                                                            setOffers()
                                                                            setIsBrokenOrNo(false)
                                                                        }} >/ Change Condition</span>
                                                                </div>
                                                                <hr />
                                                            </div>
                                                        }
                                                        {isEmpty(offers) &&
                                                            <div className="d-flex justify-content-center">
                                                                <div className="col-md-6 mt-4 text-center">
                                                                    <Button variant="outline-secondary" className="w-100" type="submit">Show my Offer</Button>
                                                                </div>
                                                            </div>
                                                        }
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    }
                                </>
                            }

                            {isLoader && isEmpty(offers) &&
                                <div className="col text-center">
                                    <LoaderSpinner></LoaderSpinner>
                                </div>

                            }

                            {!isEmpty(offers) && !isBrokenOrNo &&
                                <div className="mt-4 text-center col-md-12">
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
                                                id: selectedDevice[0].label,
                                                imagePath: imagePath,
                                                ipad_capacity: values.capacity,
                                                ipad_carrier: values.carrier,
                                                ipad_condition: values.condition,
                                                ipad_model: selectedDevice[0].label,
                                                ipad_screensize: values.screenSize,
                                                offer: 0
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

export default IPad
