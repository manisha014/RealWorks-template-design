import React from 'react';
// import {Link} from 'gatsby';
import { Link } from "react-scroll";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import classes from './header.module.scss';
import logo from '../../images/logo.png';
const header=()=>{
    return(
        <header className={classes.header}>
            <Navbar expand="lg">
                <img src={logo} alt="logo"></img>
                <p className={classes.brandName}><strong> Real</strong>works</p>
                {/* <Navbar.Brand className={classes.white}><strong> Real</strong>works</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav activeKey="/home">
                        <Nav.Item className={classes.navItem}>
                            {/* <Nav.Link> */}
                            <Link
                                    activeClass="active"
                                    to="main-banner"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration= {500}>Home</Link>
                            {/* </Nav.Link> */}
                        </Nav.Item>
                        <Nav.Item className={classes.navItem}>
                            {/* <Nav.Link> */}
                            <Link
                                    activeClass="active"
                                    to="features"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration= {500}>Features</Link>
                            {/* </Nav.Link> */}
                        </Nav.Item>
                        <Nav.Item className={classes.navItem}>
                            {/* <Nav.Link> */}
                            <Link
                                    activeClass="active"
                                    to="development"
                                    spy={true}
                                    smooth={true}
                                    offset={20}
                                    duration= {500}>Development</Link>
                            {/* </Nav.Link> */}
                        </Nav.Item>
                        <Nav.Item className={classes.navItem}>
                            {/* <Nav.Link> */}
                            <Link
                                    activeClass="active"
                                    to="testimonials"
                                    spy={true}
                                    smooth={true}
                                    offset={-150}
                                    duration= {500}>Testimonials</Link>
                            {/* </Nav.Link> */}
                        </Nav.Item>
                        <Nav.Item className={classes.navItem}>
                            {/* <Nav.Link> */}
                            <Link
                                    activeClass="active"
                                    to="FAQ"
                                    spy={true}
                                    smooth={true}
                                    offset={50}
                                    duration= {500}>FAQ</Link>
                            {/* </Nav.Link> */}
                        </Nav.Item>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            {/* <nav>
                <ul>
                    <li>
                        <Link>Home</Link>
                    </li>
                    <li>
                        <Link>Features</Link>
                    </li>
                    <li>
                        <Link>Development</Link>
                    </li>
                    <li>
                        <Link>Testimonials</Link>
                    </li>
                    <li>
                        <Link>FAQ</Link>
                    </li>
                </ul>
            </nav> */}

        </header>
    )
}

export default header;