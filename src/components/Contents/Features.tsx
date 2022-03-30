import React from 'react'
import { Navbar, Nav, Form, Container, Row, Col } from 'react-bootstrap'
import CustomButtons from "../CustomButtons/Button";
import { useHistory } from "react-router-dom";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Dots from '../../assets/images/bg4.png';


const useStyles = makeStyles((theme) => ({
    mainTitle: {
        fontSize: '44px',
        fontWeight: 700,
        color: '#000000',
    },
    subTitle: {
        fontSize: '18px',
    },
    featur: {
        textAlign: 'center',
    },
    features: {
        textAlign: 'center',
        marginTop: '30px',
        boxShadow: 'none',
        '&:hover': {
            boxShadow: '2px 3px 10px #9E9E9E',
        },
    },
    CardMedia: {
        alignItems: 'center',
        margin: '10px',
    },
    Title_1: {
        fontSize: '20px',
        fontWeight: 700,
        color: '#000000',
    },
    bgimg: {
        position: 'absolute',
        top: '40px',
        left: '-65px',
        right: '100%',
        width: '15%',
        zIndex: -2,
    },
}));

export default function Features() {
    const featur = [
        {
            id: 1,
            image: 'assets/images/svg/Features/school_management.svg',
            title: 'School Workflows Management',
            name: 'Automate your manual school workflows for better management of your resources thereby saving you both time and money.'
        },
        {
            id: 2,
            image: 'assets/images/svg/Features/timesheets.svg',
            title: 'Timesheets',
            name: 'No more manual timesheets with our Intelligent timesheet recommendation and management system that...'
        },
        {
            id: 3,
            image: 'assets/images/svg/Features/student_onboarding.svg',
            title: 'Student Onboarding',
            name: 'Simplified online student registration with digital document management thereby saving you on office supplies...'
        },
        {
            id: 4,
            image: 'assets/images/svg/Features/dashboards.svg',
            title: 'Dashboards',
            name: 'Monitor the health of your business via the platform dashboards that provide real-time visibility into your business...'
        },
        {
            id: 5,
            image: 'assets/images/svg/Features/instructor_management.svg',
            title: 'Instructor Management',
            name: 'Track instructor time with our intelligent late className detection algorithm with notifications to the school...'
        },
        {
            id: 6,
            image: 'assets/images/svg/Features/vehicle_management.svg',
            title: 'Vehicle Management',
            name: 'No more worries of forgetting your training vehicles insurance expiry dates, next service date, Plate expiry...'
        },
        {
            id: 7,
            image: 'assets/images/svg/Features/auditing_reporting.svg',
            title: 'Auditing and Reporting',
            name: 'The platform audits important workflow actions which can be used in case of discrepancies.'
        },
        {
            id: 8,
            image: 'assets/images/svg/Features/online_payments.svg',
            title: 'Online Payments',
            name: 'Securely accept payments of your courses using our platform with the real-time transfer of fees...'
        },
        {
            id: 9,
            image: 'assets/images/svg/Features/mobile_app.svg',
            title: 'Mobile Apps',
            name: 'IOS and Android Mobile applications for School owner, students and instructor  to view real-time health of the business.'
        }

    ]
    const classes = useStyles();

    return (
        <div>
            <section id="features" className="section-top-1">
                <div className="icon-effects-w3-2">
                <img src={Dots} />
                </div>
                <Container className="">
                    <Row>
                        <div className={classes.featur}>
                            <Typography className={classes.mainTitle} variant="h3" component="div">
                                Our Features
                            </Typography>
                            <Typography className={classes.subTitle} component="div">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />
                                Lorem Ipsum has been the industry's standard dummy text.
                            </Typography>
                        </div>
                    </Row>
                    <Row>
                        {
                            featur.map(data => (
                                <Col lg="4" sm="12">
                                    <Card className={classes.features}>
                                        <div className="align-center">
                                            <img className={classes.CardMedia} src={data.image} />
                                        </div>
                                        <CardContent>
                                            <Typography className={classes.Title_1} gutterBottom variant="h5" component="div">
                                                {data.title}
                                            </Typography>
                                            <Typography variant="body2">
                                                {data.name}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </section>
        </div>
    )
}
