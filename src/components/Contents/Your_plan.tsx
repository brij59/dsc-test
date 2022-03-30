import React from 'react'
import { Navbar, Nav, Form, Container, Row, Col } from 'react-bootstrap'
import CustomButtons from "../CustomButtons/Button";
import { useHistory } from "react-router-dom";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CheckIcon from '@material-ui/icons/Check';

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
    plan: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '50px',
        minHeight: '680px',
    },

    addons_plan: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '20px',
        minHeight: '680px',
        backgroundColor: '#00a651',
        position: 'relative',
        overflow: 'visible',
    },
    card: {
        backgroundColor: '#fedc92',
    },
    addons_card: {

    },
    plan_title: {
        fontSize: '24px',
        fontWeight: 700,
        color: '#000000',
    },
    addons_title: {
        paddingTop: '20px',
        fontSize: '24px',
        fontWeight: 700,
        color: '#ffffff',
    },
    img_title: {
        marginLeft: '10px',
        color: '#464646'
    },
    platform: {
        fontWeight: 700,
        color: '#000000',
        marginBottom: '10px',
    },
    Customplan_title: {
        fontSize: '18px',
        fontWeight: 700,
        color: '#00a651',
        textAlign: 'center',
        marginTop: '20px',
    },
    CardContent: {
        minHeight: '490px'
    },
    bestplan: {
        content: '',
        display: 'inline-block',
        width: '47px',
        height: '20px',
        backgroundColor: '#de9b0b',
        position: 'absolute',
        top: '-10px',
        right: '10px',
        Transform: 'rotate(1deg)',
        borderRadius: '8px',
        zIndex: -2,
    },
    bestplan1: {
        content: '',
        display: 'inline-block',
        width: '80px',
        height: '80px',
        backgroundColor: '#feba26',
        position: 'absolute',
        top: '-10px',
        right: '20px',
        borderRadius: '0px 0px 10px 10px',
    },
    offer: {
        fontSize: '16px',
        fontWeight: 600,
        color: '#ffffff',
        padding: '5px',
        textAlign: 'center',
    },
}));


