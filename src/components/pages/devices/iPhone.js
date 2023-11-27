import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import * as Yup from 'yup';

import { iPhoneApi } from "../../../services/iPhoneApiService";
import { addToCart } from "../../../store/actions/cart";
import { isEmpty } from "../../../validation/index";
import LoaderSpinner from "../../Loader/loaderSpinner";
import att from './Carrier/att.png';
import sprint from './Carrier/sprint.png';
import tmobile from './Carrier/tmobile.png';
import verizon from './Carrier/verizon.png';

const deviceList1 = [
    {
        devicePhoto: 'https://cashmydevice-frontend.s3.us-west-1.amazonaws.com/iPhone/iphone-14-pro-max.jpg',
        label: "IPhone 14 Pro Max",
        deviceGb: ["128 GB", "256 GB", "512 GB","1 TB", "not known"],
        imagePath: "https://cashmydevice-frontend.s3.us-west-1.amazonaws.com/iPhone/iphone-14-pro-max.jpg"
    },
    {
        devicePhoto: 'https://cashmydevice-frontend.s3.us-west-1.amazonaws.com/iPhone/iphone-14-pro.jpg',
        label: "Iphone 14 Pro",
        deviceGb: ["128 GB", "256 GB", "512 GB","1 TB", "not known"],
        imagePath: "https://cashmydevice-frontend.s3.us-west-1.amazonaws.com/iPhone/iphone-14-pro.jpg"
    },
    {
        devicePhoto: 'https://cashmydevice-frontend.s3.us-west-1.amazonaws.com/iPhone/iphone-14-plus.jpg',
        label: "Iphone 14 Plus",
        deviceGb: ["128 GB", "256 GB", "512 GB", "not known"],
        imagePath: "https://cashmydevice-frontend.s3.us-west-1.amazonaws.com/iPhone/iphone-14-plus.jpg"
    },
    {
        devicePhoto: 'https://cashmydevice-frontend.s3.us-west-1.amazonaws.com/iPhone/iphone-14.jpg',
        label: "Iphone 14",
        deviceGb: ["128 GB", "256 GB", "512 GB", "not known"],
        imagePath: "https://cashmydevice-frontend.s3.us-west-1.amazonaws.com/iPhone/iphone-14.jpg"
    },
    {
        devicePhoto: 'https://cashmydevice-frontend.s3.us-west-1.amazonaws.com/iPhone/iphone-se-3rd-gen.jpg',
        label: "Iphone SE 3rd",
        deviceGb: ["64 GB","128 GB", "256 GB", "not known"],
        imagePath: 'https://cashmydevice-frontend.s3.us-west-1.amazonaws.com/iPhone/iphone-se-3rd-gen.jpg'
    },
    {
        devicePhoto: 'https://cashmydevice-frontend.s3.us-west-1.amazonaws.com/iPhone/iphone-13-pro-max.jpg',
        label: "Iphone 13 Pro Max",
        deviceGb: ["128 GB", "256 GB", "512 GB","1 TB", "not known"],
        imagePath: "https://cashmydevice-frontend.s3.us-west-1.amazonaws.com/iPhone/iphone-13-pro-max.jpg"
    },
    {
        devicePhoto: 'https://cashmydevice-frontend.s3.us-west-1.amazonaws.com/iPhone/iphone-13-pro.jpg',
        label: "Iphone 13 Pro",
        deviceGb: ["128 GB", "256 GB", "512 GB","1 TB", "not known"],
        imagePath: "https://cashmydevice-frontend.s3.us-west-1.amazonaws.com/iPhone/iphone-13-pro.jpg"
    },

    {
        devicePhoto: 'https://cashmydevice-frontend.s3.us-west-1.amazonaws.com/iPhone/iphone13.jpg',
        label: "Iphone 13",
        deviceGb: ["128 GB", "256 GB", "512 GB", "not known"],
        imagePath: "https://cashmydevice-frontend.s3.us-west-1.amazonaws.com/iPhone/iphone13.jpg"
    },
    {
        devicePhoto: 'https://cashmydevice-frontend.s3.us-west-1.amazonaws.com/iPhone/iphone-13-mini.jpg',
        label: "Iphone 13 Mini",
        deviceGb: ["128 GB", "256 GB", "512 GB", "not known"],
        imagePath: "https://cashmydevice-frontend.s3.us-west-1.amazonaws.com/iPhone/iphone-13-mini.jpg"
    },
    {
        devicePhoto: 'https://cashmydevice-frontend.s3.us-west-1.amazonaws.com/iPhone/iphone-12-pro-max.jpg',
        label: "Iphone 12 Pro Max",
        deviceGb: ["128 GB", "256 GB", "512 GB","1 TB", "not known"],
        imagePath: "https://cashmydevice-frontend.s3.us-west-1.amazonaws.com/iPhone/iphone-12-pro-max.jpg"
    },
    {
        devicePhoto: 'https://cashmydevice-frontend.s3.us-west-1.amazonaws.com/iPhone/iphone-12-pro.jpg',
        label: "Iphone 12 Pro",
        deviceGb: ["128 GB", "256 GB", "512 GB","1 TB", "not known"],
        imagePath: "https://cashmydevice-frontend.s3.us-west-1.amazonaws.com/iPhone/iphone-12-pro.jpg"
    },

    {
        devicePhoto: 'https://cashmydevice-frontend.s3.us-west-1.amazonaws.com/iPhone/iphone-12.jpg',
        label: "Iphone 12",
        deviceGb: ["64 GB","128 GB", "256 GB", "not known"],
        imagePath: "https://cashmydevice-frontend.s3.us-west-1.amazonaws.com/iPhone/iphone-12.jpg"
    },
    {
        devicePhoto: 'https://cashmydevice-frontend.s3.us-west-1.amazonaws.com/iPhone/iphone-12-mini.jpg',
        label: "Iphone 12 Mini",
        deviceGb: ["64 GB","128 GB", "256 GB", "not known"],
        imagePath: "https://cashmydevice-frontend.s3.us-west-1.amazonaws.com/iPhone/iphone-12-mini.jpg"
    },

    {
        devicePhoto: 'https://cashmydevice-frontend.s3.us-west-1.amazonaws.com/iPhone/iphone-11-pro-max.jpg',
        label: "IPhone 11 Pro Max",
        deviceGb: ["64 GB", "256 GB", "512 GB", "not known"],
        imagePath: "https://cashmydevice-frontend.s3.us-west-1.amazonaws.com/iPhone/iphone-11-pro-max.jpg"
    },
    {
        devicePhoto: 'https://cashmydevice-frontend.s3.us-west-1.amazonaws.com/iPhone/iphone11pro.jpg',
        label: "Iphone 11 Pro",
        deviceGb: ["64 GB", "256 GB", "512 GB", "not known"],
        imagePath: "https://cashmydevice-frontend.s3.us-west-1.amazonaws.com/iPhone/iphone11pro.jpg"
    },
    {
        devicePhoto: 'https://cashmydevice-frontend.s3.us-west-1.amazonaws.com/iPhone/iphone-11.jpg',
        label: "Iphone 11",
        deviceGb: ["64 GB", "128 GB ", "256 GB", "not known"],
        imagePath: "https://cashmydevice-frontend.s3.us-west-1.amazonaws.com/iPhone/iphone-11.jpg"
    },
    {
        devicePhoto: 'https://cashmydevice-frontend.s3.us-west-1.amazonaws.com/iPhone/iphone-xs-max.jpg',
        label: "Iphone XS Max",
        deviceGb: ["64 GB", "256 GB", "512 GB", "not known"],
        imagePath: "https://cashmydevice-frontend.s3.us-west-1.amazonaws.com/iPhone/iphone-xs-max.jpg"
    },
    {
        devicePhoto: 'https://cashmydevice-frontend.s3.us-west-1.amazonaws.com/iPhone/iphone-xs.jpg',
        label: "Iphone XS",
        deviceGb: ["64 GB", "256 GB", "512 GB", "not known"],
        imagePath: 'https://cashmydevice-frontend.s3.us-west-1.amazonaws.com/iPhone/iphone-xs.jpg'
    },
    {
        devicePhoto: 'https://cashmydevice-frontend.s3.us-west-1.amazonaws.com/iPhone/iphone-xr.jpg',
        label: "Iphone XR",
        deviceGb: ["64 GB", "128 GB ", "256 GB", "not known"],
        imagePath: "https://cashmydevice-frontend.s3.us-west-1.amazonaws.com/iPhone/iphone-xr.jpg"
    },
    {
        devicePhoto: 'https://cashmydevice-frontend.s3.us-west-1.amazonaws.com/iPhone/iphone-x.jpg',
        label: "Iphone X",
        deviceGb: ["64 GB", "256 GB", "not known"],
        imagePath: "https://cashmydevice-frontend.s3.us-west-1.amazonaws.com/iPhone/iphone-x.jpg"
    }


]

