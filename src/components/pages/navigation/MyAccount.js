import { connect, ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import React, { useEffect, useState } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import * as Yup from 'yup';
import Collapse from 'react-bootstrap/Collapse'
import Skeleton from 'react-loading-skeleton';
import moment from 'moment'
import swal from 'sweetalert';

import { getProfileAddressDetails, getProfileDetails, insertProfileAddressInfo, insertContactInfo, addProfileAddressDetails, updateContactInfo, deleteAddressData, updateChangePassword, updateProfileAddressDetails, updateProfileDetails, updateProfileAddressInfo, UserTradeInfo, getProfileSecondaryEmailDetails, deleteContactDetail } from "../../../services/myAccountService";
import Stepper from '../../Stepper/index';
import { isEmpty } from "../../../validation/index";
import { passwordRegex, phoneRegex } from "../../../validation/validation";


const MyAccount = (props) => {
  const locationState = props.location && props.location.state || null;
  const [key, setKey] = useState('myProfile');
  const [userInfo, setUserInfo] = useState(null);

  return (
    <>
      <div className="row">
        {
          locationState && locationState.message && (
            <div className="col-md-8 mt-2">
              <div className="col-md-8 p-2 bg-lightgreen">
                {locationState.message}
              </div>
            </div>
          )
        }

        <div className="col-md-12 mt-2">
          <div className="col-md-12">
            Welcome to your cash my devices Account!
          </div>
        </div>

        <div className="col-md-12 mt-4">
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
          >
            <Tab eventKey="myProfile" title="My Profile">
              <MyProfile setUserInfo={setUserInfo} />
            </Tab>

            {userInfo && <Tab eventKey="myOrderTrade" title="My Order/Trade">
              <MyOrderTrade userInfo={userInfo} />
            </Tab> || null}

            <Tab eventKey="myRewards" title="My Rewards">
              <MyRewards />
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  )
}
export default MyAccount

const defaultAddress = {
  addressLine1: '',
  addressLine2: '',
  city: '',
  state: '',
  zipcode: '',
  primaryAddress: '',
  addressType: '',
  id: ''
}

const defaultUserName = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  pk: ''
}

const defaultContactNumber = {
  contactnumber: '',
}

const defaultSecondaryEmail = {
  secondaryemail: ''
}


const defaultPassword = {
  newPassword: '',
  confirmPassword: ''
}

