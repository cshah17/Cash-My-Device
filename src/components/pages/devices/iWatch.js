import { Field, Form, Formik } from "formik";
import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";

import { iWatch } from "../../../services/iPhoneApiService";
import { addToCart } from "../../../store/actions/cart";
import { isEmpty } from "../../../validation/index";
import LoaderSpinner from "../../Loader/loaderSpinner";

const deviceList1 = [
    {
        devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/iWatch/apple-watch-1st-gen.jpg',
        displayName: "Apple Watch (1st Gen)",
        label: "Apple Watch Original(1st Gen)",
        deviceDetail: [
            {
                TypeOfWathches: []
            },
            {
                TypeofCaseWatchHave: ['Aluminium Case', 'Stainless-Steel Case']
            },
            {
                SizeofyourWatch: ['38mm', "42mm"]
            },
            {
                Condition: [{ name: 'Brand New', label: 'Watch is still in factory original packaging. Comes with the box and all accessories sealed/untouched.' }, { name: 'Flaw-less', label: 'Watch and band have absolutely no scratches, scuffs or other marks. Looks brand new.' }, { name: 'Good', label: 'Watch Shows light to moderate signs of wear. Contains few light scratches, dings, or wear on screen and band.' }, { name: 'Fair', label: 'Watch shows moderate to excessive signs of wear. Contains heavy scratches and/or dents on screen and band.' }, { name: 'Broken', label: 'Watch has deep cracks or broken parts on either screen or band of the item.' },]
            }
        ],
        imagePath: "https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/iWatch/apple-watch-1st-gen.jpg"
    },
    {
        devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/iWatch/apple-watch-series-1.jpg',
        displayName: "Apple Watch Series 1",
        label: "Apple Watch Series 1",
        deviceDetail: [
            {
                TypeOfWathches: []
            },
            {
                TypeofCaseWatchHave: []
            },
            {
                SizeofyourWatch: ['38mm', "42mm"]
            },
            {
                Condition: [{ name: 'Brand New', label: 'Watch is still in factory original packaging. Comes with the box and all accessories sealed/untouched.' }, { name: 'Flaw-less', label: 'Watch and band have absolutely no scratches, scuffs or other marks. Looks brand new.' }, { name: 'Good', label: 'Watch Shows light to moderate signs of wear. Contains few light scratches, dings, or wear on screen and band.' }, { name: 'Fair', label: 'Watch shows moderate to excessive signs of wear. Contains heavy scratches and/or dents on screen and band.' }, { name: 'Broken', label: 'Watch has deep cracks or broken parts on either screen or band of the item.' },]
            }
        ],
        imagePath: "https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/iWatch/apple-watch-series-1.jpg"
    },
    {
        devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/iWatch/apple-watch-series-2.jpg',
        displayName: "Apple Watch Series 2",
        label: "Apple Watch Series 2",
        deviceDetail: [
            {
                TypeOfWathches: []
            },
            {
                TypeofCaseWatchHave: ['Aluminium Case', 'Stainless-Steel Case']
            },
            {
                SizeofyourWatch: ['38mm', "42mm"]
            },
            {
                Condition: [{ name: 'Brand New', label: 'Watch is still in factory original packaging. Comes with the box and all accessories sealed/untouched.' }, { name: 'Flaw-less', label: 'Watch and band have absolutely no scratches, scuffs or other marks. Looks brand new.' }, { name: 'Good', label: 'Watch Shows light to moderate signs of wear. Contains few light scratches, dings, or wear on screen and band.' }, { name: 'Fair', label: 'Watch shows moderate to excessive signs of wear. Contains heavy scratches and/or dents on screen and band.' }, { name: 'Broken', label: 'Watch has deep cracks or broken parts on either screen or band of the item.' },]
            }
        ],
        imagePath: "https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/iWatch/apple-watch-series-2.jpg"
    },
    {
        devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/iWatch/apple-watch-series-3.jpg',
        displayName: "Apple Watch Series 3",
        label: "Apple Watch Series 3",
        deviceDetail: [
            {
                TypeOfWathches: ['GPS', 'GPS+']
            },
            {
                TypeofCaseWatchHave: ['Aluminium Case', 'Stainless-Steel Case', 'Ceramic Case']
            },
            {
                SizeofyourWatch: ['38mm', "42mm"]
            },
            {
                Condition: [{ name: 'Brand New', label: 'Watch is still in factory original packaging. Comes with the box and all accessories sealed/untouched.' }, { name: 'Flaw-less', label: 'Watch and band have absolutely no scratches, scuffs or other marks. Looks brand new.' }, { name: 'Good', label: 'Watch Shows light to moderate signs of wear. Contains few light scratches, dings, or wear on screen and band.' }, { name: 'Fair', label: 'Watch shows moderate to excessive signs of wear. Contains heavy scratches and/or dents on screen and band.' }, { name: 'Broken', label: 'Watch has deep cracks or broken parts on either screen or band of the item.' },]
            }
        ],
        imagePath: "https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/iWatch/apple-watch-series-3.jpg"
    },
    {
        devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/iWatch/apple-watch-series-4.jpg',
        displayName: "Apple Watch Series 4",
        label: "Apple Watch Series 4",
        deviceDetail: [
            {
                TypeOfWathches: ['GPS', 'GPS+']
            },
            {
                TypeofCaseWatchHave: ['Aluminium Case', 'Stainless-Steel Case']
            },
            {
                SizeofyourWatch: ['40mm', "44mm"]
            },
            {
                Condition: [{ name: 'Brand New', label: 'Watch is still in factory original packaging. Comes with the box and all accessories sealed/untouched.' }, { name: 'Flaw-less', label: 'Watch and band have absolutely no scratches, scuffs or other marks. Looks brand new.' }, { name: 'Good', label: 'Watch Shows light to moderate signs of wear. Contains few light scratches, dings, or wear on screen and band.' }, { name: 'Fair', label: 'Watch shows moderate to excessive signs of wear. Contains heavy scratches and/or dents on screen and band.' }, { name: 'Broken', label: 'Watch has deep cracks or broken parts on either screen or band of the item.' },]
            }
        ],
        imagePath: "https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/iWatch/apple-watch-series-4.jpg"
    },
    {
        devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/iWatch/apple-watch-series-5.jpg',
        displayName: "Apple Watch Series 5",
        label: "Apple Watch Series 5",
        deviceDetail: [
            {
                TypeOfWathches: ['GPS', 'GPS+']
            },
            {
                TypeofCaseWatchHave: ['Aluminium Case', 'Stainless-Steel Case', 'Ceramic Case', 'Titanium Case']
            },
            {
                SizeofyourWatch: ['40mm', "44mm"]
            },
            {
                Condition: [{ name: 'Brand New', label: 'Watch is still in factory original packaging. Comes with the box and all accessories sealed/untouched.' }, { name: 'Flaw-less', label: 'Watch and band have absolutely no scratches, scuffs or other marks. Looks brand new.' }, { name: 'Good', label: 'Watch Shows light to moderate signs of wear. Contains few light scratches, dings, or wear on screen and band.' }, { name: 'Fair', label: 'Watch shows moderate to excessive signs of wear. Contains heavy scratches and/or dents on screen and band.' }, { name: 'Broken', label: 'Watch has deep cracks or broken parts on either screen or band of the item.' },]
            }
        ],
        imagePath: "https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/iWatch/apple-watch-series-5.jpg"
    }
]

