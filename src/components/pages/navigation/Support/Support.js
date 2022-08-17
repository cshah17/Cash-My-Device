import React, { useState, useEffect } from 'react';
import { Nav } from "react-bootstrap";

const Support = (props) => {

  const [activeNav, setActiveNav] = useState(null)

  useEffect(() => {
    if (props.location.pathname === '/Support/CustomerSupport') {
      setActiveNav(2)
    } else if (props.location.pathname === '/Support/TrackYourOrder') {
      setActiveNav(3)
    } else {
      setActiveNav(1)
    }
  }, [props])

  const linkTo = (link) => {
    props.history.push(link)
  }

  return (
    <Nav justify variant="tabs" >
      <Nav.Item>
        <Nav.Link eventKey={1} className={activeNav === 1 ? 'active' : ''} onClick={e => linkTo("/Support/Faq")} >FAQ</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey={2} className={activeNav === 2 ? 'active' : ''} onClick={e => linkTo("/Support/CustomerSupport")}>Customer Support</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey={3} className={activeNav === 3 ? 'active' : ''} onClick={e => linkTo("/Support/TrackYourOrder")} >Track your Order</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default Support;