const MyProfile = ({ setUserInfo }) => {
  const [isPassword, setIsPassword] = useState(false)
  const [isFirstName, setIsFirstName] = useState(false)
  const [isLastName, setIsLastName] = useState(false)
  const [changePasswordMessage, setChangePasswordMessage] = useState()

  const [userName, setUserName] = useState(defaultUserName)
  const [password, setPassword] = useState(defaultPassword)
  const [open, setOpen] = useState(false);

  const [contact, setContact] = useState(defaultContactNumber)
  const [secondaryEmail, setSecondaryEmail] = useState(defaultSecondaryEmail)

  const [isContactInfoEdit, setContactInfoEdit] = useState(false)
  const [isSecondaryEmailEdit, setIsSecondaryEmailEdit] = useState(false)

  const [address, setAddress] = useState()
  const [staticAddress, setStaticAddress] = useState(defaultAddress)
  const [isAddAddress, setIsAddAddress] = useState(false)
  const [isEditAddressByIndex, setIsEditAddressByIndex] = useState(null)
  const [isAddAnotherAddress, setIsAddAnotherAddress] = useState(false)
  const [isLoaderFirstName, setIsLoaderFirstName] = useState(false)
  const [isLoaderLastName, setIsLoaderLastName] = useState(false)
  const [isLoaderPassword, setIsLoaderPassword] = useState(false)
  const [isLoaderSecondaryEmail, setIsLoaderSecondaryEmail] = useState(false)
  const [isLoaderPhoneNumber, setIsLoaderPhoneNumber] = useState(false)
  const [isLoaderAddAddress, setIsLoaderAddAddress] = useState(false)
  const [isLoaderAddress, setIsLoaderAddress] = useState(false)


  useEffect(() => {
    getProfileData();
  }, []);

  const getProfileData = () => {
    getProfileDetails().then(
      (res) => {
        if (!isEmpty(res.data)) {
          setUserInfo(res.data);
          setUserName({
            firstName: res.data.first_name,
            lastName: res.data.last_name,
            username: res.data.username,
            email: res.data.email,
            pk: res.data.pk
          })
          getProfileAddress(res.data.pk);
          getProfileSecondaryEmail(res.data.pk)
        }
      }
    ).catch(err => {
      console.log(err);
    })
  }

  const getProfileSecondaryEmail = (id) => {
    getProfileSecondaryEmailDetails(id).then(res => {
      if (!isEmpty(res.data.results.length > 0)) {
        if (res.data.results[0].phoneNumber) {
          setContact({
            contactnumber: res.data.results[0].phoneNumber,
            id: res.data.results[0].id
          });
          setContactInfoEdit(false);
        } else {
          setContactInfoEdit(true);
          setContact(defaultContactNumber);
        }

        if (res.data.results[0].secondary_email) {
          setSecondaryEmail({
            secondaryemail: res.data.results[0].secondary_email,
            id: res.data.results[0].id
          });
          setIsSecondaryEmailEdit(false);
        } else {
          setIsSecondaryEmailEdit(true)
          setSecondaryEmail(defaultSecondaryEmail);
        }
      }
    }).catch(err => {
      setContactInfoEdit(true);
      setContact(defaultContactNumber);
      setIsSecondaryEmailEdit(true)
      setSecondaryEmail(defaultSecondaryEmail);
      console.log(err);
    })
  }

  const getProfileAddress = (id) => {
    getProfileAddressDetails(id).then(res => {
      if (!isEmpty(res.data.results)) {
        setIsAddAddress(true)
        setAddress(res.data.results)
      } else {
        setIsAddAddress(false)
      }
    }).catch(err => {
      console.log(err);
    })
  }

  const changeFirstNameHandleSubmit = (value) => {
    setIsLoaderFirstName(true)
    const obj = {
      first_name: value.firstName,
      username: userName.username,
      email: userName.email
    }
    updateProfileDetails(obj).then(
      (res) => {
        if (!isEmpty(res.data)) {
          setUserName(
            {
              ...userName,
              firstName: value.firstName
            })
          setIsFirstName(false)
          setIsLoaderFirstName(false)
        }
      }
    ).catch(err => {
      setIsLoaderFirstName(false)
      console.log(err);
    })
  }

  const deleteFirstName = () => {
    swal({
      title: "Are you sure?",
      text: "Want to deleted your first name",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          setIsLoaderFirstName(true)
          const obj = {
            first_name: '',
            username: userName.username,
            email: userName.email
          }
          updateProfileDetails(obj).then(
            (res) => {
              if (!isEmpty(res.data)) {
                setUserName(
                  {
                    ...userName,
                    firstName: ''
                  })
                setIsFirstName(false)
                setIsLoaderFirstName(false)
              }
            }
          ).catch(err => {
            setIsLoaderFirstName(false)
            console.log(err);
          })
        }
      });
  }

  const deleteLastName = () => {
    swal({
      title: "Are you sure?",
      text: "Want to deleted your last name",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          setIsLoaderLastName(true)
          const obj = {
            last_name: '',
            username: userName.username,
            email: userName.email
          }
          updateProfileDetails(obj).then(
            (res) => {
              if (!isEmpty(res.data)) {
                setUserName({
                  ...userName,
                  lastName: ''
                })
                setIsLastName(false)
                setIsLoaderLastName(false)
              }
            }
          ).catch(err => {
            console.log(err);
            setIsLoaderLastName(false)
          })
        }
      });
  }

  const changeLastNameHandleSubmit = (value) => {
    setIsLoaderLastName(true)
    const obj = {
      last_name: value.lastName,
      username: userName.username,
      email: userName.email
    }
    updateProfileDetails(obj).then(
      (res) => {
        if (!isEmpty(res.data)) {
          setUserName({
            ...userName,
            lastName: value.lastName
          })
          setIsLastName(false)
          setIsLoaderLastName(false)
        }
      }
    ).catch(err => {
      console.log(err);
      setIsLoaderLastName(false)
    })
  }

  const changePasswordHandleSubmit = (value) => {
    setIsLoaderPassword(true)
    const obj = {
      new_password1: value.newPassword,
      new_password2: value.confirmPassword
    }
    updateChangePassword(obj).then(
      (res) => {
        if (!isEmpty(res.data)) {
          setIsPassword(false)
          setChangePasswordMessage(res.data.detail)
          setTimeout(() => {
            setIsLoaderPassword(false)
          }, 1000);
        }
      }
    ).catch(err => {
      console.log(err);
      setIsLoaderPassword(false)
    })
  }

  const changeAddressHandleSubmit = async (value) => {
    setIsLoaderAddress(true)
    if (value.primaryAddress === true) {
      for (var i in address) {
        await primaryAddress(i, address, value)
      }
    }
    updateProfileAddressInfo(value).then((res) => {
      setTimeout(() => {
        setIsLoaderAddress(false)
        setIsEditAddressByIndex(null)
      }, 1000);
      getProfileData();
    })
  }

  const primaryAddress = async (index, address, value) => {
    if (address[index].id != value.id && address[index].primaryAddress === true) {
      const data = { ...address[index], primaryAddress: false }
      await updateProfileAddressInfo(data).then((res) => {
      })
    }
  }

  const addAddressHandleSubmit = async (value) => {
    setIsLoaderAddAddress(true)
    if (value.primaryAddress === true) {
      for (var i in address) {
        const data = { ...address[i], primaryAddress: false }
        await updateProfileAddressInfo(data).then((res) => {
        })
      }
    }
    insertProfileAddressInfo(value).then((res) => {
      getProfileData();
      setIsAddAnotherAddress(false)
      setTimeout(() => {
        setIsLoaderAddAddress(false)
      }, 1000);
    })
  }

  const changePassword = () => {
    setIsPassword(true);
    setChangePasswordMessage(false);
  }

  const editAddressByIndex = (index) => {
    setIsEditAddressByIndex(index)
  }

  const addAddress = () => {
    setIsAddAddress(true)
    if (!address) {
      setIsAddAnotherAddress(true)
    }
  }

  const changeSecondaryEmailHandleSubmit = (value) => {
    setIsLoaderSecondaryEmail(true)
    if (!secondaryEmail.secondaryemail && !secondaryEmail.id) {
      insertContactInfo({
        secondary_email: value.secondaryEmail,
        phoneNumber: contact.contactnumber ? contact.contactnumber : ''
      }).then(async () => {
        getProfileData();
        setTimeout(() => {
          setIsLoaderSecondaryEmail(false);
        }, 1000);
      })
    } else {
      const id = secondaryEmail.id
      updateContactInfo({
        secondary_email: value.secondaryEmail,
        phoneNumber: contact.contactnumber ? contact.contactnumber : ''
      }, id).then(async () => {
        getProfileData();
        setTimeout(() => {
          setIsLoaderSecondaryEmail(false);
        }, 1000);
      })
    }
  }

  const changePhoneNumberHandleSubmit = (value) => {
    setIsLoaderPhoneNumber(true)
    if (!contact.contactnumber && !contact.id) {
      insertContactInfo({
        phoneNumber: value.phoneNumber,
        secondary_email: secondaryEmail.secondaryemail ? secondaryEmail.secondaryemail : ''
      }).then(async () => {
        getProfileData();
        setTimeout(() => {
          setIsLoaderPhoneNumber(false);
        }, 1000);
      })
    } else {
      const id = contact.id
      updateContactInfo({
        phoneNumber: value.phoneNumber,
        secondary_email: secondaryEmail.secondaryemail ? secondaryEmail.secondaryemail : ''
      }, id).then(async () => {
        getProfileData();
        setTimeout(() => {
          setIsLoaderPhoneNumber(false);
        }, 1000);
      })
    }
  }

  const deleteContactInfo = () => {
    swal({
      title: "Are you sure?",
      text: "Want to deleted",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          const id = contact.id
          updateContactInfo({
            phoneNumber: '',
            secondary_email: secondaryEmail.secondaryemail ? secondaryEmail.secondaryemail : ''
          }, id).then(async () => {
            getProfileData();
          })
        }
      });
  }

  const deleteSecondaryEmail = () => {
    swal({
      title: "Are you sure?",
      text: "Want to deleted",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          const id = contact.id
          updateContactInfo({
            phoneNumber: contact.contactnumber ? contact.contactnumber : '',
            secondary_email: ''
          }, id).then(async () => {
            getProfileData();
          })
        }
      });
  }

  const deleteAddressByIndex = (item) => {
    swal({
      title: "Are you sure?",
      text: "Want to deleted address",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          deleteAddressData(item.id).then(
            (res) => {
              setAddress();
              getProfileData();
            }
          ).catch(err => {
            console.log(err);
          })
        }
      });
  }

  const changeFirstNameSchema = Yup.object().shape({
    firstName: Yup.string()
      .required('Please input your new first name!'),
  });

  const changeLastNameSchema = Yup.object().shape({
    lastName: Yup.string()
      .required('Please input your last name!')
  });

  const changePasswordSchema = Yup.object().shape({
    newPassword: Yup.string()
      .required('Please input your new Password!')
      .matches(passwordRegex, "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    confirmPassword: Yup.string()
      .required('Please input your confirm Password!')
      .oneOf([Yup.ref('newPassword'), null], 'New Password do not match'),
  });

  const changeAddressSchema = Yup.object().shape({
    addressType: Yup.string()
      .required('Please input your title!'),
    addressLine1: Yup.string()
      .required('Please input your addressLine1!'),
    addressLine2: Yup.string()
      .required('Please input your addressLine2!'),
    city: Yup.string()
      .required('Please input your city!'),
    state: Yup.string()
      .required('Please input your state!'),
    zipcode: Yup.string()
      .required('Please input your zip code!'),
  });

  const changeSecondaryEmailSchema = Yup.object().shape({
    secondaryEmail: Yup.string()
      .email('Please enter valid secondary email!')
      .required('Secondary email required')
  });

  const changePhoneNumberSchema = Yup.object().shape({
    phoneNumber: Yup.string()
      .matches(phoneRegex, "Please enter valid contact number")
      .required('Contact number is required'),
  });

  return (
    <div className="mt-4">
      <div className="row">
        <div className="col-md-12">
          <label className="col-md-10 mt-2">
            User Name :
              <span className="ml-2">
              {userName.username}
            </span>
          </label>
        </div>
        <div className="col-md-12">
          <label className="col-md-10 mt-2">
            Email :
            <span className="ml-2">
              {userName.email}
            </span>
          </label>
        </div>

        {
          isLoaderFirstName &&
          <div className="col-md-6 ml-4">
            <Skeleton count={1} duration={2} height={45} />
          </div>
        }

        {
          !isLoaderFirstName && !userName.firstName && !isFirstName &&
          <div className="col-md-12 ml-2">
            <button type="button" onClick={() => {
              setIsFirstName(true)
            }} class="btn btn-link">Add First Name </button>
          </div>
        }


        {
          !isFirstName && !isLoaderFirstName && userName.firstName &&
          <>
            <div className="col-md-12">
              <label className="col-md-10 mt-2 d-flex">
                First Name :
                  <span className="ml-2">
                  {userName.firstName}
                </span>
                <label className="text-info ml-2 cursor-pointer" onClick={() => setIsFirstName(true)}>
                  Edit
               </label>
                <span className="ml-2">/</span>
                <label className="text-info ml-2 cursor-pointer" onClick={deleteFirstName}>
                  Delete
               </label>
              </label>
            </div>
          </>
        }

        {
          isFirstName && !isLoaderFirstName &&
          <Formik
            initialValues={userName}
            onSubmit={changeFirstNameHandleSubmit}
            validationSchema={changeFirstNameSchema}
          >
            <Form>
              <div className="col-md-12">
                <div className="row mb-4">
                  <div className="col-md-12">
                    <label className="col-md-10 mt-2">
                      <h5>{userName.firstName && 'Change Your First Name' || 'Add Your First Name'} </h5>
                    </label>
                  </div>

                  <div className="col-md-12">
                    <label className="col-md-12 mt-2">
                      First Name :
                    </label>
                    <div className="col-md-6">
                      <Field className="form-control" type="text" name="firstName" />
                      <ErrorMessage name="firstName" className="text-danger" component="div" />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="col-md-10 pt-3">
                      <button type="submit" className="btn btn-info mr-2">
                        {userName.firstName && 'Update' || 'Save'}
                      </button>
                      <button type="button" className="btn btn-secondary mr-2" onClick={() => setIsFirstName(false)}>
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          </Formik>
        }

        {
          isLoaderLastName &&
          <div className="col-md-6 ml-4">
            <Skeleton count={1} duration={2} height={45} />
          </div>
        }

        {
          !isLoaderFirstName && !userName.lastName && !isLastName &&
          <div className="col-md-12 ml-2">
            <button type="button" onClick={() => {
              setIsLastName(true)
            }} class="btn btn-link">Add Last Name </button>
          </div>
        }

        {
          !isLastName && !isLoaderLastName && userName.lastName &&
          <>
            <div className="col-md-12">
              <label className="col-md-10 mt-2 d-flex">
                Last Name :
                  <span className="ml-2">
                  {userName.lastName}
                </span>
                <label className="text-info ml-2 cursor-pointer" onClick={() => setIsLastName(true)}>
                  Edit
               </label>
                <span className="ml-2">/</span>
                <label className="text-info ml-2 cursor-pointer" onClick={deleteLastName}>
                  Delete
               </label>
              </label>
            </div>
          </>
        }
        {
          isLastName && !isLoaderLastName &&
          <Formik
            initialValues={userName}
            onSubmit={changeLastNameHandleSubmit}
            validationSchema={changeLastNameSchema}
          >
            <Form>
              <div className="col-md-12">
                <div className="row mb-4">
                  <div className="col-md-12">
                    <label className="col-md-10 mt-2">
                      <h5>{userName.lastName && 'Change Your Last Name' || 'Add Your Last Name'} </h5>
                    </label>
                  </div>

                  <div className="col-md-12">
                    <label className="col-md-12 mt-2">
                      Last Name :
                    </label>
                    <div className="col-md-6">
                      <Field className="form-control" type="text" name="lastName" />
                      <ErrorMessage name="lastName" className="text-danger" component="div" />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="col-md-10 pt-3">
                      <button type="submit" className="btn btn-info mr-2">
                        {userName.lastName && 'Update' || 'Save'}
                      </button>
                      <button type="button" className="btn btn-secondary mr-2" onClick={() => setIsLastName(false)}>
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          </Formik>
        }

        {
          isLoaderPassword &&
          <div className="col-md-6 ml-4 mb-3">
            <Skeleton count={1} duration={2} height={85} />
          </div>
        }


        {
          !isPassword && !isLoaderPassword &&
          <div className="col-md-12">
            <label className="col-md-10 mt-2 text-info cursor-pointer" onClick={() => changePassword()}>
              Change Password
              </label>
          </div>
        }
        {changePasswordMessage && !isLoaderPassword &&
          <div className="col-md-8 ml-4 mb-3 mt-2">
            <div className="col-md-8 p-2 bg-lightgreen">
              {changePasswordMessage}
            </div>
          </div>
        }

        {
          isPassword && !isLoaderPassword &&
          <Formik
            initialValues={password}
            onSubmit={changePasswordHandleSubmit}
            validationSchema={changePasswordSchema}
          >
            <Form>
              <div className="col-md-12">
                <div className="row mb-4">
                  <div className="col-md-12">
                    <label className="col-md-10 mt-2">
                      <h5>Change Your Password </h5>
                    </label>
                  </div>

                  <div className="col-md-12">
                    <label className="col-md-12 mt-2">
                      New Password :
                   </label>
                    <div className="col-md-6">
                      <Field className="form-control" type="password" name="newPassword" />
                      <ErrorMessage name="newPassword" className="text-danger" component="div" />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <label className="col-md-10 mt-2">
                      Confirm New Password:
                   </label>
                    <div className="col-md-6">
                      <Field className="form-control" type="password" name="confirmPassword" />
                      <ErrorMessage name="confirmPassword" className="text-danger" component="div" />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="col-md-10 pt-3">
                      <button type="submit" className="btn btn-info mr-2">
                        Update
                    </button>
                      <button type="button" className="btn btn-secondary mr-2" onClick={() => setIsPassword(false)}>
                        Cancel
                    </button>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          </Formik>
        }

        <div className="col-md-10 ml-5 border d-flex justify-content-between" onClick={() => setOpen(!open)} >
          <label className="p-2">
            Add contact info
         </label>
          <label className="p-2">
            {open &&
              <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M3.544 6.295A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0l-4-4.5a.5.5 0 0 1-.082-.537z" />
                <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
              </svg>
            }

            {
              !open &&
              <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-up-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                <path fill-rule="evenodd" d="M3.544 10.705A.5.5 0 0 0 4 11h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5a.5.5 0 0 0-.082.537z" />
              </svg>
            }
          </label>
        </div>
        <div className={`col-md-10 ml-5 ${open ? 'border mt-1' : ''} `}>
          <Collapse in={open} >
            <div id="example-fade-text">

              {isLoaderPhoneNumber &&
                <Skeleton count={1} duration={2} height={68} />
              }

              {!isContactInfoEdit && !isLoaderPhoneNumber &&
                <>
                  <div>
                    <label className="col-md-10 mt-3 p-1">
                      Phone Number (optional) :<span>{contact.contactnumber}</span>
                    </label>
                  </div>
                </>
              }

              {isContactInfoEdit && !isLoaderPhoneNumber &&
                <Formik
                  initialValues={{ phoneNumber: contact.contactnumber }}
                  onSubmit={changePhoneNumberHandleSubmit}
                  validationSchema={changePhoneNumberSchema}
                  render={({ values }) => (
                    <Form className="w-100">
                      <>
                        <div>
                          <label className="col-md-10 mt-3 p-1">
                            Phone Number (optional) :
                          </label>

                          <div className="col-md-6 p-1">
                            <Field className="form-control" type="text" name="phoneNumber" />
                            <ErrorMessage name="phoneNumber" className="text-danger" component="div" />
                          </div>
                        </div>

                        <div className="mt-1">
                          <button type="submit" className="btn btn-info mr-2">
                            Save
                             </button>
                          <button type="reset" className="btn btn-secondary mr-2" >
                            Reset
                             </button>
                          {
                            contact.contactnumber &&
                            <button type="button" className="btn btn-secondary mr-2" onClick={() => setContactInfoEdit(false)} >
                              Cancel
                             </button>
                          }
                        </div>
                      </>
                    </Form>
                  )}
                />
              }

              {
                !isContactInfoEdit && !isLoaderPhoneNumber &&
                <>
                  <button type="submit" className="btn btn-info mr-2" onClick={() => setContactInfoEdit(true)}>
                    Edit  Phone Number
                  </button>
                  <button className="btn btn-primary mr-2" onClick={deleteContactInfo}>
                    Delete Phone Number
                  </button>
                </>
              }

              {isLoaderSecondaryEmail &&
                <Skeleton count={1} duration={2} height={68} />
              }

              {!isSecondaryEmailEdit && !isLoaderSecondaryEmail &&
                <>
                  <div>
                    <label className="col-md-10 mt-2 p-1">
                      Secondary Email (optional) :<span>{secondaryEmail.secondaryemail}</span>
                    </label>
                  </div>
                </>
              }

              {isSecondaryEmailEdit && !isLoaderSecondaryEmail &&
                <Formik
                  initialValues={{ secondaryEmail: secondaryEmail.secondaryemail }}
                  onSubmit={changeSecondaryEmailHandleSubmit}
                  validationSchema={changeSecondaryEmailSchema}
                  render={({ values }) => (
                    <Form className="w-100">
                      <>
                        <div>
                          <label className="col-md-10 mt-2 p-1">
                            Secondary Email (optional) :
                              </label>
                          <div className="col-md-6 p-1">
                            <Field className="form-control" type="text" name="secondaryEmail" />
                            <ErrorMessage name="secondaryEmail" className="text-danger" component="div" />
                          </div>

                        </div>

                        <div className="mt-1">
                          <button type="submit" className="btn btn-info mr-2">
                            Save
                             </button>
                          <button type="reset" className="btn btn-secondary mr-2" >
                            Reset
                             </button>
                          {
                            secondaryEmail.secondaryemail &&
                            <button type="button" className="btn btn-secondary mr-2" onClick={() => setIsSecondaryEmailEdit(false)} >
                              Cancel
                            </button>
                          }
                        </div>
                      </>
                    </Form>
                  )}
                />
              }

              {
                !isSecondaryEmailEdit && !isLoaderSecondaryEmail &&
                <>
                  <button type="submit" className="btn btn-info mr-2" onClick={() => setIsSecondaryEmailEdit(true)}>
                    Edit Secondary Email
                  </button>
                  <button className="btn btn-primary mr-2" onClick={deleteSecondaryEmail}>
                    Delete Secondary Email
                  </button>
                </>
              }

              {
                !isAddAddress &&
                <div className="mt-4 mb-3">
                  <button type="submit" className="btn btn-primary mr-2" onClick={() => addAddress()}>
                    Add Address
                 </button>
                </div>
              }
              {
                isAddAddress && <>
                  {address && address.length > 0 &&
                    address.map((item, index) => (
                      <>
                        {
                          isLoaderAddress && isEditAddressByIndex === index &&
                          <Skeleton count={6} duration={2} height={68} />
                        }

                        {isEditAddressByIndex !== index && (isLoaderAddress && isEditAddressByIndex === index ? false : true) &&
                          <>
                            <div className="mt-4" >
                              <label className="ml-1">
                                <h5>
                                  Address {index + 1}
                                </h5>
                              </label>
                            </div>

                            {item.primaryAddress &&
                              <div className="mt-1" >
                                <label className="ml-1">
                                  <h6>
                                    Primary Address
                                </h6>
                                </label>
                              </div>
                            }

                            <div>
                              <label className="col-md-10 mt-1 p-1">
                                Title  : <span>{item.addressType}</span>
                              </label>
                            </div>

                            <div>
                              <label className="col-md-10 mt-3 p-1">
                                Address1 :  <span>{item.addressLine1}</span>
                              </label>
                            </div>

                            <div>
                              <label className="col-md-10 mt-3 p-1">
                                Address2 :   <span>{item.addressLine2}</span>
                              </label>
                            </div>

                            <div>
                              <label className="col-md-10 mt-3 p-1">
                                City  :   <span>{item.city}</span>
                              </label>
                            </div>

                            <div>
                              <label className="col-md-10 mt-3 p-1">
                                State   :  <span>{item.state}</span>
                              </label>
                            </div>

                            <div>
                              <label className="col-md-10 mt-3 p-1">
                                Zip Code : <span>{item.zipcode}</span>
                              </label>
                            </div>

                            <div>
                              <button type="submit" className="btn btn-info mr-2" onClick={() => {
                                setIsAddAnotherAddress(false)
                                editAddressByIndex(index)
                              }}>
                                Edit Address
                              </button>
                              <button type="submit" className="btn btn-primary mr-2" onClick={() => deleteAddressByIndex(item)}>
                                Delete Address
                              </button>
                            </div>
                          </>
                        }

                        {isEditAddressByIndex === index && (isLoaderAddress && isEditAddressByIndex === index ? false : true) &&
                          <Formik
                            initialValues={item}
                            onSubmit={changeAddressHandleSubmit}
                            validationSchema={changeAddressSchema}
                            render={({ values }) => (
                              <Form>
                                <div>
                                  <label className="col-md-10 mt-3 p-1">
                                    Title  :
                                  </label>
                                  <div className="col-md-6 p-1">
                                    <Field className="form-control" type="text" name="addressType" />
                                    <ErrorMessage name="addressType" className="text-danger" component="div" />
                                  </div>
                                </div>

                                <div>
                                  <label className="col-md-10 mt-2 p-1">
                                    Address1 :
                                  </label>
                                  <div className="col-md-6 p-1">
                                    <Field className="form-control" type="text" name="addressLine1" />
                                    <ErrorMessage name="addressLine1" className="text-danger" component="div" />
                                  </div>
                                </div>

                                <div>
                                  <label className="col-md-10 mt-2 p-1">
                                    Address2 :
                                  </label>
                                  <div className="col-md-6 p-1">
                                    <Field className="form-control" type="text" name="addressLine2" />
                                    <ErrorMessage name="addressLine2" className="text-danger" component="div" />
                                  </div>
                                </div>

                                <div>
                                  <label className="col-md-10 mt-2 p-1">
                                    City  :
                                  </label>
                                  <div className="col-md-6 p-1">
                                    <Field className="form-control" type="text" name="city" />
                                    <ErrorMessage name="city" className="text-danger" component="div" />
                                  </div>
                                </div>

                                <div>
                                  <label className="col-md-10 mt-2 p-1">
                                    State  :
                                  </label>
                                  <div className="col-md-6 p-1">
                                    <Field className="form-control" type="text" name="state" />
                                    <ErrorMessage name="state" className="text-danger" component="div" />
                                  </div>
                                </div>

                                <div>
                                  <label className="col-md-10 mt-2 p-1">
                                    Zip Code :
                                   </label>
                                  <div className="col-md-6 p-1">
                                    <Field className="form-control" type="text" name="zipcode" />
                                    <ErrorMessage name="zipcode" className="text-danger" component="div" />
                                  </div>
                                </div>

                                <div>
                                  <label className="col-md-10 mt-2 p-1">
                                    Primary Address :
                                  <Field className="ml-2" type="checkbox" name="primaryAddress" />
                                  </label>

                                </div>

                                <div className="mt-2">
                                  <button type="submit" className="btn btn-dark mr-2">
                                    Save Address
                                  </button>
                                  <button type="reset" className="btn btn-dark mr-2" >
                                    Reset
                                  </button>
                                  <button className="btn btn-dark mr-2" onClick={() => setIsEditAddressByIndex()}>
                                    Cancel
                                  </button>
                                </div>
                              </Form>
                            )}
                          />
                        }
                      </>
                    ))}

                  <Formik
                    initialValues={staticAddress}
                    onSubmit={addAddressHandleSubmit}
                    validationSchema={changeAddressSchema}
                    render={({ values }) => (
                      <Form className="w-100">
                        <>
                          {isAddAnotherAddress && !isLoaderAddAddress && <>

                            <div className="mt-4" >
                              <label className="ml-1">
                                <h6>
                                  Add Address
                                </h6>
                              </label>
                            </div>

                            <div>
                              <label className="col-md-10 mt-3 p-1">
                                Title  :
                                </label>
                              <div className="col-md-6 p-1">
                                <Field className="form-control" type="text" name="addressType" />
                                <ErrorMessage name="addressType" className="text-danger" component="div" />
                              </div>
                            </div>

                            <div>
                              <label className="col-md-10 mt-2 p-1">
                                Address1 :
                                </label>
                              <div className="col-md-6 p-1">
                                <Field className="form-control" type="text" name="addressLine1" />
                                <ErrorMessage name="addressLine1" className="text-danger" component="div" />
                              </div>
                            </div>

                            <div>
                              <label className="col-md-10 mt-2 p-1">
                                Address2 :
                                </label>
                              <div className="col-md-6 p-1">
                                <Field className="form-control" type="text" name="addressLine2" />
                                <ErrorMessage name="addressLine2" className="text-danger" component="div" />
                              </div>
                            </div>

                            <div>
                              <label className="col-md-10 mt-2 p-1">
                                City  :
                                </label>
                              <div className="col-md-6 p-1">
                                <Field className="form-control" type="text" name="city" />
                                <ErrorMessage name="city" className="text-danger" component="div" />
                              </div>
                            </div>

                            <div>
                              <label className="col-md-10 mt-2 p-1">
                                State   :
                                </label>
                              <div className="col-md-6 p-1">
                                <Field className="form-control" type="text" name="state" />
                                <ErrorMessage name="state" className="text-danger" component="div" />
                              </div>
                            </div>

                            <div>
                              <label className="col-md-10 mt-2 p-1">
                                Zip Code :
                                </label>
                              <div className="col-md-6 p-1">
                                <Field className="form-control" type="text" name="zipcode" />
                                <ErrorMessage name="zipcode" className="text-danger" component="div" />
                              </div>
                            </div>

                            <div>
                              <label className="col-md-10 mt-2 p-1">
                                Primary Address :
                                <Field className="ml-2" type="checkbox" name="primaryAddress" />
                              </label>

                            </div>

                            <div className="mt-2 mb-3">
                              <button type="submit" className="btn btn-dark mr-2" >
                                Save Address
                               </button>
                              <button type="reset" className="btn btn-dark mr-2" >
                                Reset
                               </button>
                              <button className="btn btn-dark mr-2" onClick={() => setIsAddAnotherAddress(false)}>
                                Cancel
                               </button>
                            </div>

                          </>}
                        </>
                      </Form>
                    )}
                  />

                  {isLoaderAddAddress &&
                    <Skeleton count={6} duration={2} height={68} />
                  }

                  {
                    !isAddAnotherAddress && !isLoaderAddAddress &&
                    <div className="mt-3 mb-3">
                      <button type="button" onClick={() => {
                        setIsAddAnotherAddress(true)
                        setIsEditAddressByIndex(null)
                      }} class="btn btn-link">Add Another Addresses</button>
                    </div>
                  }
                </>
              }

            </div>
          </Collapse >
        </div>
      </div >
    </div >
  );
}

