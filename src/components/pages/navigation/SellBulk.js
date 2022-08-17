import React from "react";
import { ErrorMessage, Field, FieldArray, Form, Formik, isEmptyArray } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
import Recaptcha from 'react-recaptcha';

import { phoneRegex } from "../../../validation/validation";
import { addInquerer } from "../../../services/sellBulkService";
import { isEmpty } from "../../../validation/index";
import HowItWorks from '../../HowItWorks/HowItWorks'

const defaultsDevice = {
  deviceType: "",
  deviceCondition: "",
  deviceQuantity: "",
};

const SellBulk = (props) => {

  const handleSubmit = (value) => {
    const obj = {
      devices: value.devices,
      email: value.email,
      firstName: value.firstName,
      lastName: value.lastName,
      companyOrganization: value.companyOrganization,
      phoneNumber: value.phoneNumber,
      additionalInformation: value.additionalInformation,
    }
    addInquerer(obj).then((res) => {
      if (!isEmpty(res.data)) {
        props.history.push('/sellBulk-thank-you');
      }
    }).catch((err) => {
      console.log(err);
    })
  }

  const sellBulkSchema = Yup.object().shape({
    firstName: Yup.string()
      .required('Please input your first name!'),
    email: Yup.string()
      .email('Invalid email')
      .required('Please input your email!'),
    companyOrganization: Yup.string()
      .optional(),
    lastName: Yup.string()
      .required('Please input your last name!'),
    phoneNumber: Yup.string()
      .matches(phoneRegex, 'Phone number must be 10 digit.')
      .optional(),
    additionalInformation: Yup.string()
      .optional(),

    devices: Yup.array()
      .of(
        Yup.object().shape({
          deviceType: Yup.string()
            .required('Required'),
          deviceCondition: Yup.string()
            .required('Required'),
          deviceQuantity: Yup.string()
            .required('Required'),
        })
      )
      .min(1, 'Minimum of 1 Device')
      .required('Required')
  })

  const initialValues = {
    devices: [defaultsDevice],
    firstName: '',
    email: '',
    lastName: '',
    companyOrganization: '',
    phoneNumber: '',
    additionalInformation: '',
    captcha: "",
  }

  return (
    <div className="container" >
      <div className="text-center">
        <h1 className="text-primary">Does your business have 10 or more devices to sell?</h1>
        <h4>Quickly and conveniently sell your phones, tablets, MacBooks and iMacs in bulk</h4>
      </div>
      <div className="mt-5">
        <h3 className="text-center">YOUR CONTACT INFORMATION</h3>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={sellBulkSchema}
          render={({ values, setFieldValue }) => (
            <Form>
              <FieldArray
                name="devices"
                render={arrayHelpers => (
                  <div>
                    <div className="row mt-5">
                      <div className="col-md-6">
                        <div className="row">
                          <label className="col-md-12 mt-2">
                            First Name:
                       </label>
                          <div className="col-md-12">
                            <Field className="form-control" type="text" name="firstName" />
                            <ErrorMessage name="firstName" className="text-danger" component="div" />
                          </div>
                        </div>
                        <div className="row">
                          <label className="col-md-12 mt-2">
                            Email:
                         </label>
                          <div className="col-md-12">
                            <Field className="form-control" type="text" name="email" />
                            <ErrorMessage name="email" className="text-danger" component="div" />
                          </div>
                        </div>
                        <div className="row">
                          <label className="col-md-12 mt-2">
                            Company/Organization (optional):
                          </label>
                          <div className="col-md-12">
                            <Field className="form-control" type="text" name="companyOrganization" />
                            <ErrorMessage name="companyOrganization" className="text-danger" component="div" />
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="row">
                          <label className="col-md-12 mt-2">
                            Last Name (optional):
                          </label>
                          <div className="col-md-12">
                            <Field className="form-control" type="text" name="lastName" />
                            <ErrorMessage name="lastName" className="text-danger" component="div" />
                          </div>
                        </div>
                        <div className="row">
                          <label className="col-md-12 mt-2">
                            Phone Number (optional):
                          </label>
                          <div className="col-md-12">
                            <Field className="form-control" type="text" name="phoneNumber" />
                            <ErrorMessage name="phoneNumber" className="text-danger" component="div" />
                          </div>
                        </div>
                        <div className="row">
                          <label className="col-md-12 mt-2">
                            Additional Information (optional):
                          </label>
                          <div className="col-md-12">
                            <Field className="form-control" type="text" name="additionalInformation" />
                            <ErrorMessage name="additionalInformation" className="text-danger" component="div" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 text-center mt-4">
                      <h5>WHAT DO YOU HAVE TO SELL?(optional)</h5>
                    </div>
                    {values.devices && values.devices.length > 0 && (
                      values.devices.map((devices, index) => (
                        <div className="col-md-12" key={index}>
                          <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-3">
                              <label className="mt-2">
                                DeviceType:
                             </label>
                              <div>
                                <Field component="select" name={`devices[${index}].deviceType`} className="form-control">
                                  <option selected='true'>Choose a device type ...</option>
                                  <option value="1">iPhone</option>
                                  <option value="2">iPad</option>
                                  <option value="3">Mac</option>
                                </Field>
                                <ErrorMessage name={`devices[${index}].deviceType`} className="text-danger" component="div" />
                              </div>
                            </div>

                            <div className="col-md-3">
                              <label className="mt-2">
                                Condition:
                              </label>
                              <div>
                                <Field component="select" name={`devices.${index}.deviceCondition`} className="form-control">
                                  <option value="" disabled>Choose a condition ...</option>
                                  <option value="1">Good</option>
                                  <option value="2">Broken</option>
                                </Field>
                                <ErrorMessage name={`devices.${index}.deviceCondition`} className="text-danger" component="div" />
                              </div>
                            </div>

                            <div className="col-md-3">
                              <label className="mt-2">
                                Quantity:
                              </label>
                              <div>
                                <Field className="form-control" type="text" name={`devices[${index}].deviceQuantity`} />
                                <ErrorMessage name={`devices[${index}].deviceQuantity`} className="text-danger" component="div" />
                              </div>
                            </div>

                            <div className="col-md-1 d-flex align-items-flex-end">
                              {
                                index !== 0 &&
                                <span onClick={() => arrayHelpers.remove(index)} className="mt-2 text-danger"> <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-dash-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                  <path fill-rule="evenodd" d="M3.5 8a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5z" />
                                </svg></span>
                              }
                            </div>
                            <div className="col-md-1"></div>
                          </div>
                        </div>
                      ))
                    ) || null}
                    <div className="col-md-12 mt-3">
                      <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                          <button type="button" onClick={() => arrayHelpers.push(defaultsDevice)} className="btn btn-outline-info"> Add more devices</button>
                        </div>
                        <div className="col-md-1"></div>
                      </div>
                    </div>

                    <div className="col-md-12 mt-3">
                      <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                         {/* <Recaptcha
                            name="captcha"
                            sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                            render="explicit"
                            verifyCallback={(response) => {
                              setFieldValue('captcha', response)
                            }}
                          />
                          <ErrorMessage name="captcha" className="text-danger" component="div" />***/}
                        </div>
                        <div className="col-md-1"></div>
                      </div>
                    </div>

                    <div className="col-md-12 mt-5">
                      <div className="d-flex justify-content-center">
                        <button type="submit" className="px-5 btn btn-outline-primary btn-lg">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              />
            </Form>
          )}
        />
      </div>
      <div className="mt-5">
      <HowItWorks></HowItWorks>
      </div>
    </div >
  )
}

export default SellBulk
