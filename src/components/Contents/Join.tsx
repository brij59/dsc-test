import React from 'react';
import { Navbar, Nav, Form, Container, Row, Col } from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CustomButtons from "../CustomButtons/Button";
import { useHistory } from "react-router-dom";

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
    card_join: {
        backgroundColor: '#ffffff',
        boxShadow: '2px 2px 10px #9E9E9E',
        marginTop:'15px',
    },
    num_title: {
        fontWeight: 700,
        color: '#000000',
        fontSize:'30px',
    },
}));

export default function Join() {
    const classes = useStyles();
    const history = useHistory();
    return (
        <div>
            <section id="features" className="section-top-1">

                <Container>
                    <Row>
                        <div className={classes.featur}>
                            <Typography className={classes.mainTitle} variant="h3" component="div">
                                Recently Joined Schools
                            </Typography>
                            <Typography className={classes.subTitle} component="div">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />
                                Lorem Ipsum has been the industry's standard dummy text.
                            </Typography>
                        </div>
                    </Row>
                    <Row className="mt-4">
                        <div id="testimonial-slider" className="owl-carousel">
                            <div className="testimonial">
                                <Row>
                                    <Col lg="3" sm="3">
                                        <div className="pic">
                                            <img src="assets/images/icon1.png" />
                                        </div>
                                    </Col>
                                    <Col lg="9" sm="9" className="d-flex flex-column justify-content-center">
                                        <p className="description">
                                            Blue Mountain Driving School
                                        </p>
                                    </Col>
                                </Row>
                            </div>
                            <div className="testimonial">
                                <Row>
                                    <Col lg="3" sm="3">
                                        <div className="pic">
                                            <img src="assets/images/icon2.png" />
                                        </div>
                                    </Col>
                                    <Col lg="9" sm="9" className="d-flex flex-column justify-content-center">
                                        <p className="description">
                                            The Difference Driving School
                                        </p>
                                    </Col>
                                </Row>
                            </div>
                            <div className="testimonial">
                                <Row>
                                    <Col lg="3" sm="3">
                                        <div className="pic">
                                            <img src="assets/images/icon1.png" />
                                        </div>
                                    </Col>
                                    <Col lg="9" sm="9" className="d-flex flex-column justify-content-center">
                                        <p className="description">
                                            Blue Mountain Driving School
                                        </p>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>
            <section className="section-top-1 card_join_1">
                <div className="icon-effects-w3-5">
                    <img src="assets/images/bg2.png" />
                </div>
                <Container>
                    <Row>
                        <Col lg="4" sm="12">
                            <Card className={classes.card_join}>
                                <CardContent>
                                    <Row>
                                        <Col lg="4">
                                            <img src="assets/images/count2.png" />
                                        </Col>
                                        <Col lg="8" className="d-flex flex-column justify-content-center">
                                            <Typography className={classes.num_title} gutterBottom variant="h6" component="div">
                                                1840+
                                            </Typography>
                                            <Typography gutterBottom component="div">
                                                Schools Joined
                                            </Typography>
                                        </Col>
                                    </Row>
                                </CardContent>
                            </Card>
                        </Col>
                        <Col lg="4" sm="12">
                            <Card className={classes.card_join}>
                                <CardContent>
                                    <Row>
                                        <Col lg="4">
                                            <img src="assets/images/count2.png" />
                                        </Col>
                                        <Col lg="8" className="d-flex flex-column justify-content-center">
                                            <Typography className={classes.num_title} gutterBottom variant="h6" component="div">
                                                16722+
                                            </Typography>
                                            <Typography gutterBottom component="div">
                                                Students
                                            </Typography>
                                        </Col>
                                    </Row>
                                </CardContent>
                            </Card>
                        </Col>
                        <Col lg="4" sm="12">
                            <Card className={classes.card_join}>
                                <CardContent>
                                    <Row>
                                        <Col lg="4">
                                            <img src="assets/images/count2.png" />
                                        </Col>
                                        <Col lg="8" className="d-flex flex-column justify-content-center">
                                            <Typography className={classes.num_title} gutterBottom variant="h6" component="div">
                                                38+
                                            </Typography>
                                            <Typography gutterBottom component="div">
                                                Lorem Ipsum
                                            </Typography>
                                        </Col>
                                    </Row>
                                </CardContent>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="text-center mt-4">
                        <Col lg="12">
                            <div className="text-center mt-4">
                                <CustomButtons.ColorButton onClick={() => history.push('get-started')}>Get Started</CustomButtons.ColorButton>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}
