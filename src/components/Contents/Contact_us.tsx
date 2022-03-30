import React, { useState,useEffect } from 'react';
import CustomButtons from "../CustomButtons/Button";
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Container, Row, Col } from 'react-bootstrap';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import LinearProgress from '@material-ui/core/LinearProgress';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    CardContent: {
        minHeight: '45 0px'
    }
}));

export default function Contact_us() {
    useEffect(() => {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      }, [])
    const classes = useStyles();
    const history = useHistory();
    return (
        <div>
            <section className="section-top-2">
                <Container className="">
                    <Row>
                        <Col lg="6">
                            <div>
                                <img src="assets/images/svg/contact_us.svg" />
                            </div>
                        </Col>
                        <Col lg="6">
                        <Alert icon={false} severity="success">Thank you for conatct us, Our executive will contact you as soon as possible</Alert>
                        <br/>
                            <Card className="Main_Card">
                                <LinearProgress />
                                <CardContent className={classes.CardContent}>
                                    <Row>
                                        <Col lg="12" sm="12">
                                            <TextField id="school_name" name="holder_name" fullWidth label="School name" placeholder="Enter School name" multiline variant="standard" />
                                        </Col>
                                    </Row>
                                    <Row className="mt-1">
                                        <Col lg="12" sm="12">
                                            <TextField id="your_name" name="your_name" label="Your name" fullWidth placeholder="Enter Your name" multiline variant="standard" />
                                        </Col>
                                    </Row>
                                    <Row className="mt-1">
                                        <Col lg="12" sm="12">
                                            <TextField id="mobile_number" name="mobile_number" fullWidth label="Mobile number" placeholder="Enter Mobile number" multiline variant="standard" />
                                        </Col>
                                    </Row>
                                    <Row className="mt-1">
                                        <Col lg="12" sm="12">
                                            <TextField id="email" name="Email" label="email" fullWidth placeholder="Enter You Email" multiline variant="standard" />
                                        </Col>
                                    </Row>
                                    <Row className="mt-1">
                                        <Col lg="12" sm="12">
                                            <TextField id="other_details" name="other_details" fullWidth rows={10} label="Other detail " placeholder="Enter Other Details of your Requirements" multiline variant="standard" />
                                        </Col>
                                    </Row>
                                </CardContent>
                                <CardContent>
                                    <div className="mt-3 text-end">
                                        <CustomButtons.OutlineColorButton onClick={() => history.push('thank_you')}> Back </CustomButtons.OutlineColorButton>{' '}
                                        <CustomButtons.ColorButton onClick={() => history.push('contacting-us')}> Submit </CustomButtons.ColorButton>
                                    </div>
                                </CardContent>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}
