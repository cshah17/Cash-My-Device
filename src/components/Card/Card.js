import AssessmentIcon from '@material-ui/icons/Assessment';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import GradeIcon from '@material-ui/icons/Grade';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import PaymentIcon from '@material-ui/icons/Payment';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import ScheduleIcon from '@material-ui/icons/Schedule';
import SecurityIcon from '@material-ui/icons/Security';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import TimelineIcon from '@material-ui/icons/Timeline';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import React from 'react';

function Card(props) {
  return (
    <div className="container">

      <div class="col-lg-16">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">Benefit of selling your device to us</h3>
            <h5><CheckCircleIcon /> We pay best buyback value for your device in the industry</h5>
            <h5><MonetizationOnOutlinedIcon /> We pay cash value not store credit</h5>
            <h5><LocalShippingIcon /> We will send you a shipping box to ship your device to us free of charge</h5>
            <h5><PaymentIcon /> We can pay you on same day we received your device via convenient payment method you choose.</h5>
            <h5><AssessmentIcon /> We provide easy and fast way to find out worth of your device,<a onClick={() => props.history.push('/SellADevice')} > find out worth of your Device</a> </h5>
            <h5><GradeIcon /> We make sure to get you the best value for your device.</h5>
            <h5><HeadsetMicIcon /> We provide best customer support and service at any stage of the selling process.</h5>
            <h5><TimelineIcon /> We provide the feature to track status of your sell order at every move.</h5>
            <a onClick={() => props.history.push('/WhySellToUs/Benefits')} class="btn btn-primary">Learn more</a>
          </div>
        </div>
      </div>
      <div class="col-lg-16">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">Smart and Secure way to recycle your old device</h3>
            <h5><CheckCircleIcon /> Safest way to recyle your old electronics and get paid for it</h5>
            <h5><PriorityHighIcon />we are pioneer in e-waste recyling, </h5>
            <h5><DeleteSweepIcon />  we use cutting edge technology to recycle your device</h5>
            <h5><DeleteForeverIcon />  we ensure erasing and deleting of any personal data on your device permenately.</h5>
            <h5><VerifiedUserIcon />we make sure that your data never compromised</h5>
            <a onClick={() => props.history.push('/WhySellToUs/Recycle')} class="btn btn-primary">Learn more</a>
          </div>
        </div>
      </div>
      <div class="col-lg-16">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">Secure and hassle-free process</h3>
            <h5><SecurityIcon />We offer very convenient and secure platform to sell you devices</h5>
            <h5><AssessmentIcon />you can know worth of your devices in less than a minute</h5>
            <h5><ScheduleIcon /> ship your device as per your per your convenience </h5>
            <h5><LocalShippingIcon /> Get update on every progress your order make</h5>
            <h5><PaymentIcon />  Get paid instantly via the payment method you choose like Paypal,Venmo,Amazon Gift card</h5>
            <a onClick={() => props.history.push('/WhySellToUs/Process')} class="btn btn-primary">Learn more</a>
          </div>
        </div>
      </div>
      <div class="col-lg-16">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">Best and award winning customer suppor</h3>
            <h5><ContactSupportIcon />we provide 24x7 chat based customer support with 9-6 phone support</h5>
            <h5><CalendarTodayIcon /> we make sure to resolve any issue in a day</h5>
            <h5><SupervisorAccountIcon />our customer support team are trained proffesional, expert in addressing our customer issue and come up with the best solution possible</h5>
            <a onClick={() => props.history.push('/WhySellToUs/support')} class="btn btn-primary">Learn more</a>
          </div>
        </div>
      </div>
      <a onClick={() => props.history.push('/WhySellToUs/dataScrubbing')} class="btn btn-primary">Learn more</a>
    </div>
  );
}

export default Card;
