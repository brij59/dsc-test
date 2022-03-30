import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CustomButtons from "../CustomButtons/Button";
import { useHistory } from "react-router-dom";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    thank_you: {
        textAlign: 'center',
        marginBottom: '80px',
    },
    mainTitle: {
        fontSize: '60px',
        fontWeight: 700,
        color: '#000000',
    },
    subTitle: {
        fontSize: '24px',
        fontWeight: 700,
        marginTop: '15px',
    },
    f_Til: {
        fontSize: '20px',
        fontWeight: 700,
        marginTop: '5px',
    }
}));

export default function Contacting_us() {
    const history = useHistory();
    const classes = useStyles();
    useEffect(() => {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }, [])
    return (
        <div>
            <section className="section-top-1" >
                <div className={classes.thank_you}>
                    <Typography className={classes.mainTitle} variant="h3" component="div">
                        Thank You!
                    </Typography>
                    <Typography className={classes.subTitle} variant="h4" component="div">
                        For Contacting us!
                    </Typography>
                    <Typography className="mt-2" component="div">
                        Our executive will contact you as soon as possible.
                    </Typography>

                    <Container>
                        <Row>
                            <Col lg="6" className="offset-md-3" sm="12">
                                <div className="stline"></div>
                            </Col>
                        </Row>
                    </Container>
                    <Typography className={classes.f_Til} variant="h4" component="div">
                        Would you like more help?
                    </Typography>
                    <div className="mt-4">
                        <CustomButtons.OutlineColorButton onClick={() => history.push('get-started')}>May be later</CustomButtons.OutlineColorButton>{' '}
                        <CustomButtons.ColorButton onClick={() => history.push('about')}>Contact us</CustomButtons.ColorButton>
                    </div>
                </div>
            </section>
        </div>
    )
}
