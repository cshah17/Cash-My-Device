import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import * as actions from '../store/actions/auth';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedin, faDribbble } from '@fortawesome/free-brands-svg-icons'

import chartIcon from '../css/icon/inbox_white_18dp.png'
import DeviceNav from '../components/DeviceNav/deviceNav'

class CustomLayout extends React.Component {
    logout = () => {
        this.props.logout()
        this.props.history.push('/login');
    }
    myAccount = () => {
        this.props.history.push('/my-account');
    }

    linkTo = (link) => {
        this.props.history.push(link)
    }

    customToggle = React.forwardRef(({ onClick }, ref) => (
        <a href="" ref={ref}
            onClick={e => {
                e.preventDefault();
                onClick(e);
            }}
        >
            <span id="dropdown-basic" className="mt-2 mr-2 text-info"><svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
            </svg></span>
        </a>
    ));

    render() {
        return (
            <div>
                <header>
                    <div>
                        <nav className="navbar navbar-expand-lg bg-secondary fixed-top" id="mainNav">
                            <div className="container">
                                <Link className="navbar-brand js-scroll-trigger" to="/">
                                    <img className="logo" src='https://cashmydevice-frontend.s3-us-west-1.amazonaws.com/App+logo/app-logo.jpeg' alt="Log Cabin" />
                                </Link>
                                <button className="navbar-toggler navbar-toggler-right font-weight-bold bg-primary text-white rounded"
                                    type="button" data-toggle="collapse" data-target="#navbarResponsive"
                                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                                    Menu <i className="fa fa-bars" />
                                </button>
                                <div className="collapse navbar-collapse" id="navbarResponsive">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item mx-0 mx-lg-1">
                                            <Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/WhySellToUs">Why sell to us!</Link>
                                        </li>
                                        <li className="nav-item mx-0 mx-lg-1">
                                            <Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/SellBulk">Sell in bulk</Link>
                                        </li>
                                        <li className="nav-item mx-0 mx-lg-1">
                                            <Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/SellAdevice">Sell a device</Link>
                                        </li>
                                        <li className="nav-item mx-0 mx-lg-1">
                                            <Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/Support">Support</Link>
                                        </li>
                                        {
                                            this.props.isAuthenticated ?
                                                <li className="nav-item mx-0 mx-lg-1 mt-3">
                                                    <Dropdown className="ml-4">
                                                        <Dropdown.Toggle as={this.customToggle} id="dropdown-custom-components">
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item eventKey="1" onClick={this.myAccount}>My Account</Dropdown.Item>
                                                            <Dropdown.Item eventKey="2" onClick={this.logout} >Logout</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </li>
                                                :
                                                <li className="nav-item mx-0 mx-lg-1">
                                                    <Link className="headerbuyLink nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/Login">
                                                        Login/Sign up</Link>
                                                </li>
                                        }


                                        {
                                            this.props.items != 0 &&
                                            <li className="nav-item mx-0 mx-lg-1">
                                                <Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/Cart">
                                                    <Image height="25" src={chartIcon} />
                                                    <span className="badge badge-light cart-badge position-relative">
                                                        {
                                                            this.props.items
                                                        }
                                                    </span>
                                                </Link>
                                            </li>
                                        }
                                    </ul>
                                </div>
                            </div>
                        </nav>

                    </div>
                    </header>
                <div>
                    <div style={{ background: '#fff', padding: '24px', height: 'auto' }}>
                        {this.props.children}
                    </div>
                </div>
                <footer>
                    <footer className="footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 mb-5 mb-lg-0">
                                    <h4 className="mb-4">CONTACT</h4>
                                    <div className="address">
                                        <span className="contect">
                                            1.555.555.5555<br />
                                    7am - 6pm PT<br />
                                    Everyday
                                    </span>
                                        <span className="email">
                                            <Link to='#'>Email us</Link>
                                        </span>
                              
                                      <span className="time">
                                            <Link to='#'>Live Chat</Link>
                                            <br />6Am - 5pm PST<br />Everyday
                                    </span>
                                    </div>
                                </div>

                                <div className="col-lg-3 mb-5 mb-lg-0">
                                    <h4 className="mb-4">CONNECT WITH US</h4>
                                    <Link to='#' className="btn btn-outline-light btn-social mx-1">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </Link>
                                    <Link to='#' className="btn btn-outline-light btn-social mx-1">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </Link>
                                    <Link to='#' className="btn btn-outline-light btn-social mx-1">
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </Link>
                                    <Link to='#' className="btn btn-outline-light btn-social mx-1">
                                        <FontAwesomeIcon icon={faDribbble} />
                                    </Link>
                                </div>

                                <div className="col-lg-3 mb-5 mb-lg-0">
                                    <div className="footer-menu">
                                        <ul>
                                            <li><Link to='#'>About</Link></li>
                                            <li><Link onClick={e => this.linkTo("/Support")}>Contact</Link></li>
                                            <li><Link onClick={e => this.linkTo("/SellBulk")}>Bulk Sales</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 mb-5 mb-lg-0">
                                    <p className="pre-wrap lead mb-0">We do NOT accept products that have been reported lost or stolen.
                                <span className="no-wrap"><Link to="#"> Learn More</Link></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </footer>
                </footer>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.cart.items.length
    }
}


const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomLayout));