const IWatch = (props) => {
    const dispatch = useDispatch();
    const [selectedDevice, setSelectedDevice] = useState()
    const [offers, setOffers] = useState()
    const [imagePath, setImagePath] = useState()
    const [isLoader, setIsLoader] = useState(false)
    const [isShowButton, setIsShowButton] = useState(false)
    const [isTypeOfWathches, setIsTypeOfWathches] = useState(false)

    const [isIncludesBand, setIsIncludesBand] = useState(false)
    const [isWatch_functionalYes, setIsWatch_functionalYes] = useState(false)
    const [isIncludesBandYes, setIsIncludesBandYes] = useState(false)

    const [isBrokenOrNo, setIsBrokenOrNo] = useState(false)
    const [isBrokenFiled, setIsBrokenFiled] = useState(false)
    let { model } = useParams();

    useEffect(() => {
        if (model) {
            deviceList1.filter(x => {
                if (model === 'Apple Watch Series 2') {
                    setIsTypeOfWathches(false)
                } else {
                    setIsTypeOfWathches(true)
                }
                if (x.label === model) {
                    setSelectedDevice([x])
                }
            })
        }
    }, [model])

    const selectDevice = (obj) => {
        setSelectedDevice([obj]);
        setImagePath(obj.imagePath);
    }

    const handelSubmits = (value) => {
        setIsLoader(true);
        const condition = value.iwatch_condition === 'Brand New' ? '100%' : value.iwatch_condition === 'Flaw-less' ? '75%' : value.iwatch_condition === 'Good' ? '50%' : value.iwatch_condition === 'Fair' ? '30%' : 'Broken'
        const iwatch_band = value.iwatch_bands ? value.iwatch_bands : value.iwatch_band
        const iwatch_box = value.iwatch_box ? 'Yes' : 'No%'
        const iwatch_powercord = value.iwatch_powercord ? 'Yes' : 'No%'
        const iwatch_carrier = value.iwatch_carrier === 'GPS+' ? 'GPS %2B Cellular' : value.iwatch_carrier === 'GPS' ? 'GPS' : ''
        const iWatchData = {
            label: selectedDevice[0].label,
            iwatch_carrier: selectedDevice[0].displayName === 'Apple Watch Series 5' && value.iwatch_carrier === 'GPS+' ? 'GPS' : iwatch_carrier,
            iwatch_edition_casing: value.iwatch_edition_casing,
            iwatch_size: value.iwatch_size,
            iwatch_band,
            condition,
            iwatch_functional: value.iwatch_functional === 'No' ? 'No%' : value.iwatch_functional,
            iwatch_powercord,
            iwatch_box
        }
        if (iwatch_box === 'No%' && iwatch_powercord === 'No%') {
            iWatchData.iwatch_powercord = ''
            iWatchData.iwatch_box = ''
        }
        iWatch(iWatchData).then(res => {
            setIsLoader(false)
            if (!isEmpty(res.data && res.data.results)) {
                let offer = +res.data.results[0].offer
                if (selectedDevice[0].displayName === 'Apple Watch Series 5' && offer > 0 && value.iwatch_carrier === 'GPS+') {
                    offer = offer + 30;
                }
                if (!value.iwatch_box && !value.iwatch_box) {
                    offer -= 7
                }
                if (offer >= 100 && offer < 200) {
                    offer = offer + 5;
                } else if (offer >= 200 && offer < 500) {
                    offer = offer + 10;
                } else if (offer >= 500) {
                    offer = offer + 15;
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
            deviceType: "IWatch",
            deviceModel: value.iwatch_model,
            deviceCapacity: "",
            deviceCarrier: value.iwatch_carrier,
            deviceCondition: value.iwatch_condition,
            deviceYear: "",
            deviceProcessor: "",
            deviceOffer: parseInt(value.offer),
            deviceGeneration: "",
            deviceSize: value.iwatch_size,
            deviceEdition: value.iwatch_edition_casing,
            deviceBand: value.iwatch_band,
            deviceEngraving: "",
            imagePath: imagePath,
            id: value.id
        }
        dispatch(addToCart(data))
        props.history.push("/cart");
    }

    const selectIWatchCondition = (value) => {
        if (value === 'Broken') {
            setIsIncludesBand(true)
            setIsBrokenOrNo(false)
        } else if (value === 'Brand New') {
            setIsShowButton(true)
            setIsIncludesBand(false)
            setIsBrokenOrNo(false)
        } else if (value === 'Flaw-less') {
            setIsIncludesBand(true)
            setIsBrokenOrNo(false)
        } else if (value === 'Good') {
            setIsIncludesBand(true)
            setIsBrokenOrNo(false)
        } else if (value === 'Fair') {
            setIsIncludesBand(true)
            setIsBrokenOrNo(false)
        } else {
            return null;
        }
    }
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
                    iwatch_model: '',
                    iwatch_carrier: '',
                    iwatch_edition_casing: '',
                    iwatch_size: '',
                    iwatch_band: '',
                    iwatch_condition: '',
                    iwatch_functional: '',
                    iwatch_powercord: '',
                    iwatch_box: '',
                    iwatch_bands: ''
                }}
                onSubmit={handelSubmits}
            >
                {({ values, handleChange }) => (
                    <Form>
                        <div className="row">
                            {selectedDevice && selectedDevice[0].displayName &&
                                <div className="col-md-12">
                                    <div className="d-flex align-items-center">
                                        <h4>iWatch Model:{selectedDevice[0].displayName} </h4> <span className="ml-2 cursor-pointer text-info h6" onClick={(e) => {
                                            handleChange({
                                                target: {
                                                    name: "iwatch_model",
                                                    value: '',
                                                }
                                            })
                                            handleChange({
                                                target: {
                                                    name: "iwatch_carrier",
                                                    value: '',
                                                }
                                            })
                                            handleChange({
                                                target: {
                                                    name: "iwatch_edition_casing",
                                                    value: '',
                                                }
                                            })
                                            handleChange({
                                                target: {
                                                    name: "iwatch_size",
                                                    value: '',
                                                }
                                            })
                                            handleChange({
                                                target: {
                                                    name: "iwatch_band",
                                                    value: '',
                                                }
                                            })
                                            handleChange({
                                                target: {
                                                    name: "iwatch_condition",
                                                    value: '',
                                                }
                                            })
                                            handleChange({
                                                target: {
                                                    name: "iwatch_functional",
                                                    value: '',
                                                }
                                            })
                                            handleChange({
                                                target: {
                                                    name: "iwatch_powercord",
                                                    value: '',
                                                }
                                            })
                                            handleChange({
                                                target: {
                                                    name: "iwatch_box",
                                                    value: '',
                                                }
                                            })
                                            setIsShowButton(false)
                                            setIsIncludesBand(false)
                                            setIsTypeOfWathches(false)
                                            setIsIncludesBandYes(false)
                                            setIsBrokenFiled(false)
                                            setIsBrokenOrNo(false)
                                            setSelectedDevice()
                                            setOffers()
                                            setIsLoader(false);
                                        }} >/ Change Model</span>
                                    </div>
                                    {
                                        !values.iwatch_carrier && selectedDevice[0].deviceDetail && selectedDevice[0].deviceDetail[0].TypeOfWathches && selectedDevice[0].deviceDetail[0].TypeOfWathches.length > 0 &&
                                        <>
                                            <hr />
                                            <div>
                                                <h4>Select connectivity of watch </h4>
                                            </div>
                                            <div role="group" className="row mt-3" aria-labelledby="my-radio-group">
                                                <div className="col d-flex">
                                                    {selectedDevice[0].deviceDetail[0].TypeOfWathches.map((x, i) => (
                                                        <div className="border border-dark-white rounded mx-2">
                                                            <label className={`d-flex align-items-center justify-content-center h-100 m-2 cursor-pointer text-center p-4 ${values.iwatch_carrier === "other" && 'border border-dark' || ''}`}>
                                                                <Field className="mr-2 d-none" onClick={setIsTypeOfWathches(true)} type="radio" name="iwatch_carrier" value={x} />
                                                                <div><h1> {x}</h1>
                                                                    {x === 'GPS+' &&
                                                                        <p className="margin-5"><h4>Cellular</h4></p> || null
                                                                    }
                                                                </div>
                                                            </label>
                                                        </div>))
                                                    }
                                                </div>
                                            </div>
                                        </>
                                    }

                                    {
                                        isTypeOfWathches && values.iwatch_carrier && <>
                                            <hr />
                                            <div className="d-flex align-items-center">
                                                <h4>Type of Watch: {values.iwatch_carrier} </h4> <span className="ml-2 cursor-pointer text-info h6" onClick={(e) => {
                                                    handleChange({
                                                        target: {
                                                            name: "iwatch_carrier",
                                                            value: '',
                                                        }
                                                    })

                                                    handleChange({
                                                        target: {
                                                            name: "iwatch_edition_casing",
                                                            value: '',
                                                        }
                                                    })
                                                    handleChange({
                                                        target: {
                                                            name: "iwatch_size",
                                                            value: '',
                                                        }
                                                    })
                                                    handleChange({
                                                        target: {
                                                            name: "iwatch_band",
                                                            value: '',
                                                        }
                                                    })
                                                    handleChange({
                                                        target: {
                                                            name: "iwatch_condition",
                                                            value: '',
                                                        }
                                                    })
                                                    handleChange({
                                                        target: {
                                                            name: "iwatch_functional",
                                                            value: '',
                                                        }
                                                    })
                                                    handleChange({
                                                        target: {
                                                            name: "iwatch_powercord",
                                                            value: '',
                                                        }
                                                    })
                                                    handleChange({
                                                        target: {
                                                            name: "iwatch_box",
                                                            value: '',
                                                        }
                                                    })

                                                    setOffers()
                                                    setIsShowButton(false)
                                                    setIsIncludesBand(false)
                                                    setIsIncludesBandYes(false)
                                                    setIsBrokenFiled(false)
                                                    setIsBrokenOrNo(false)

                                                }} > / Change Type of watch</span>
                                            </div>
                                        </>
                                    }

                                    {
                                        selectedDevice[0].deviceDetail && !values.iwatch_edition_casing && (isTypeOfWathches && values.iwatch_carrier ? true : !isTypeOfWathches && !values.iwatch_carrier ? true : false) && selectedDevice[0].deviceDetail[1].TypeofCaseWatchHave && selectedDevice[0].deviceDetail[1].TypeofCaseWatchHave.length > 0 &&
                                        <>
                                            <hr />
                                            <div>
                                                <h4>Select type of case watch have </h4>
                                            </div>

                                            <div className="row">
                                                {
                                                    selectedDevice[0].deviceDetail[1].TypeofCaseWatchHave.map((x, i) => (
                                                        <div className="mt-4 col-md-12" key={i} role="group" aria-labelledby="my-radio-group">
                                                            <div className="border col-md-4">
                                                                <div className="float-right">
                                                                    <Field className="mt-1" type="radio" name="iwatch_edition_casing" value={x} />
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

                                    {
                                        values.iwatch_edition_casing &&
                                        <>
                                            <hr />
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <h4>Type of case iWatch has : {values.iwatch_edition_casing}</h4>
                                                </div>
                                                <span className="ml-2 cursor-pointer text-info h6" onClick={(e) => {
                                                    handleChange({
                                                        target: {
                                                            name: "iwatch_edition_casing",
                                                            value: '',
                                                        }
                                                    })
                                                    setOffers()
                                                    setIsShowButton(false)
                                                    setIsIncludesBand(false)
                                                    setIsIncludesBandYes(false)
                                                    setIsBrokenFiled(false)
                                                    setIsBrokenOrNo(false)
                                                }} >/ Change type of case watch have</span>
                                            </div>
                                        </>
                                    }
                                    {selectedDevice[0].deviceDetail && (selectedDevice[0].displayName != 'Apple Watch Series 1' ? (values.iwatch_edition_casing ? true : false) : true) && !values.iwatch_size && selectedDevice[0].deviceDetail[2].SizeofyourWatch && selectedDevice[0].deviceDetail[2].SizeofyourWatch.length > 0 &&
                                        <>
                                            <hr />
                                            <div>
                                                <h4>Select size of your iWatch </h4>
                                            </div>
                                            <div role="group" aria-labelledby="my-radio-group">
                                                <div>
                                                    {
                                                        selectedDevice[0].deviceDetail[2].SizeofyourWatch.map((x, i) => (
                                                            <label key={i} className={`ml-4 border mt-4 cursor-pointer rounded p-4 ${values.deviceCapacity === `${x}` && 'border border-dark' || ''}`}>
                                                                <Field className="mr-2 d-none" type="radio" name="iwatch_size" onChange={handleChange} value={x} />
                                                                {x}
                                                            </label>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </>
                                    }

                                    {
                                        (selectedDevice[0].displayName != 'Apple Watch Series 1' ? (values.iwatch_edition_casing ? true : false) : true) && values.iwatch_size &&
                                        <>
                                            <hr />
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <h4>Size of iWatch : {values.iwatch_size}</h4>
                                                </div>
                                                <span className="ml-2 cursor-pointer text-info h6" onClick={(e) => {
                                                    handleChange({
                                                        target: {
                                                            name: "iwatch_size",
                                                            value: '',
                                                        }
                                                    })
                                                    setOffers()
                                                    setIsShowButton(false)
                                                    setIsIncludesBand(false)
                                                    setIsIncludesBandYes(false)
                                                    setIsBrokenFiled(false)
                                                    setIsBrokenOrNo(false)

                                                }} >/ Change size of your watch</span>
                                            </div>
                                        </>
                                    }


                                    {selectedDevice[0].deviceDetail && values.iwatch_size && !values.iwatch_condition && selectedDevice[0].deviceDetail[3].Condition && selectedDevice[0].deviceDetail[3].Condition.length > 0 &&
                                        <>
                                            <hr />
                                            <div>
                                                <h4>Select your Cosmetic ondition of iWatch</h4>
                                            </div>
                                            <div className="mt-4 ml-3 mr-3 row" role="group" aria-labelledby="my-radio-group">
                                                {
                                                    selectedDevice[0].deviceDetail[3].Condition.map((x, i) => (
                                                        <div key={i} className="col-md-2 ml-2 mb-2 border py-2">
                                                            <div className="d-flex justify-content-between">
                                                                <label className="h5">  {x.name}</label>
                                                                <Field className="mt-1" type="radio" onClick={() => {
                                                                    selectIWatchCondition(x.name)
                                                                    if (x.name === "Brand New") {
                                                                        handleChange({
                                                                            target: {
                                                                                name: "iwatch_functional",
                                                                                value: '',
                                                                            }
                                                                        })
                                                                        handleChange({
                                                                            target: {
                                                                                name: "iwatch_powercord",
                                                                                value: '',
                                                                            }
                                                                        })
                                                                        handleChange({
                                                                            target: {
                                                                                name: "iwatch_box",
                                                                                value: '',
                                                                            }
                                                                        })
                                                                        handleChange({
                                                                            target: {
                                                                                name: "iwatch_band",
                                                                                value: '',
                                                                            }
                                                                        })
                                                                        handleChange({
                                                                            target: {
                                                                                name: "iwatch_bands",
                                                                                value: '',
                                                                            }
                                                                        })
                                                                        handleChange({
                                                                            target: {
                                                                                name: "iwatch_band",
                                                                                value: '',
                                                                            }
                                                                        })
                                                                        handleChange({
                                                                            target: {
                                                                                name: "iwatch_bands",
                                                                                value: '',
                                                                            }
                                                                        })
                                                                        setIsIncludesBand(false)
                                                                        setIsShowButton(true)
                                                                        setIsIncludesBandYes(false)
                                                                        setIsBrokenFiled(false)
                                                                        setIsBrokenOrNo(false)
                                                                    }
                                                                }} name="iwatch_condition" value={x.name} />
                                                            </div>
                                                            <label className="mt-2">
                                                                {x.label}
                                                            </label>
                                                        </div>
                                                    ))
                                                }
                                            </div>

                                        </>
                                    }

                                    {
                                        (selectedDevice[0].displayName != 'Apple Watch Series 1' ? (values.iwatch_edition_casing ? true : false) : true) && values.iwatch_condition && values.iwatch_size &&
                                        <>
                                            <hr />
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <h4> Cosmetic condition of your iWatch: {values.iwatch_condition}</h4>
                                                </div>
                                                <span className="ml-2 cursor-pointer text-info h6" onClick={(e) => {
                                                    handleChange({
                                                        target: {
                                                            name: "iwatch_condition",
                                                            value: '',
                                                        }
                                                    })
                                                    setOffers()
                                                    setIsShowButton(false)
                                                    setIsIncludesBand(false)
                                                    setIsBrokenOrNo(false)
                                                    setIsBrokenFiled(false)
                                                }} >/ Change condition</span>
                                            </div>
                                        </>
                                    }

                                    {
                                        !values.iwatch_band && isIncludesBand && values.iwatch_condition &&
                                        <>
                                            <hr />
                                            <div>
                                                <h4>Is your iWatch includes band </h4>
                                            </div>
                                            <div className="row">
                                                <div className="mt-4 col-md-12" role="group" aria-labelledby="my-radio-group">
                                                    <div className="border col-md-4">
                                                        <div className="float-right">
                                                            <Field className="mt-1" type="radio" onClick={() => { setIsIncludesBandYes(true) }} name="iwatch_band" value='Yes' />
                                                        </div>
                                                        <label className="mt-1">
                                                            Yes
                                                        </label>
                                                    </div>
                                                    <div className="border col-md-4">
                                                        <div className="float-right">
                                                            <Field className="mt-1" type="radio" name="iwatch_band" value='No Band' />
                                                        </div>
                                                        <label className="mt-1">
                                                            No
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    }

                                    {
                                        values.iwatch_band && isIncludesBand && (selectedDevice[0].displayName != 'Apple Watch Series 1' ? (values.iwatch_edition_casing ? true : false) : true) && values.iwatch_condition && values.iwatch_size &&
                                        <>
                                            <hr />
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <h4>Band included: {values.iwatch_band}</h4>
                                                </div>
                                                <span className="ml-2 cursor-pointer text-info h6" onClick={(e) => {
                                                    handleChange({
                                                        target: {
                                                            name: "iwatch_band",
                                                            value: '',
                                                        }
                                                    })
                                                    handleChange({
                                                        target: {
                                                            name: "iwatch_bands",
                                                            value: '',
                                                        }
                                                    })
                                                    handleChange({
                                                        target: {
                                                            name: "iwatch_functional",
                                                            value: '',
                                                        }
                                                    })
                                                    setOffers()
                                                    setIsShowButton(false)
                                                    setIsIncludesBandYes(false)
                                                }} > / Change</span>
                                            </div>
                                        </>
                                    }


                                    {
                                        !values.iwatch_bands && selectedDevice[0].displayName === 'Apple Watch Series 5' && isIncludesBandYes && values.iwatch_band && values.iwatch_size && values.iwatch_condition && values.iwatch_carrier &&
                                        <>
                                            <hr />
                                            <h4>what is the type of the band</h4>
                                            <div className="row">
                                                <div className="mt-4 col-md-12" role="group" aria-labelledby="my-radio-group">
                                                    <div className="border col-md-4">
                                                        <div className="float-right">
                                                            <Field className="mt-1" type="radio" name="iwatch_bands" value='Sport Band-Any Color' />
                                                        </div>
                                                        <label className="mt-1">
                                                            Sport Band-Any Color
                                                        </label>
                                                    </div>
                                                    <div className="border col-md-4">
                                                        <div className="float-right">
                                                            <Field className="mt-1" type="radio" name="iwatch_bands" value='Leather Loop' />
                                                        </div>
                                                        <label className="mt-1">
                                                            Leather Loop
                                                        </label>
                                                    </div>
                                                    <div className="border col-md-4">
                                                        <div className="float-right">
                                                            <Field className="mt-1" type="radio" name="iwatch_bands" value='Sport Loop-Any Color' />
                                                        </div>
                                                        <label className="mt-1">
                                                            Sport Loop-Any Color
                                                        </label>
                                                    </div>
                                                    <div className="border col-md-4">
                                                        <div className="float-right">
                                                            <Field className="mt-1" type="radio" name="iwatch_bands" value='Milanese Loop' />
                                                        </div>
                                                        <label className="mt-1">
                                                            Milanese Loop
                                                        </label>
                                                    </div>
                                                    <div className="border col-md-4">
                                                        <div className="float-right">
                                                            <Field className="mt-1" type="radio" name="iwatch_bands" value='Modern Buckle' />
                                                        </div>
                                                        <label className="mt-1">
                                                            Modern Buckle
                                                        </label>
                                                    </div>
                                                    <div className="border col-md-4">
                                                        <div className="float-right">
                                                            <Field className="mt-1" type="radio" name="iwatch_bands" value='Link Bracelet' />
                                                        </div>
                                                        <label className="mt-1">
                                                            Link Bracelet
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    }

                                    {selectedDevice[0].displayName === 'Apple Watch Series 5' &&
                                        values.iwatch_bands && values.iwatch_band && isIncludesBand && isIncludesBandYes &&
                                        <>
                                            <hr />
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <h4>Type of band iWatch has : {values.iwatch_bands ? values.iwatch_bands : values.iwatch_band}</h4>
                                                </div>
                                                <span className="ml-2 cursor-pointer text-info h6" onClick={(e) => {
                                                    handleChange({
                                                        target: {
                                                            name: "iwatch_bands",
                                                            value: '',
                                                        }
                                                    })
                                                    setOffers()
                                                    setIsShowButton(false)
                                                    setIsBrokenOrNo(false)
                                                }} > / Change band</span>
                                            </div>
                                        </>
                                    }

                                    {
                                        !values.iwatch_functional && values.iwatch_band && (selectedDevice[0].displayName === 'Apple Watch Series 5' ? (isIncludesBandYes ? values.iwatch_bands : true) : true) &&
                                        <>
                                            <hr />
                                            <div>
                                                <h4>Is your iWatch Fully Functional</h4>
                                            </div>
                                            <div className="row">
                                                <div className="mt-4 col-md-12" role="group" aria-labelledby="my-radio-group">
                                                    <div className="border col-md-4">
                                                        <div className="float-right">
                                                            <Field className="mt-1" type="radio" onClick={() => {
                                                                setIsWatch_functionalYes(true)
                                                                setIsShowButton(true)
                                                            }
                                                            } name="iwatch_functional" value='Yes' />
                                                        </div>
                                                        <label className="mt-1">
                                                            Yes
                                                        </label>
                                                    </div>
                                                    <div className="border col-md-4">
                                                        <div className="float-right">
                                                            <Field className="mt-1" onClick={() => {
                                                                setIsShowButton(true)
                                                                setIsBrokenOrNo(true)
                                                            }} type="radio" name="iwatch_functional" value='No' />
                                                        </div>
                                                        <label className="mt-1">
                                                            No
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    }

                                    {
                                        values.iwatch_functional && isWatch_functionalYes && values.iwatch_condition && values.iwatch_size && (selectedDevice[0].displayName != 'Apple Watch Series 1' ? (values.iwatch_edition_casing ? true : false) : true) && values.iwatch_band && (selectedDevice[0].displayName === 'Apple Watch Series 5' ? (isIncludesBandYes ? values.iwatch_bands : true) : true) &&
                                        <>
                                            <hr />
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <h4>iWatch Fully Funcational: {values.iwatch_functional}</h4>
                                                </div>
                                                <span className="ml-2 cursor-pointer text-info h6" onClick={(e) => {
                                                    handleChange({
                                                        target: {
                                                            name: "iwatch_functional",
                                                            value: '',
                                                        }
                                                    })
                                                    setOffers()
                                                    setIsShowButton(false)
                                                    setIsBrokenOrNo(false)
                                                }} > / Change Funcationality</span>
                                            </div>
                                        </>
                                    }

                                    {
                                        !isBrokenOrNo && isEmpty(offers) && values.iwatch_functional && isWatch_functionalYes && values.iwatch_condition && values.iwatch_size && values.iwatch_band && (selectedDevice[0].displayName === 'Apple Watch Series 5' ? (isIncludesBandYes ? values.iwatch_bands : true) : true) &&
                                        <>
                                            <hr />
                                            <div>
                                                <h4>Select your Iwatch Accessories included</h4>
                                            </div>

                                            {
                                                isEmpty(offers) &&
                                                <div className="row">
                                                    <div className="mt-4 col-md-12">
                                                        <div className="border col-md-4">
                                                            <div className="float-right">
                                                                <Field className="mt-1" onChange={handleChange} checked={values.iwatch_box} type="checkbox" name="iwatch_box" />
                                                            </div>
                                                            <label className="mt-1">
                                                                Have Oringinal Box
                                                        </label>
                                                        </div>
                                                        <div className="border col-md-4">
                                                            <div className="float-right">
                                                                <Field className="mt-1" onChange={handleChange} type="checkbox" checked={values.iwatch_powercord} name="iwatch_powercord" />
                                                            </div>
                                                            <label className="mt-1">
                                                                Charging Cable and Adaptor
                                                        </label>
                                                        </div>
                                                    </div>
                                                </div>

                                            }
                                        </>
                                    }

                                    {
                                        !isBrokenOrNo && values.iwatch_functional && isWatch_functionalYes && values.iwatch_condition && values.iwatch_size && (selectedDevice[0].displayName != 'Apple Watch Series 1' ? (values.iwatch_edition_casing ? true : false) : true) && values.iwatch_band && !isEmpty(offers) && (selectedDevice[0].displayName === 'Apple Watch Series 5' ? (isIncludesBandYes ? values.iwatch_bands : true) : true) &&
                                        <>
                                            <hr />
                                            <div>
                                                <h4>Accessories Include :</h4>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <h4>Original Box : {values.iwatch_box && "Yes" || "No"} </h4>
                                                </div>

                                                <span className="ml-2 cursor-pointer text-info h6" onClick={(e) => {
                                                    handleChange({
                                                        target: {
                                                            name: "iwatch_box",
                                                            value: '',
                                                        }
                                                    })
                                                    setOffers()
                                                }} > / Change </span>
                                            </div>

                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <h4> Charging Cable and Adaptor : {values.iwatch_powercord && "Yes" || "No"}</h4>
                                                </div>
                                                <span className="ml-2 cursor-pointer text-info h6" onClick={(e) => {
                                                    handleChange({
                                                        target: {
                                                            name: "iwatch_powercord",
                                                            value: '',
                                                        }
                                                    })
                                                    setOffers()
                                                }} > / Change </span>
                                            </div>
                                        </>
                                    }
                                </div>
                            }

                            {
                                isEmpty(offers) && !isBrokenFiled && !isBrokenOrNo && (values.iwatch_condition === 'Brand New' || isShowButton || (values.iwatch_functional && isWatch_functionalYes && (selectedDevice[0].displayName != 'Apple Watch Series 1' ? (values.iwatch_edition_casing ? true : false) : true) && values.iwatch_condition && values.iwatch_size && values.iwatch_band)) && (selectedDevice[0].displayName === 'Apple Watch Series 5' ? (isIncludesBandYes ? values.iwatch_bands : true) : true) &&
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
                                            <Button variant="outline-primary" className="w-100" onClick={() => addCart({
                                                iwatch_band: values.iwatch_bands,
                                                iwatch_box: values.iwatch_box,
                                                iwatch_carrier: values.iwatch_carrier,
                                                iwatch_condition: values.iwatch_condition,
                                                iwatch_edition_casing: values.iwatch_edition_casing,
                                                iwatch_functional: values.iwatch_functional,
                                                iwatch_model: selectedDevice[0].label,
                                                iwatch_powercord: values.iwatch_powercord,
                                                iwatch_size: values.iwatch_size,
                                                offer: 0,
                                                id: selectedDevice[0].label
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

export default IWatch
