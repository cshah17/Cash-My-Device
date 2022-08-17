import React from 'react'
import Button from 'react-bootstrap/Button'

import { isEmpty } from "../../../validation/index";
import AndroidPhone from './Sell-device/SamsungPhone.png'

import AirPods from './Sell-device/AirPods.jpg'
import GooglePhone from './Sell-device/GooglePhone.png'
import Ipad from './Sell-device/Ipad.png'
import Iphone from './Sell-device/Iphone.png'
import iwatch from './Sell-device/iwatch.jpg'
import Macbook from './Sell-device/Macbook .png'

const deviceList1 = [
  {
    devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/devices/SamsungPhone.png',
    buttonName: "Samsung Phone",
    path: "/AndroidPhone"
  },
  {
    devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/devices/Iphone.png',
    buttonName: "iphone",
    path: "/iPhone"
  },
  {
    devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/devices/Macbook+.png',
    buttonName: "Macbook",
    path: "/Macbook"
  },
  {
    devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/devices/GooglePhone.png',
    buttonName: "Google Phone",
    path: "/google"
  }
]

const deviceList2 = [
  {
    devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/devices/Ipad.png',
    buttonName: "iPad",
    path: "/iPad"
  },

  {
    devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/devices/AirPods.jpg',
    buttonName: "AirPods",
    path: "/iPod"
  },
  {
    devicePhoto: 'https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/devices/iwatch.jpg',
    buttonName: "iwatch",
    path: "/iWatch"
  }]


const SellBulk = (props) => {

  const goToPage = (path) => {
    props.history.push(path);
  }

  return (

    <>
      <div>
        <h1 className="text-center mb-2">SELL YOUR DEVICE IN MINUTES</h1>

        <div className="row mt-5">
          {
            !isEmpty(deviceList1) && deviceList1.map((item, index) => (
              <div className="col-md-3 d-flex flex-column justify-content-space-between" key={index}>
                <div className="mt-2 text-center">
                  <img src={item.devicePhoto} className="cursor-pointer" onClick={() => goToPage(item.path)} />
                </div>
                <div className=" mt-2">
                  <Button className="w-100" onClick={() => goToPage(item.path)} variant="warning">{item.buttonName}</Button>
                </div>
              </div>
            ))
          }
        </div>


        <div className="row mt-5">
          {
            !isEmpty(deviceList2) && deviceList2.map((item, index) => (
              <div className="col-md-3 d-flex flex-column justify-content-space-between" key={index}>
                <div className="mt-2 text-center">
                  <img src={item.devicePhoto} className="cursor-pointer" onClick={() => goToPage(item.path)} />
                </div>
                <div className=" mt-2">
                  <Button className="w-100" onClick={() => goToPage(item.path)} variant="warning">{item.buttonName}</Button>
                </div>
              </div>
            ))
          }
        </div>



      </div >
    </>
  )
}

export default SellBulk