const deviceList2 = [
    {
        devicePhoto: 'https://cashmydevice-frontend.s3.us-west-1.amazonaws.com/iPhone/iphone-8-plus.jpg',
        label: "Iphone 8 Plus",
        deviceGb: ["64 GB", "256 GB", "not known"],
        imagePath: 'https://cashmydevice-frontend.s3.us-west-1.amazonaws.com/iPhone/iphone-8-plus.jpg'
    },
    {
        devicePhoto: 'https://cashmydevice-frontend.s3.us-west-1.amazonaws.com/iPhone/iphone-8.jpg',
        label: "Iphone 8",
        deviceGb: ["64 GB", "256 GB", "not known"],
        imagePath: 'https://cashmydevice-frontend.s3.us-west-1.amazonaws.com/iPhone/iphone-8.jpg'
    },
    {
        devicePhoto: 'https://cashmydevice-frontend.s3.us-west-1.amazonaws.com/iPhone/iphone7.jpg',
        label: "Iphone 7",
        deviceGb: ["32 GB", "128 GB ", "256 GB", "not known"],
        imagePath: 'https://cashmydevice-frontend.s3.us-west-1.amazonaws.com/iPhone/iphone7.jpg'
    },
    {
        devicePhoto: 'https://cashmydevice-frontend.s3.us-west-1.amazonaws.com/iPhone/iphone-7-plus.jpg',
        label: "Iphone 7 Plus",
        deviceGb: ["32 GB", "128 GB ", "256 GB", "not known"],
        imagePath: 'https://cashmydevice-frontend.s3.us-west-1.amazonaws.com/iPhone/iphone-7-plus.jpg'
    },
    
]