export default function Your_plan() {
    const classes = useStyles();
    const history = useHistory();

    return (
        <div>
            <section id="ypur_plan" className="section-top-1">
                <div className="icon-effects-w3-3">
                    <img src="assets/images/bg3.png" />
                </div>
                <div className="ypur_plan">
                </div>
                <div className="ypur_plan_2">
                    <Container className="">
                        <Row>
                            <div className={classes.featur}>
                                <Typography className={classes.mainTitle} variant="h3" component="div">
                                    Choose Your Plan
                                </Typography>
                                <Typography className={classes.subTitle} component="div">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />
                                    Lorem Ipsum has been the industry's standard dummy text.
                                </Typography>
                            </div>
                        </Row>
                        <Row>
                            <Col lg="4" sm="12">
                                <Card className={classes.plan}>
                                    <CardMedia className={classes.card} component="div">
                                        <CardContent>
                                            <Typography className={classes.plan_title} variant="h6" component="div">
                                                Standard Licence<br /> $4000 / year
                                            </Typography>
                                        </CardContent>
                                    </CardMedia>
                                    <CardContent className={classes.CardContent}>
                                        <Typography component="div">
                                            One license for all course types.
                                        </Typography>
                                        <div className="stline"></div>
                                        <Row>
                                            <Col lg="6" sm="6" xs="6">
                                                <img src="assets/images/az.png" /> <span className={classes.img_title}> AZ </span>
                                            </Col>
                                            <Col lg="6" sm="6" xs="6">
                                                <img src="assets/images/dz.png" /> <span className={classes.img_title}> DZ </span>
                                            </Col>
                                        </Row>
                                        <Row className="mt-2">
                                            <Col lg="6" sm="6" xs="6">
                                                <img src="assets/images/bz.png" /> <span className={classes.img_title}> AZ </span>
                                            </Col>
                                            <Col lg="6" sm="6" xs="6">
                                                <img src="assets/images/cz.png" /> <span className={classes.img_title}> DZ </span>
                                            </Col>
                                        </Row>
                                        <Row className="mt-2">
                                            <Col lg="6" sm="6" xs="6">
                                                <img src="assets/images/bike.png" /> <span className={classes.img_title}> AZ </span>
                                            </Col>
                                            <Col lg="6" sm="6" xs="6">
                                                <img src="assets/images/car.png" /> <span className={classes.img_title}> DZ </span>
                                            </Col>
                                        </Row>
                                        <div className="stline"></div>
                                        <Typography className={classes.platform} variant="h6" component="div">
                                            Following school, personas come with the platform.
                                        </Typography>
                                        <Typography component="div">
                                            <CheckIcon />  2 staff
                                        </Typography>
                                        <Typography component="div">
                                            <CheckIcon />  5 instructor
                                        </Typography>
                                        <Typography component="div">
                                            <CheckIcon />  1 admin
                                        </Typography>
                                        <Typography component="div">
                                            <CheckIcon />  1 owner
                                        </Typography>
                                        <Typography component="div">
                                            <CheckIcon />  300 students per year
                                        </Typography>
                                    </CardContent>
                                    <div className="text-center">
                                        <CustomButtons.OutlineButton onClick={() => history.push('')}>Buy Now</CustomButtons.OutlineButton>
                                    </div>
                                </Card>
                            </Col>
                            <Col lg="4" sm="12">
                                <Card className={classes.addons_plan}>
                                    <div className={classes.bestplan}>
                                    </div>
                                    <div className={classes.bestplan1}>
                                        <p className={classes.offer}>BEST OFFER PLAN</p>
                                    </div>
                                    <CardContent className={classes.CardContent}>

                                        <Typography className={classes.addons_title} variant="h6" component="div">
                                            Addons +<br /> Standard Licence Included
                                        </Typography>
                                        <div className="stline_1"></div>
                                        <Typography component="div" className="text-white">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting, Lorem Ipsum has been the industry's standard dummy text.
                                        </Typography>
                                        <div className="stline_1"></div>
                                        <Typography className="text-white" component="div">
                                            <Row>
                                                <Col lg="1" sm="1">
                                                    <CheckIcon />
                                                </Col>
                                                <Col lg="11" sm="11">
                                                    $10 per staff user / month charged yearly in advance
                                                </Col>
                                            </Row>
                                        </Typography>
                                        <Typography className="text-white" component="div">
                                            <Row>
                                                <Col lg="1" sm="1">
                                                    <CheckIcon />
                                                </Col>
                                                <Col lg="11" sm="11">
                                                    $10 per instructor / month charged yearly in advance
                                                </Col>
                                            </Row>
                                        </Typography>
                                        <Typography className="text-white" component="div">
                                            <Row>
                                                <Col lg="1" sm="1">
                                                    <CheckIcon />
                                                </Col>
                                                <Col lg="11" sm="11">
                                                    Buy student limit on the fly.$1 per student.Minimum buy 50. One-time payment
                                                </Col>
                                            </Row>
                                        </Typography>
                                        <Typography className="text-white" component="div">
                                            <Row>
                                                <Col lg="1" sm="1">
                                                    <CheckIcon />
                                                </Col>
                                                <Col lg="11" sm="11">
                                                    Referral program modules - $50/year paid in advance
                                                </Col>
                                            </Row>
                                        </Typography>
                                        <Typography className="text-white" component="div">
                                            <Row>
                                                <Col lg="1" sm="1">
                                                    <CheckIcon />
                                                </Col>
                                                <Col lg="11" sm="11">
                                                    Vehicle management -$250/year notifications for plate expiry, insurance expiry, service due, expense reporting, Fuel, Repair
                                                </Col>
                                            </Row>
                                        </Typography>
                                    </CardContent>
                                    <div className="text-center">
                                        <CustomButtons.OutlineWhiteButton onClick={() => history.push('')}>Buy Now</CustomButtons.OutlineWhiteButton>
                                    </div>
                                </Card>
                            </Col>
                            <Col lg="4" sm="12">
                                <Card className={classes.plan}>
                                    <CardMedia className={classes.card} component="div">
                                        <CardContent>
                                            <Typography className={classes.plan_title} variant="h6" component="div">
                                                Bespoke Services<br /> Custom Plan
                                            </Typography>
                                        </CardContent>
                                    </CardMedia>
                                    <CardContent className={classes.CardContent}>
                                        <Typography component="div">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting, Lorem Ipsum has been the industry's standard dummy text.
                                        </Typography>
                                        <div className="stline"></div>
                                        <Typography component="div">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting, Lorem Ipsum has been the industry's standard dummy text.
                                        </Typography>

                                        <Typography className={classes.Customplan_title} variant="h6" component="div">
                                            CONTACT US FOR SPECIFIC REQUIREMENT
                                        </Typography>

                                    </CardContent>
                                    <div className="text-center">
                                        <CustomButtons.OutlineButton onClick={() => history.push('')}>Buy Now</CustomButtons.OutlineButton>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="ypur_plan_1">
                </div>
                <div className="icon-effects-w3-4">
                    <img src="assets/images/bg1.png" />
                </div>
            </section >
        </div >
    )
}
