import React from 'react';
import { Navbar, Nav, Form, Container, Row, Col } from 'react-bootstrap';

import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div>
            <footer className="footer">
                <Container className="footer-1">
                    <Row>
                        <Col lg="4" sm="12" className="p-20 flogo">
                            <img src="assets/images/logo/dsc-logo1.png" />
                            <p>Lorem Ipsum is simply dummy text<br />of the printing and typesetting industry.</p>
                        </Col>
                        <Col lg="3" sm="12" className="flogo offset-lg-1">
                            <ul>
                                <li>Home</li>
                                <li>Features</li>
                                <li>Plans</li>
                                <li>Download</li>
                                <li>Career</li>
                            </ul>
                        </Col>
                        <Col lg="4" sm="12" className="flogo">
                            <p>+1 9876543210</p>
                            <p>support@drivingschoolcloud.com</p>
                            <span className="social-media"><i className="fab fa-facebook"></i></span>
                            <span className="social-media"><i className="fab fa-instagram"></i></span>
                            <span className="social-media"><i className="fab fa-twitter"></i></span>
                            <span className="social-media"><i className="fab fa-linkedin"></i></span>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col lg="6" sm="12">
                            <p className="footer-right driving">© 2021 Driving School Cloud.  All rights reserved.</p>
                        </Col>
                        <Col lg="6" sm="12">
                            <p className="footer-link driving">
                                <Link to="/home" className="buttom-footer"> Privacy Policy </Link>   |   <Link to="/home" className="buttom-footer"> Terms of Service </Link>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    )
}