const IPhone = (props) => {
    const dispatch = useDispatch();
    const [selectedDevice, setSelectedDevice] = useState()
    const [offers, setOffers] = useState()
    const [imagePath, setImagePath] = useState()
    const [isLoader, setIsLoader] = useState(false)
    const [isBrokenOrNo, setIsBrokenOrNo] = useState(false)
    let { model } = useParams();

    useEffect(() => {
        if (model) {
            deviceList2.filter(x => {
                if(x.label === model) {
                    setSelectedDevice([x])
                }
            })
            deviceList1.filter(x => {
                if(x.label === model) {
                    setSelectedDevice([x])
                }
            })
        }
    }, [model])

    const selectDevice = (obj) => {
        setSelectedDevice([obj])
        setImagePath(obj.imagePath)
    }
    const handelSubmits = (value) => {
        setIsLoader(true);
        const capacity = value.deviceType.split("/")[1];
        const iphone_model = value.deviceType.split("/")[0];

        const obj = {
            capacity: capacity,
            carrier: value.carrier,
            iphone_model: iphone_model,
            condition: value.condition
        }
        if (value.deviceType === "IPhone 11 Pro Max/not known" && iphone_model === "IPhone 11 Pro Max") {
            obj.capacity = "64 GB"
        }
        if (value.deviceType === "Iphone 11 Pro/not known") {
            obj.capacity = "64 GB"
        }
        iPhoneApi(obj).then(res => {
            setIsLoader(false)
            let offer = +res.data.results[0].Offer
            if (offer >= 100 && offer <= 200) {
                offer += 5
            }
            setOffers([{ ...res.data.results[0], offer }])
            if (offer <= 0) {
                setIsBrokenOrNo(true)
            }
        }).catch(err => {
            console.log(err);
            setIsLoader(false)
        })
    }

    const addCart = (value) => {
        const data = {
            deviceType: "IPhone",
            deviceModel: value.iphone_model,
            deviceCapacity: value.capacity,
            deviceCarrier: value.carrier,
            deviceCondition: value.condition,
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
        deviceType: Yup.string()
            .nullable(),
        carrier: Yup.string()
            .nullable(),
        condition: Yup.string()
            .nullable(),
    })

    return (
        <div className="sell-a-device-container">
            <div className={!isEmpty(selectedDevice) ? 'device-selected' : ''}>
                {
                    isEmpty(selectedDevice) &&
                    <div className="row mt-5">
                        {
                            !isEmpty(deviceList1) && deviceList1.map((item, index) => (
                                <div className={`device-item-div col-sm-4 col-md-2 d-flex flex-column cursor-pointer justify-content-space-between ${selectedDevice && selectedDevice[0].devicePhoto === item.devicePhoto ? 'active' : ''}`} key={index}>
                                    <div className="mt-2 text-center">
                                        <img src={item.devicePhoto} onClick={() => selectDevice(item)} />
                                    </div>
                                    <div className="text-right mt-2">
                                        <label className="w-100" onClick={() => selectDevice(item)} variant="warning">{item.label}</label>
                                    </div>
                                </div>
                            ))
                        }

                        {
                            !isEmpty(deviceList2) && deviceList2.map((item, index) => (
                                <div className={`device-item-div col-sm-4 col-md-2 d-flex flex-column cursor-pointer justify-content-space-between ${selectedDevice && selectedDevice[0].devicePhoto === item.devicePhoto ? 'active' : ''}`} key={index}>
                                    <div className="mt-2 text-center">
                                        <img src={item.devicePhoto} onClick={() => selectDevice(item)} />
                                    </div>
                                    <div className="text-right mt-1">
                                        <label className="w-100" onClick={() => selectDevice(item)} variant="warning">{item.label}</label>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                }
            </div>
            <Formik
                initialValues={{
                    deviceType: "",
                    carrier: "",
                    condition: ""
                }}
                validationSchema={selectDevicesSchema}
                onSubmit={handelSubmits}
            >
                {({ handleChange, values }) => (
                    <Form>
                        <div>
                            {
                                !isEmpty(selectedDevice) && selectedDevice.map((item, index) => (
                                    <div className="col-md-12" key={index}>
                                        <div className="d-flex align-items-center">
                                            <h4>{item.label} </h4> <span className="ml-2 cursor-pointer text-info h6" onClick={(e) => {
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
                                                setSelectedDevice()
                                                setOffers()
                                                setIsBrokenOrNo(false)
                                            }} >/ Change Model</span>
                                        </div>
                                        <hr />
                                        {!values.deviceType && <>
                                            <div>
                                                <h4>Select your {item.label} </h4>
                                            </div>
                                            <div className="row">
                                                {
                                                    !isEmpty(item.deviceGb) && item.deviceGb.map((x, i) => (
                                                        <div className="mt-2 col-md-3 col-sm-4 text-center" key={i}>
                                                            <label className="w-100 mt-1 mr-4">
                                                                <div className="w-100">
                                                                    <img src={item.devicePhoto} className="cursor-pointer" />
                                                                </div>
                                                                {
                                                                    x !== 'not known' &&
                                                                    <>
                                                                        <Field className="mr-2" type="radio" name="deviceType" value={item.label + '/' + x} />
                                                                        {item.label}  {x}
                                                                    </>
                                                                }
                                                                {
                                                                    x === 'not known' &&
                                                                    <>
                                                                        <Field className="mr-2" type="radio" name="deviceType" value={item.label + '/' + x} />
                                                                        {item.label}<br />
                                                                        (Capacity is not known)
                                                                    </>
                                                                }
                                                            </label>
                                                        </div>
                                                    ))
                                                }
                                                <div>
                                                    <ErrorMessage name="deviceType" className="text-danger" component="div" />
                                                </div>
                                            </div>
                                        </>
                                        }
                                    </div>
                                ))
                            }
                            {!isEmpty(selectedDevice) &&
                                <div>
                                    {
                                        values.deviceType &&
                                        <div>
                                            <div className="col-md-12 mt-3">
                                                <div className="d-flex align-items-center">
                                                    <h4>{values.deviceType} </h4> <span className="ml-2 cursor-pointer text-info h6"
                                                        onClick={(e) => {
                                                            handleChange({
                                                                target: {
                                                                    name: "deviceType",
                                                                    value: null,
                                                                }
                                                            })
                                                            setIsBrokenOrNo(false)
                                                            setOffers()
                                                        }}
                                                    >/ Change Capacity</span>
                                                </div>
                                                <hr />
                                                {
                                                    !values.carrier &&
                                                    <h4>
                                                        Select Carrier/ {values.deviceType}
                                                    </h4>
                                                }

                                            </div>
                                            {!values.carrier &&
                                                <div role="group" aria-labelledby="my-radio-group">
                                                    <div>
                                                        <label className={`ml-4 mt-4 cursor-pointer  border-dark-white rounded p-4 ${values.carrier === "att" && 'border border-dark' || ''}`}>
                                                            <img className="mb-5" src={att} height="50" />
                                                            <Field className="mr-2 d-none" type="radio" name="carrier" value="att" />
                                                        </label>
                                                        {(selectedDevice[0].label !== 'Iphone 11' && selectedDevice[0].label !== 'IPhone 11 Pro Max' && selectedDevice[0].label !== 'Iphone 11 Pro') &&
                                                            <label className={`ml-4 mt-4 cursor-pointer  border-dark-white rounded p-4 ${values.carrier === "sprint" && 'border border-dark' || ''}`}>
                                                                <img className="mb-5" src={sprint} height="50" />
                                                                <Field className="mr-2 d-none" type="radio" name="carrier" value="sprint" />
                                                            </label>
                                                        }
                                                        <label className={`ml-4 mt-4 cursor-pointer  border-dark-white rounded p-4 ${values.carrier === "tmobile" && 'border border-dark' || ''}`}>
                                                            <img className="mb-5" src={tmobile} height="50" />
                                                            <Field className="mr-2 d-none" type="radio" name="carrier" value="tmobile" />
                                                        </label>
                                                        <label className={`ml-4 mt-4 cursor-pointer  border-dark-white rounded p-4 ${values.carrier === "verizon" && 'border border-dark' || ''}`}>
                                                            <img className="mb-5" src={verizon} height="100" />
                                                            <Field className="mr-2 d-none" type="radio" name="carrier" value="verizon" />
                                                        </label>
                                                        <label className={`ml-4 mt-4 cursor-pointer border text-center border-dark-white rounded p-4 ${values.carrier === "unlocked" && 'border border-dark' || ''}`}>
                                                            <Field className="mr-2 d-none" type="radio" name="carrier" value="unlocked" />
                                                            <div className="mt-3">
                                                                <h4>
                                                                    Factory
                                                                </h4>
                                                            </div>
                                                            <div>
                                                                <h4>
                                                                    Unlocked
                                                                 </h4>
                                                            </div>
                                                        </label>
                                                        <label className={`ml-4 mt-4 cursor-pointer text-center  border border-dark-white rounded p-4 ${values.carrier === "other" && 'border border-dark' || ''}`}>
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
                                                    <div className="col-md-12 mt-2">
                                                        <ErrorMessage name="carrier" className="text-danger" component="div" />
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    }
                                    {
                                        values.carrier &&
                                        <div>
                                            <div className="col-md-12 mt-3">
                                                {values.deviceType &&
                                                    <div className="d-flex align-items-center">
                                                        <h4> {values.deviceType}/ {values.carrier === "att" ? 'At&t' : values.carrier} </h4> <span className="ml-2 cursor-pointer text-info h6"
                                                            onClick={(e) => {
                                                                handleChange({
                                                                    target: {
                                                                        name: "carrier",
                                                                        value: null,
                                                                    }
                                                                })
                                                                setIsBrokenOrNo(false)
                                                                setOffers()
                                                            }} >/ Change Carrier</span>
                                                    </div>}
                                                <hr />
                                                {isEmpty(offers) && values.deviceType &&
                                                    <h4>
                                                        Select Cosmetic Condition
                                                   </h4>
                                                }
                                            </div>
                                            <div>
                                                {isEmpty(offers) && values.deviceType &&
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
                                                    values.condition && values.deviceType &&
                                                    <div >
                                                        {!isEmpty(offers) &&
                                                            <div className="col-md-12 mt-3">
                                                                <div className="d-flex align-items-center">
                                                                    <h4>{values.deviceType}/ {values.carrier === "att" ? 'At&t' : values.carrier}/ {values.condition === "100%" ? 'Good' : values.condition === "75%" ? 'Used' : values.condition === "50%" ? 'Poor' : values.condition === "Broken" ? 'Faulty' : ''}</h4> <span className="ml-2 cursor-pointer text-info h6"
                                                                        onClick={(e) => {
                                                                            handleChange({
                                                                                target: {
                                                                                    name: "condition",
                                                                                    value: null,
                                                                                }
                                                                            })
                                                                            setIsBrokenOrNo(false)
                                                                            setOffers()
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
                                </div>
                            }

                            {isLoader && isEmpty(offers) &&
                                <div className="text-center">
                                    <LoaderSpinner></LoaderSpinner>
                                </div>

                            }

                            {!isEmpty(offers) && !isBrokenOrNo &&
                                <div className="mt-4 text-center">
                                    <div className="d-flex justify-content-center">
                                        <div className="col-md-2">
                                            <h1 className="border p-4 m-0">
                                                $ {offers[0].Offer}
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
                                                carrier: values.carrier,
                                                condition: values.condition,
                                                id: selectedDevice[0].label,
                                                imagePath: imagePath,
                                                iphone_model: selectedDevice[0].label
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

export default IPhone
