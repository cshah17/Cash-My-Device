import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/pages/navigation/HomePage';
import SellADevice from './components/pages/navigation/SellADevice';
import SellBulk from './components/pages/navigation/SellBulk';
import ThankYou from './components/pages/navigation/ThankYou';
import WhySellToUs from './components/pages/navigation/WhySellToUs';
import Login from './container/Login';
import PasswordResetConfirm from './container/PasswordResetConfirm';
import ResetPassword from './container/ResetPassword';
import SignUp from './container/SignUp';
import MyAccount from './components/pages/navigation/MyAccount';
import iPhone from './components/pages/devices/iPhone';
import iPad from './components/pages/devices/iPad';
import iPod from './components/pages/devices/iPod';
import Google from './components/pages/devices/google';
import Macbook from './components/pages/devices/Macbook';
import iWatch from './components/pages/devices/iWatch';
import AndroidPhone from './components/pages/devices/AndroidPhone';
import AirPods from './components/pages/devices/AirPods';
import Cart from './components/pages/devices/Cart';
import Payment from './components/pages/devices/Payment';
import Address from './components/pages/devices/Address';
import Checkout from './components/pages/devices/Checkout';
import CheckOutSuccessPage from './components/pages/devices/CheckoutSuccess';
import Benefits from './components/pages/navigation/Whyselltous/benefits';
import Process from './components/pages/navigation/Whyselltous/process';
import Recycle from './components/pages/navigation/Whyselltous/recycle';
import DataScrubbing from './components/pages/navigation/Whyselltous/dataScrubbing';
import support from './components/pages/navigation/Whyselltous/support';
import Faq from './components/pages/navigation/Support/faq';
import contactEmails from './components/pages/navigation/Support/contactEmails';
import TrackYourOrder from './components/pages/navigation/Support/trackYourOrder';
import CustomerSupport from './components/pages/navigation/Support/customerSupport';
import SendTicket from './components/pages/navigation/Support/sendTicket'
import Page404 from './components/pages/errors/page404'
import Page401 from './components/pages/errors/page401'
import Page500 from './components/pages/errors/page500'

const BaseRouter = () => (

    <div>
        <Switch>
            <Route path="/" exact={true} component={HomePage} />
            <Route path="/WhySellToUs" exact={true} component={WhySellToUs} />
            <Route path="/SellBulk" exact={true} component={SellBulk} />
            <Route path="/sellBulk-thank-you" exact={true} component={ThankYou} />
            <Route path="/SellADevice" exact={true} component={SellADevice} />
            <Route path="/Support" exact={true} component={Faq} />
            <Route path="/iPhone" exact={true} component={iPhone} />
            <Route path="/iPhone/:model" exact={true} component={iPhone} />
            <Route path="/iPad" exact={true} component={iPad} />
            <Route path="/iPad/:model" exact={true} component={iPad} />
            <Route path="/google" exact={true} component={Google} />
            <Route path="/iPod" exact={true} component={iPod} />
            <Route path="/iPod/:model" exact={true} component={iPod} />
            <Route path="/Macbook" exact={true} component={Macbook} />
            <Route path="/Macbook/:model" exact={true} component={Macbook} />
            <Route path="/iWatch" exact={true} component={iWatch} />
            <Route path="/iWatch/:model" exact={true} component={iWatch} />
            <Route path="/AndroidPhone" exact={true} component={AndroidPhone} />
            <Route path="/AirPods" exact={true} component={AirPods} />
            <Route path="/AirPods/:model" exact={true} component={AirPods} />
            <Route path="/Login" exact={true} component={Login} />
            <Route path="/signup" exact={true} component={SignUp} />
            <Route path="/password-reset" exact={true} component={ResetPassword} />
            <Route path="/password-reset/confirm/:uid/:token" exact={true} component={PasswordResetConfirm} />
            <Route path="/my-account" exact={true} component={MyAccount} />
            <Route path="/cart" exact={true} component={Cart} />
            <Route path="/cart/payment" exact={true} component={Payment} />
            <Route path="/cart/address" exact={true} component={Address} />
            <Route path="/cart/checkout" exact={true} component={Checkout} />
            <Route path="/check-out-success" exact={true} component={CheckOutSuccessPage} />
            <Route path="/WhySellToUs/Benefits" exact={true} component={Benefits} />
            <Route path="/WhySellToUs/Process" exact={true} component={Process} />
            <Route path="/WhySellToUs/Recycle" exact={true} component={Recycle} />
            <Route path="/WhySellToUs/Support" exact={true} component={support} />
            <Route path="/WhySellToUs/dataScrubbing" exact={true} component={DataScrubbing} />
            <Route path="/Support/TrackYourOrder" exact={true} component={TrackYourOrder} />
            <Route path="/Support/CustomerSupport" exact={true} component={CustomerSupport} />
            <Route path="/Support/Faq" exact={true} component={Faq} />
            <Route path="/Support/contact-emails" exact={true} component={contactEmails} />
            <Route path="/Support/CustomerSupport/SendTicket" exact={true} component={SendTicket} />
            <Route path="/401" exact={true} component={Page401} />
            <Route path="/500" exact={true} component={Page500} />
            <Route path="/404" exact={true} component={Page404} />
            <Route path="/" component={Page404} />
        </Switch>
    </div>
);

export default BaseRouter