const MyOrderTrade = ({ userInfo }) => {
  const [myOrderTradeKey, setMyOrderTradeKey] = useState('completed');
  const [myOrderTrade, setMyOrderTrade] = useState()

  useEffect(() => {
    getUserTradeInfo()
  }, [myOrderTradeKey]);

  const getUserTradeInfo = () => {
    UserTradeInfo(userInfo.pk).then((res) => {
      if (!isEmpty(res.data.results)) {
        inProgressStepper(res.data.results);
        console.log(res.data.results)
      }
    }).catch((err) => {
      console.log(err);
    })
  }

  const inProgressStepper = async (obj) => {
    await obj.map(x => {
      if (x.status === 'inprogress') {
        console.log(obj)
        const step = []
        if (isEmpty(x.orderDate)) {
          step.push({ title: "Order placed", activeStep: 0 }, { title: "Shipping label sent", activeStep: 0 },
            { title: "Shipping received & device review", activeStep: 0 }, { title: "Payment processed", activeStep: 0 })
        }
        else if (!isEmpty(x.totalPayment) || !isEmpty(x.paymentMethod)) {
          step.push({ title: "Order placed", activeStep: 5 }, { title: "Shipping label sent", activeStep: 5 },
            { title: "Shipping received & device review", activeStep: 5 }, { title: "Waiting for Your acceptance", activeStep: 5 }, { title: "Device Accepted", activeStep: 5 }, { title: "Payment processed", activeStep: 5 })
        }
        else if (!isEmpty(x.deviceAccepted) && x.deviceAccepted === "yes" && !isEmpty(x.deviceAccepted)) {
          step.push({ title: "Order placed", activeStep: 4 }, { title: "Shipping label sent", activeStep: 4 },
            { title: "Shipping received & device review", activeStep: 4 }, { title: "Waiting for Your acceptance", activeStep: 4 }, { title: "Device Accepted", activeStep: 4 }, { title: "Payment processed", activeStep: 4 })
        }
        else if (!isEmpty(x.deviceTrackingOutbound) && x.deviceAccepted === "no") {
          step.push({ title: "Order placed", activeStep: 3 }, { title: "Shipping label sent", activeStep: 3 },
            { title: "Shipping received & device review", activeStep: 3 }, { title: "Sent you a item back", activeStep: 3 })
        }
        else if (!isEmpty(x.deviceAccepted) && x.deviceAccepted === "yes") {
          step.push({ title: "Order placed", activeStep: 3 }, { title: "Shipping label sent", activeStep: 3 },
            { title: "Shipping received & device review", activeStep: 3 }, { title: "Waiting for Your acceptance", activeStep: 3 }, { title: "Device Accepted", activeStep: 3 }, { title: "Payment processed", activeStep: 3 })
        }
        else if (!isEmpty(x.deviceAccepted) && x.deviceAccepted === "no") {
          step.push({ title: "Order placed", activeStep: 2 }, { title: "Shipping label sent", activeStep: 2 },
            { title: "Shipping received & device review", activeStep: 2 }, { title: "Sent you a item back", activeStep: 2 })
        }
        else if (!isEmpty(x.deviceAccepted)) {
          step.push({ title: "Order placed", activeStep: 3 }, { title: "Shipping label sent", activeStep: 3 },
            { title: "Shipping received & device review", activeStep: 3 }, { title: "Device Accepted", activeStep: 3 },
            { title: "Payment processed", activeStep: 3 })
        }
        else if (!isEmpty(x.deviceAccepted) && x.deviceReview === "requested") {
          step.push({ title: "Order placed", activeStep: 3 }, { title: "Shipping label sent", activeStep: 3 },
            { title: "Shipping received & device review", activeStep: 3 }, { title: "Waiting for Your acceptance", activeStep: 3 }, { title: "Payment processed", activeStep: 3 })
        }
        else if (!isEmpty(x.deviceReview) && x.deviceReview === "ok") {
          step.push({ title: "Order placed", activeStep: 2 }, { title: "Shipping label sent", activeStep: 2 },
            { title: "Shipping received & device review", activeStep: 2 }, { title: "Device Accepted", activeStep: 2 },
            { title: "Payment processed", activeStep: 2 })
        }
        else if (!isEmpty(x.deviceReview) && x.deviceReview === "requested") {
          step.push({ title: "Order placed", activeStep: 2 }, { title: "Shipping label sent", activeStep: 2 },
            { title: "Shipping received & device review", activeStep: 2 }, { title: "Waiting for Your acceptance", activeStep: 2 }, { title: "Payment processed", activeStep: 2 })
        }
        else if (!isEmpty(x.deviceReceived)) {
          step.push({ title: "Order placed", activeStep: 2 }, { title: "Shipping label sent", activeStep: 2 },
            { title: "Shipping received & device review", activeStep: 2 }, { title: "Payment processed", activeStep: 2 })
        }
        else if (isEmpty(x.deviceReceived)) {
          step.push({ title: "Order placed", activeStep: 1 },
            { title: "Shipping label sent", activeStep: 1 },
            { title: "Shipping received & device review", activeStep: 1 }, { title: "Payment processed", activeStep: 2 })
        }
        else if (!isEmpty(x.lableSent) || !isEmpty(x.deviceTrackingInbound) || !isEmpty(x.deviceShippingMethod)) {
          step.push({ title: "Order placed", activeStep: 1 },
            { title: "Shipping label sent", activeStep: 1 },
            { title: "Shipping received & device review", activeStep: 1 }, { title: "Payment processed", activeStep: 1 })
        } else if (isEmpty(x.lableSent) && isEmpty(x.deviceTrackingInbound) && isEmpty(x.deviceShippingMethod)) {
          step.push({ title: "Order placed", activeStep: 0 }, { title: "Shipping label sent", activeStep: 0 },
            { title: "Shipping received & device review", activeStep: 0 }, { title: "Payment processed", activeStep: 0 })
        }
        x.steps = step;
        return x
        
      } else {
        return x
      }
    })
    setMyOrderTrade(obj)
  }
  return (
    <div className="mt-4">
      <Tabs
        activeKey={myOrderTradeKey}
        onSelect={(k) => setMyOrderTradeKey(k)}
      >
        <Tab eventKey="completed" title="Completed">
          {!isEmpty(myOrderTrade) && myOrderTrade.map((item, index) => {
            if (item.status === 'completed') {
              return (
                <div className="m-4 border-bottom bg-aliceblue row" key={index}>
                  <div className="col-md-6 mt-3">
                    <label>Trade Reference No : <span className="ml-2">{item.devices[0].trade}</span></label>
                  </div>
                  <div className="col-md-6 mt-3">
                    <label>Date : <span className="ml-2">{moment(item.orderDate).format('MM-DD-YYYY')}</span></label>
                  </div>
                  <div className="col-md-6">
                    <label>Address : <span className="ml-2">{item.address}</span></label>
                  </div>
                  <div className="col-md-6">
                    <label>Order placed : <span className="ml-2">{moment(item.orderDate).format('MM-DD-YYYY')} </span></label>
                  </div>
                  <div className="col-md-6">
                    <label>Shipping Label : <span className="ml-2">{item.lableSent}</span></label>
                  </div>
                  <div className="col-md-6">
                    <label>Shipping received & device review : <span className="ml-2">{item.deviceReceived || ''} & {item.deviceReview || ''} </span></label>
                  </div>
                  <div className="col-md-6">
                    <label> Waiting for your Acceptance : <span className="ml-2">{item.deviceAccepted}</span></label>
                  </div>
                  <div className="col-md-6">
                    <label>Device Accepted : <span className="ml-2">{item.deviceAccepted}</span></label>
                  </div>
                  <div className="col-md-6">
                    <label>Payment processed : <span className="ml-2">{item.totalPayment}</span></label>
                  </div>
                </div>
              )
            }
          }
          )}
          {(isEmpty(myOrderTrade) || (!isEmpty(myOrderTrade) && myOrderTrade.some(x => x.status != 'completed'))) &&
            <div>
              you’ve order in progress please go to the in-progress tab to the status of current order
            </div>
          }
        </Tab>

        <Tab eventKey="inProgress" title="In-progress">
          {!isEmpty(myOrderTrade) && myOrderTrade.map((item, index) => {
            
            if (item.status === 'inprogress') {
              return (
                <div className="m-4 border-bottom bg-aliceblue row" key={index}>
                  <div className="col-md-6 mt-3">
                    <label>Trade Reference No : <span className="ml-2">{item.devices[0].trade}</span></label>
                  </div>
                  <div className="col-md-6 mt-3">
                    <label>Date : <span className="ml-2">{moment(item.orderDate).format('MM-DD-YYYY')}</span></label>
                  </div>
                  <div className="col-md-6">
                    <label>Address : <span className="ml-2">{item.address}</span></label>
                  </div>
                  <div className="col-md-6">
                    <label>Order placed : <span className="ml-2">{moment(item.orderDate).format('MM-DD-YYYY')} </span></label>
                  </div>
                  <div className="col-md-6">
                    <label>Shipping Label : <span className="ml-2">{item.lableSent}</span></label>
                  </div>
                  <div className="col-md-6">
                    <label>Shipping received & device review : <span className="ml-2">{item.deviceReceived || ' '}  </span></label>
                  </div>
                  <div className="col-md-6">
                    <label> Waiting for your Acceptance : <span className="ml-2">{item.deviceAccepted}</span></label>
                  </div>
                  <div className="col-md-6">
                    <label>Device Accepted : <span className="ml-2">{item.deviceAccepted}</span></label>
                  </div>
                  <div className="col-md-6">
                    <label>Payment processed : <span className="ml-2">{item.totalPayment}</span></label>
                  </div>
                  <div className="col-md-12 mb-4">
                    <Stepper steps={item.steps} activeStep={item.steps[0].activeStep} />
                   <p>{item.steps[0].activeStep}</p>
           
                    
                  </div>
                </div>
                
              )
            }
          }
          )}
          {(isEmpty(myOrderTrade) || (!isEmpty(myOrderTrade) && myOrderTrade.some(x => x.status != null))) &&
            <div>
              you don’t have any order/trade yet
            </div>}
        </Tab>
      </Tabs>
    </div>
  );
}

const MyRewards = () => {
  return (
    <div className="mt-4">
      MyRewards
    </div>
  );
}