import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const deviceNav = (props) => {

    const linkTo = (link) => {
        props.history.push(link)
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#pricing">Home</Nav.Link>

                    <NavDropdown title="IPHONES" id="collasible-nav-dropdown">
                        <NavDropdown.Item onClick={e => linkTo("/iPhone/IPhone 11 Pro Max")}>iPhone 11 pro Max</NavDropdown.Item>
                        <NavDropdown.Item onClick={e => linkTo("/iPhone/Iphone 11 Pro")}>iPhone 11 pro</NavDropdown.Item>
                        <NavDropdown.Item onClick={e => linkTo("/iPhone/Iphone 11")}>iPhone 11</NavDropdown.Item>
                        <NavDropdown.Item onClick={e => linkTo("/iPhone/Iphone XS Max")}>iPhone XS Max</NavDropdown.Item>
                        <NavDropdown.Item onClick={e => linkTo("/iPhone/Iphone XS")}>iPhone XS</NavDropdown.Item>
                        <NavDropdown.Item onClick={e => linkTo("/iPhone/Iphone XR")}>iPhone XR</NavDropdown.Item>
                        <NavDropdown.Item onClick={e => linkTo("/iPhone/Iphone X")}>iPhone X</NavDropdown.Item>
                        <NavDropdown.Item onClick={e => linkTo("/iPhone/Iphone 8 Plus")}>iPhone 8 Plus</NavDropdown.Item>
                        <NavDropdown.Item onClick={e => linkTo("/iPhone/Iphone 8")}>iPhone 8</NavDropdown.Item>
                        <NavDropdown.Item onClick={e => linkTo("/iPhone/Iphone 7 Plus")}>iPhone 7 plus</NavDropdown.Item>
                        <NavDropdown.Item onClick={e => linkTo("/iPhone/Iphone 7")}>iPhone 7</NavDropdown.Item>
                        <NavDropdown.Item onClick={e => linkTo("/iPhone/Iphone 6S Plus")}>iPhone 6s Plus</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="MACKBOOKS" id="collasible-nav-dropdown">
                        <NavDropdown.Item onClick={e => linkTo("/Macbook/Macbook")}>Macbook</NavDropdown.Item>
                        <NavDropdown.Item onClick={e => linkTo("/Macbook/Macbook Air")}>Macbook Air</NavDropdown.Item>
                        <NavDropdown.Item onClick={e => linkTo("/Macbook")}>Macbook Pro</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="IPADS" id="collasible-nav-dropdown">
                        <NavDropdown.Item onClick={e => linkTo("/iPad/iPadPro")}>iPad pro</NavDropdown.Item>
                        <NavDropdown.Item onClick={e => linkTo("/iPad/iPadMini")}>iPad mini</NavDropdown.Item>
                        <NavDropdown.Item onClick={e => linkTo("/iPad/ipadAir")}>iPad Air</NavDropdown.Item>
                        <NavDropdown.Item onClick={e => linkTo("/iPad/iPad")}>iPad</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Apple IWatch" id="collasible-nav-dropdown">
                        <NavDropdown.Item onClick={e => linkTo("/iWatch/Apple Watch Series 1")}>iWatch Series 1</NavDropdown.Item>
                        <NavDropdown.Item onClick={e => linkTo("/iWatch/Apple Watch Series 2")}>iWatch Series 2</NavDropdown.Item>
                        <NavDropdown.Item onClick={e => linkTo("/iWatch/Apple Watch Series 3")}>iWatch Series 3</NavDropdown.Item>
                        <NavDropdown.Item onClick={e => linkTo("/iWatch/Apple Watch Series 4")}>iWatch Series 4</NavDropdown.Item>
                        <NavDropdown.Item onClick={e => linkTo("/iWatch/Apple Watch Series 5")}>iWatch Series 5</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Android Phones" id="collasible-nav-dropdown">
                        <NavDropdown.Item onClick={e => linkTo("/AndroidPhone")}>Samsung</NavDropdown.Item>
                        <NavDropdown.Item onClick={e => linkTo("/google")}>Google</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}


export default deviceNav