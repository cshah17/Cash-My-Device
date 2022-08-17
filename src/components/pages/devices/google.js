import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { googleApi } from "../../../services/iPhoneApiService";
import { addToCart } from "../../../store/actions/cart";
import { isEmpty } from "../../../validation/index";
import LoaderSpinner from "../../Loader/loaderSpinner";

import att from './Carrier/att.png';
import sprint from './Carrier/sprint.png';
import tmobile from './Carrier/tmobile.png';
import verizon from './Carrier/verizon.png';

const deviceList = [
    {
        devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Google/google-pixel-4.jpg',
        label: "Pixel 4",
        capacity: ['64 GB', '128 GB'],
        carrier: [
            {
                label: 'att',
                img: att
            },
            {
                label: 'sprint',
                img: sprint
            },
            {
                label: 'tmobile',
                img: tmobile
            },
            {
                label: 'verizon',
                img: verizon
            },
            {
                label: 'Unlocked'
            }
        ],
        imagePath: "https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Google/google-pixel-4.jpg"
    },
    {
        devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Google/google-pixel-4-xl.jpg',
        label: "Pixel 4 XL",
        capacity: ['64 GB', '128 GB'],
        carrier: [
            {
                label: 'att',
                img: att
            },
            {
                label: 'sprint',
                img: sprint
            },
            {
                label: 'tmobile',
                img: tmobile
            },
            {
                label: 'verizon',
                img: verizon
            },
            {
                label: 'Unlocked'
            }
        ],
        imagePath: "https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Google/google-pixel-4-xl.jpg"
    },
    {
        devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Google/google-pixel-3-xl.jpg',
        label: "Pixel 3 XL",
        capacity: ['64 GB', '128 GB'],
        carrier: [

            {
                label: 'sprint',
                img: sprint
            },
            {
                label: 'verizon',
                img: verizon
            },
            {
                label: 'Unlocked'
            }
        ],
        imagePath: "https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Google/google-pixel-3-xl.jpg"
    },
    {
        devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Google/google-pixel-3a-xl.jpg',
        label: "Pixel 3a XL",
        capacity: [],
        carrier: [

            {
                label: 'sprint',
                img: sprint
            },
            {
                label: 'tmobile',
                img: tmobile
            },
            {
                label: 'verizon',
                img: verizon
            },
            {
                label: 'Unlocked'
            }
        ],
        imagePath: "https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Google/google-pixel-3a-xl.jpg"
    },
    {
        devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Google/google-pixel-3a.jpg',
        label: "Pixel 3a",
        capacity: [],
        carrier: [

            {
                label: 'sprint',
                img: sprint
            },
            {
                label: 'tmobile',
                img: tmobile
            },
            {
                label: 'verizon',
                img: verizon
            },
            {
                label: 'Unlocked'
            }
        ],
        imagePath: "https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Google/google-pixel-3a.jpg"
    },
    {
        devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Google/google-pixel-3.jpg',
        label: "Pixel 3",
        capacity: ['64 GB', '128 GB'],
        carrier: [
            {
                label: 'sprint',
                img: sprint
            },
            {
                label: 'verizon',
                img: verizon
            },
            {
                label: 'Unlocked'
            }
        ],
        imagePath: "https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Google/google-pixel-3.jpg"
    },
    {
        devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Google/google-pixel-2-xl.jpg',
        label: "Pixel 2 XL",
        capacity: ['64 GB', '128 GB'],
        carrier: [
            {
                label: 'verizon',
                img: verizon
            },
            {
                label: 'Unlocked'
            }
        ],
        imagePath: "https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Google/google-pixel-2-xl.jpg"
    },
    {
        devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Google/google-pixel-2.jpg',
        label: "Pixel 2",
        capacity: ['64 GB', '128 GB'],
        carrier: [
            {
                label: 'verizon',
                img: verizon
            },
            {
                label: 'Unlocked'
            }
        ],
        imagePath: "https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/Google/google-pixel-2.jpg"
    }
]

