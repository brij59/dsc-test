import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Form, Container, Row, Col, } from 'react-bootstrap'
import CustomButtons from "../CustomButtons/Button";
import { useHistory } from "react-router-dom";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Main_svg from '../svg/main_12.svg';

import { ReactSVG } from 'react-svg'
import bgImage from '../../assets/images/Path-3676.png';
import aniSvg from '../../assets/images/svg/main_12.svg';
import aboutImage from '../../assets/images/svg/about_main.svg';
import Circle from '../../assets/images/bg5.png';

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: '38px',
        fontWeight: 700,
        color: '#000000',
    },
    subTitle: {
        fontSize: '20px',
        marginTop: '20px',
    },
    button: {
        marginTop: '20px',
    },
    Title_2: {
        fontSize: '36px',
        fontWeight: 700,
        color: '#000000',
    },
    subTitle_2: {
        fontSize: '20px',
        marginTop: '20px',
    },
    // bgimg1: {
    //     position: 'absolute',
    //     top: '100%',
    //     left: '100%',
    //     right: 'auto',
    //     width: '8%',
    // }
}));

export default function About_us() {
    const history = useHistory();
    const classes = useStyles();
    useEffect(() => {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }, [])
    return (
        <div>
            <section className="section-top ">
                <div className="aboutcon1 d-flex flex-column justify-content-center" style={{ backgroundImage: `url(${bgImage})` }}>
                    <Container className="">
                        <Row className="reverse">
                            <Col className="d-flex flex-column justify-content-center mt-2" lg="4" sm="5" xs="12">
                                <Typography className={classes.title} variant="h3" component="div">
                                    One Stop <br /> Solution For Your <br /> Driving School
                                </Typography>
                                <Typography className={classes.subTitle} component="div">
                                    Operating a driving school is easier then ever.
                                </Typography>
                                <div className={classes.button}>
                                    <CustomButtons.OutlineColorButton onClick={() => history.push('')}>Schedule Demo</CustomButtons.OutlineColorButton>{' '}
                                    <CustomButtons.ColorButton onClick={() => history.push('')}>Buy Now</CustomButtons.ColorButton>
                                </div>
                            </Col>
                            <Col lg="8" sm="7" xs="12" className="mainimage">
                                <object type="image/svg+xml" data={aniSvg}></object>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
            <section className="section-top-1">
                <Container className="mt-4">
                    <Row>
                        <Col lg="5" sm="12">
                            <img src={aboutImage} />
                        </Col>
                        <Col lg="7" sm="12" className="d-flex flex-column justify-content-center">
                            <Typography className={classes.Title_2} variant="h3" component="div">
                                What is Driving School Cloud?
                            </Typography>
                            <Typography className={classes.subTitle_2} component="div">
                                Driving School Cloud is industry-leading Mandatory Entry Level Training (MELT) compatible driving school management platform that helps in simplifying the driving school-related processes and workflows for greater transparency and gives insights into your driving school business.
                            </Typography>
                            <div className={classes.button}>
                                <CustomButtons.ColorButton onClick={() => history.push('')}>Show Me More</CustomButtons.ColorButton>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="icon-effects-w3-1">
                    <img src={Circle} />
                </div>
            </section>
        </div>
    )
}