const GooglePage = (props) => {
    const dispatch = useDispatch();
    const [selectedDevice, setSelectedDevice] = useState()
    const [offers, setOffers] = useState()
    const [imagePath, setImagePath] = useState()
    const [isLoader, setIsLoader] = useState(false)
    const [isCapacity, setCapCity] = useState(false);
    const [isShowButton, setIsShowButton] = useState(false)

    const [isBrokenOrNo, setIsBrokenOrNo] = useState(false)
    const [isBrokenFiled, setIsBrokenFiled] = useState(false)

    const selectDevice = (obj) => {
        if (obj.capacity.length > 0) {
            setCapCity(true)
        } else {
            setCapCity(false)
        }
        setSelectedDevice([obj])
        setImagePath(obj.imagePath)
    }

    const handelSubmits = (value) => {
        setIsLoader(true);
        const condition = value.condition === 'Brand New' ? '100%' : value.condition === 'Flaw-less' ? '75%' : value.condition === 'Good' ? '50%' : value.condition === 'Fair' ? '30%' : 'Broken'

        let customAmount = 0;
        const data = {
            google_model: selectedDevice[0].label,
            google_capacity: value.capacity,
            google_carrier: value.carrier,
            google_condition: condition,
            google_functional: value.functional,
            google_powercord: '',
            google_box: '',
            google_headset: '',
        }
        if (selectedDevice[0].label === "Pixel 2") {
            customAmount += 5;
            data.google_capacity = "64 GB"
            data.google_carrier = "verizon"
            if (value.box) {
                customAmount += 1;
            }
            if (value.headsets) {
                customAmount += 1;
            }
            if (value.powercord) {
                customAmount += 1;
            }
        } else if (selectedDevice[0].label === "Pixel 2 XL") {
            customAmount += 10;
            data.google_carrier = "verizon"
            data.google_capacity = "64 GB"
            if (value.carrier === "Unlocked") {
                customAmount += 5;
            }
            if (value.box) {
                customAmount += 1;
            }
            if (value.headsets) {
                customAmount += 1;
            }
            if (value.powercord) {
                customAmount += 1;
            }
        } else if (selectedDevice[0].label === "Pixel 3") {
            customAmount += 10;
            data.google_capacity = "64 GB"
            data.google_carrier = "sprint"
            if (value.carrier === "Unlocked") {
                customAmount += 50;
            }
            if (value.box) {
                customAmount += 1;
            }
            if (value.headsets) {
                customAmount += 1;
            }
            if (value.powercord) {
                customAmount += 1;
            }
        } else if (selectedDevice[0].label === "Pixel 3a XL") {
            data.google_carrier = "sprint"

            if (value.carrier === "tmobile") {
                customAmount += 15;
            }
            if (value.carrier === "Unlocked") {
                if (value.condition === "Broken") {
                    customAmount += 35;
                } else {
                    customAmount += 50;
                }
            }
            if (value.carrier === "verizon") {
                if (value.condition === "Broken") {
                    customAmount += 35;
                } else {
                    customAmount += 45;
                }
            }
            if (value.box) {
                customAmount += 1;
            }
            if (value.headsets) {
                customAmount += 1;
            }
            if (value.powercord) {
                customAmount += 1;
            }
        } else if (selectedDevice[0].label === "Pixel 3 XL") {
            customAmount += 20;
            data.google_carrier = "sprint"
            data.google_capacity = "64 GB"

            if (value.carrier === "Unlocked") {
                customAmount += 50;
            }
            if (value.box) {
                customAmount += 1;
            }
            if (value.headsets) {
                customAmount += 1;
            }
            if (value.powercord) {
                customAmount += 1;
            }
        } else if (selectedDevice[0].label === "Pixel 4") {
            customAmount += 40;
            data.google_carrier = "att"
            data.google_capacity = "64 GB"
            if (value.carrier === "sprint") {
                customAmount -= 10;
            }
            if (value.box) {
                customAmount += 1;
            }
            if (value.headsets) {
                customAmount += 1;
            }
            if (value.powercord) {
                customAmount += 1;
            }
        } else if (selectedDevice[0].label === "Pixel 4 XL") {
            customAmount += 20;
            data.google_carrier = "att"
            data.google_capacity = "64 GB"

            if (value.carrier === "sprint") {
                customAmount -= 20;
            }
            if (value.carrier === "tmobile") {
                customAmount += 10;
            }
            if (value.box) {
                customAmount += 1;
            }
            if (value.headsets) {
                customAmount += 1;
            }
            if (value.powercord) {
                customAmount += 1;
            }
        } else if (selectedDevice[0].label === "Pixel 3a") {
            data.google_carrier = "sprint"
            if (value.carrier === "Unlocked") {
                customAmount += 35;
            }
            if (value.carrier === "tmobile") {
                customAmount += 25;
            }
            if (value.box) {
                customAmount += 1;
            }
            if (value.headsets) {
                customAmount += 1;
            }
            if (value.powercord) {
                customAmount += 1;
            }
        }

        googleApi(data).then(res => {
            if (!isEmpty(res.data && res.data.results)) {
                let offer = +res.data.results[0].offer
                offer = offer + customAmount;
                setOffers([{ ...res.data.results[0], offer }])
                if (offer <= 0) {
                    setIsBrokenOrNo(true)
                }
            }
            setIsLoader(false)
        }).catch(err => {
            console.log(err);
            setIsLoader(false)
        })
    }

    const selectIWatchCondition = (value) => {
        if (value === 'Broken') {
            setIsBrokenOrNo(false)
            setIsBrokenFiled(false)
        } else if (value === 'Brand New') {
            setIsShowButton(true)
            setIsBrokenOrNo(false)
            setIsBrokenFiled(false)
        } else if (value === 'Flaw-less') {
            setIsBrokenOrNo(false)
            setIsBrokenFiled(false)
        } else if (value === 'Good') {
            setIsBrokenOrNo(false)
            setIsBrokenFiled(false)
        } else if (value === 'Fair') {
            setIsBrokenOrNo(false)
            setIsBrokenFiled(false)
        } else {
            return null;
        }
    }

    const addCart = (value) => {
        const data = {
            deviceType: "GooglePhone",
            deviceModel: value.google_model,
            deviceCapacity: value.google_capacity,
            deviceCarrier: value.google_carrier,
            deviceCondition: value.google_condition,
            deviceYear: "",
            deviceProcessor: "",
            deviceOffer: parseInt(value.offer),
            deviceGeneration: "",
            deviceSize: "",
            deviceEdition: "",
            deviceBand: "",
            deviceEngraving: "",
            imagePath: imagePath,
            id : value.id
        }

        dispatch(addToCart(data))
        props.history.push("/cart");
    }
    return (
        <div className="sell-a-device-container">
            <div className={!isEmpty(selectedDevice) ? 'device-selected' : ''}>
                {
                    isEmpty(selectedDevice) &&
                    <>
                        <div className="row mt-5">
                            {
                                !isEmpty(deviceList) && deviceList.map((item, index) => (
                                    <div className="device-item-div col-sm-4 col-md-3 d-flex flex-column cursor-pointer justify-content-space-between" key={index}>
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
                    </>
                }
            </div>
            <Formik
                initialValues={{
                    carrier: "",
                    condition: "",
                    functional: "",
                    box: "",
                    powercord: "",
                    headsets: "",
                    capacity: ""
                }}
                onSubmit={handelSubmits}
            >
                {({ handleChange, values }) => (
                    <Form>
                        {
                            selectedDevice &&
                            <div>
                                {selectedDevice[0].label &&
                                    <div>
                                        <div className="d-flex align-items-center">
                                            <h4>{selectedDevice[0].label} </h4> <span className="ml-2 cursor-pointer text-info h6" onClick={(e) => {
                                                handleChange({
                                                    target: {
                                                        name: "carrier",
                                                        value: '',
                                                    }
                                                })
                                                handleChange({
                                                    target: {
                                                        name: "condition",
                                                        value: '',
                                                    }
                                                })
                                                handleChange({
                                                    target: {
                                                        name: "capacity",
                                                        value: '',
                                                    }
                                                })
                                                handleChange({
                                                    target: {
                                                        name: "functional",
                                                        value: '',
                                                    }
                                                })
                                                handleChange({
                                                    target: {
                                                        name: "box",
                                                        value: '',
                                                    }
                                                })
                                                handleChange({
                                                    target: {
                                                        name: "powercord",
                                                        value: '',
                                                    }
                                                })
                                                handleChange({
                                                    target: {
                                                        name: "headsets",
                                                        value: '',
                                                    }
                                                })
                                                setSelectedDevice()
                                                setIsBrokenOrNo(false)
                                                setOffers()
                                            }} >/ Change Model</span>
                                        </div>
                                        <hr />
                                        {!values.carrier &&
                                            <div>
                                                <h4>Select your Carrier</h4>
                                            </div>
                                        }
                                    </div>
                                }
                                {selectedDevice[0].label && !values.carrier &&
                                    <div role="group" aria-labelledby="my-radio-group">
                                        <div>
                                            {selectedDevice[0].carrier.map((x, i) => (
                                                <>
                                                    {
                                                        (x.label != "Unlocked" || x.label != "other") &&
                                                        <label className="ml-3 mt-4 cursor-pointer  border-dark-white rounded p-4">
                                                            <img className="mb-5" src={x.img} height="50" />
                                                            <Field className="mr-2 d-none" type="radio" name="carrier" value={x.label} />
                                                        </label>
                                                    }
                                                    {
                                                        x.label === "Unlocked" &&
                                                        <label className="ml-3 mt-4 cursor-pointer border text-center border-dark-white rounded p-4">
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
                                                    }

                                                    {
                                                        x.label === "other" &&
                                                        <label className="ml-3 mt-4 cursor-pointer border text-center border-dark-white rounded p-4">
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
                                                    }
                                                </>
                                            ))}
                                        </div>
                                    </div>
                                }
                                {
                                    values.carrier && !isCapacity && <>
                                        <div className="d-flex align-items-center">
                                            <h4>Type of carrier: {values.carrier} </h4>
                                            <span className="ml-2 cursor-pointer text-info h6" onClick={(e) => {
                                                handleChange({
                                                    target: {
                                                        name: "carrier",
                                                        value: '',
                                                    }
                                                })
                                                setOffers()
                                                setIsBrokenFiled(false)
                                                setIsBrokenOrNo(false)
                                            }} > / Change Carrier</span>
                                        </div>
                                        <hr />
                                        {values.carrier && !values.condition &&
                                            <div>
                                                <h4>Select Your condition</h4>
                                            </div>
                                        }
                                    </>
                                }

                                {
                                    values.carrier && isCapacity && <>
                                        <div className="d-flex align-items-center">
                                            <h4>Type of carrier: {values.carrier} </h4>
                                            <span className="ml-2 cursor-pointer text-info h6" onClick={(e) => {
                                                handleChange({
                                                    target: {
                                                        name: "carrier",
                                                        value: '',
                                                    }
                                                })
                                                setOffers()
                                                setIsBrokenFiled(false)
                                                setIsBrokenOrNo(false)
                                            }} > / Change Carrier</span>
                                        </div>
                                        <hr />
                                        {!values.capacity &&
                                            <div>
                                                <h4>Select the phone's capacity</h4>
                                            </div>
                                        }
                                    </>
                                }

                                {selectedDevice[0].label && values.carrier && isCapacity && !values.capacity &&
                                    <>
                                        <div role="group" aria-labelledby="my-radio-group">
                                            <div>
                                                {
                                                    selectedDevice[0].capacity.map((x, i) => (
                                                        <label key={i} className="ml-4 border mt-4 cursor-pointer rounded p-4">
                                                            <Field className="mr-2 d-none" type="radio" name="capacity" onChange={handleChange} value={x} />
                                                            {x}
                                                        </label>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </>
                                }

                                {
                                    values.carrier && isCapacity && values.capacity && <>
                                        <div className="d-flex align-items-center">
                                            <h4>Type of capacity: {values.capacity} </h4>
                                            <span className="ml-2 cursor-pointer text-info h6" onClick={(e) => {
                                                handleChange({
                                                    target: {
                                                        name: "capacity",
                                                        value: '',
                                                    }
                                                })
                                                setOffers()
                                                setIsBrokenFiled(false)
                                                setIsBrokenOrNo(false)
                                            }} > / Change capacity</span>
                                        </div>
                                        <hr />
                                        {values.capacity && isCapacity && !values.condition &&
                                            <div>
                                                <h4>Select your condition</h4>
                                            </div>
                                        }
                                    </>
                                }

                                {!values.condition && (isCapacity ? (values.capacity ? true : false) : true) && values.carrier &&
                                    <div className="mt-4 ml-3 mr-3 row" role="group" aria-labelledby="my-radio-group">
                                        <div className="col-md-2 ml-2 mb-2 border py-2">
                                            <div className="d-flex justify-content-between">
                                                <label className="h5"> Brand New</label>
                                                <Field className="mt-1" type="radio" name="condition" onClick={() => {
                                                    selectIWatchCondition('Brand New')
                                                    handleChange({
                                                        target: {
                                                            name: "functional",
                                                            value: '',
                                                        }
                                                    })
                                                    handleChange({
                                                        target: {
                                                            name: "box",
                                                            value: '',
                                                        }
                                                    })
                                                    handleChange({
                                                        target: {
                                                            name: "powercord",
                                                            value: '',
                                                        }
                                                    })
                                                    handleChange({
                                                        target: {
                                                            name: "headsets",
                                                            value: '',
                                                        }
                                                    })

                                                    setIsShowButton(true)
                                                    setIsBrokenOrNo(false)
                                                }} value="Brand New" />
                                            </div>
                                            <label className="mt-2">
                                                Phone still in factory original packaging. Comes with the box and all accessories sealed/untouched.
                                        </label>
                                        </div>

                                        <div className="col-md-2 ml-2 mb-2 border py-2">
                                            <div className="d-flex justify-content-between">
                                                <label className="h5"> Flaw-less</label>
                                                <Field className="mt-1" type="radio" name="condition" onClick={() => {
                                                    selectIWatchCondition('Flaw-less')
                                                }} value="Flaw-less" />
                                            </div>
                                            <label className="mt-2">
                                                Looks brand new. Contains no dents, dings or scratches.
                                        </label>
                                        </div>

                                        <div className="col-md-2 ml-2 mb-2 border py-2">
                                            <div className="d-flex justify-content-between">
                                                <label className="h5"> Good</label>
                                                <Field className="mt-1" type="radio" name="condition" onClick={() => {
                                                    selectIWatchCondition('Good')
                                                }} value="Good" />
                                            </div>
                                            <label className="mt-2">
                                                Shows light to moderate signs of wear. Contains many light scratches and/or dents.
                                        </label>
                                        </div>

                                        <div className="col-md-2 ml-2 mb-2 border py-2">
                                            <div className="d-flex justify-content-between">
                                                <label className="h5"> Fair</label>
                                                <Field className="mt-1" type="radio" name="condition" onClick={() => {
                                                    selectIWatchCondition('Fair')
                                                }} value="Fair" />
                                            </div>
                                            <label className="mt-2">
                                                Shows moderate to excessive signs of wear. Contains numerous light to moderate scratches and/or dents.
                                        </label>
                                        </div>
                                        <div className="col-md-2 ml-2 mb-2 border py-2">
                                            <div className="d-flex justify-content-between">
                                                <label className="h5"> Broken</label>
                                                <Field className="mt-1" type="radio" name="condition" onClick={() => {
                                                    selectIWatchCondition('Broken')
                                                    handleChange({
                                                        target: {
                                                            name: "functional",
                                                            value: '',
                                                        }
                                                    })
                                                    handleChange({
                                                        target: {
                                                            name: "box",
                                                            value: '',
                                                        }
                                                    })
                                                    handleChange({
                                                        target: {
                                                            name: "powercord",
                                                            value: '',
                                                        }
                                                    })
                                                    handleChange({
                                                        target: {
                                                            name: "headsets",
                                                            value: '',
                                                        }
                                                    })
                                                    setIsShowButton(true)
                                                    setIsBrokenOrNo(false)
                                                }} value="Broken" />
                                            </div>
                                            <label className="mt-2">
                                                Deep cracks or broken parts on either screen or body of the item.
                                        </label>
                                        </div>
                                    </div>
                                }

                                {

                                    values.condition && values.carrier && (isCapacity ? (values.capacity ? true : false) : true) && <>
                                        <div className="d-flex align-items-center">
                                            <h4>Type of condition: {values.condition} </h4>
                                            <span className="ml-2 cursor-pointer text-info h6" onClick={(e) => {
                                                handleChange({
                                                    target: {
                                                        name: "condition",
                                                        value: '',
                                                    }
                                                })
                                                handleChange({
                                                    target: {
                                                        name: "functional",
                                                        value: '',
                                                    }
                                                })
                                                setOffers()
                                                setIsShowButton(false)
                                                setIsBrokenOrNo(false)
                                            }} > / Change condition</span>
                                        </div>
                                        <hr />
                                        {!values.functional && values.condition && values.condition != 'Brand New' &&
                                            <div>
                                                <h4>Select your phone fully functional</h4>
                                            </div>
                                        }
                                    </>
                                }


                                {

                                    values.condition && values.carrier && !values.functional && (isCapacity ? (values.capacity ? true : false) : true) && values.condition != 'Brand New' &&
                                    <>
                                        <div className="mt-4 col-md-12" role="group" aria-labelledby="my-radio-group">
                                            <div className="border col-md-4">
                                                <div className="float-right">
                                                    <Field className="mt-1" type="radio" name="functional" onClick={() => { setIsShowButton(true) }} value='Yes' />
                                                </div>
                                                <label className="mt-1">
                                                    Yes
                                                 </label>
                                            </div>
                                            <div className="border col-md-4">
                                                <div className="float-right">
                                                    <Field className="mt-1" type="radio" onClick={() => {
                                                        setIsBrokenOrNo(true)
                                                    }}
                                                        name="functional" value='No' />
                                                </div>
                                                <label className="mt-1">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </>
                                }

                                {

                                    values.condition && values.carrier && values.functional && (isCapacity ? (values.capacity ? true : false) : true) && <>
                                        <div className="d-flex align-items-center">
                                            <h4>Type of functional: {values.functional} </h4>
                                            <span className="ml-2 cursor-pointer text-info h6" onClick={(e) => {
                                                handleChange({
                                                    target: {
                                                        name: "functional",
                                                        value: '',
                                                    }
                                                })
                                                setIsBrokenOrNo(false)
                                                setIsShowButton(false)
                                                setOffers()
                                            }} > / Change phone fully functional</span>
                                        </div>
                                        <hr />
                                        {!isBrokenOrNo && isEmpty(offers) &&
                                            <div>
                                                <h4>Select your phone accessories included</h4>
                                            </div>
                                        }
                                    </>
                                }

                                {
                                    !isBrokenOrNo && isEmpty(offers) &&
                                    values.condition && values.carrier && (isCapacity ? (values.capacity ? true : false) : true) && values.functional &&
                                    <div className="row">
                                        <div className="mt-4 col-md-12">
                                            <div className="border col-md-4">
                                                <div className="float-right">
                                                    <Field className="mt-1" onChange={handleChange} checked={values.box} type="checkbox" name="box" />
                                                </div>
                                                <label className="mt-1">
                                                    Include Original Box
                                                </label>
                                            </div>
                                            <div className="border col-md-4">
                                                <div className="float-right">
                                                    <Field className="mt-1" onChange={handleChange} checked={values.headsets} type="checkbox" name="headsets" />
                                                </div>
                                                <label className="mt-1">
                                                    New Original Headsets
                                                </label>
                                            </div>
                                            <div className="border col-md-4">
                                                <div className="float-right">
                                                    <Field className="mt-1" onChange={handleChange} type="checkbox" checked={values.powercord} name="powercord" />
                                                </div>
                                                <label className="mt-1">
                                                    include Charging Cable and Adaptor
                                               </label>
                                            </div>
                                        </div>
                                    </div>

                                }

                                {
                                    !isBrokenOrNo &&
                                    values.condition && values.carrier && values.functional && (isCapacity ? (values.capacity ? true : false) : true) && !isEmpty(offers) &&
                                    <>
                                        <div>
                                            <h4>Accessories Include :</h4>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <h4>Original Box : {values.box && "Yes" || "No"} </h4>
                                            </div>

                                            <span className="ml-2 cursor-pointer text-info h6" onClick={(e) => {
                                                handleChange({
                                                    target: {
                                                        name: "box",
                                                        value: '',
                                                    }
                                                })
                                                setOffers()
                                            }} > / Change </span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <h4>
                                                    New Original Headsets : {values.headsets && "Yes" || "No"}</h4>
                                            </div>
                                            <span className="ml-2 cursor-pointer text-info h6" onClick={(e) => {
                                                handleChange({
                                                    target: {
                                                        name: "headsets",
                                                        value: '',
                                                    }
                                                })
                                                setOffers()
                                            }} > / Change </span>
                                        </div>

                                        <div className="d-flex align-items-center">
                                            <div>
                                                <h4> Charging Cable and Adaptor : {values.powercord && "Yes" || "No"}</h4>
                                            </div>
                                            <span className="ml-2 cursor-pointer text-info h6" onClick={(e) => {
                                                handleChange({
                                                    target: {
                                                        name: "powercord",
                                                        value: '',
                                                    }
                                                })
                                                setOffers()
                                            }} > / Change </span>
                                        </div>
                                    </>
                                }
                                {
                                    ((values.condition === 'Brand New' && !values.functional && isShowButton && isEmpty(offers)) ||
                                        (isEmpty(offers) && values.carrier && (isCapacity ? (values.capacity ? true : false) : true) && values.condition && values.functional && !isBrokenFiled && isShowButton)) &&
                                    <div className="col-md-12">
                                        <div className="d-flex justify-content-center">
                                            <div className="col-md-6 mt-4 text-center">
                                                <Button variant="outline-secondary" className="w-100" type="submit">Show my Offer</Button>
                                            </div>
                                        </div>
                                    </div>
                                }


                                {
                                    isBrokenFiled && isShowButton &&
                                    <div className="col-md-12">
                                        <div className="d-flex justify-content-center">
                                            <div className="col-md-6 mt-4 text-center">
                                                <Button variant="outline-secondary" className="w-100" onClick={() => {
                                                    setIsBrokenOrNo(true)
                                                    setIsBrokenFiled(false)
                                                }} >Show my Offer</Button>
                                            </div>
                                        </div>
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
                                                <Button variant="outline-primary" className="w-100"
                                                    onClick={() => addCart({
                                                        offer: 0,
                                                        google_capacity: values.capacity,
                                                        google_carrier: values.carrier,
                                                        google_condition: values.condition,
                                                        id: selectedDevice[0].label,
                                                        imagePath: imagePath,
                                                        google_model: selectedDevice[0].label
                                                    })}
                                                >Recycle now</Button>
                                            </div>
                                        </div>

                                    </div>
                                }

                            </div>
                        }
                    </Form>
                )}
            </Formik>
        </div >
    )
}
export default GooglePage
