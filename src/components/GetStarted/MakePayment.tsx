import { useState, useEffect } from 'react';
import CustomButtons from "../CustomButtons/Button";
import { useHistory } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import { DropzoneArea } from 'material-ui-dropzone';
import LinearProgress from '@material-ui/core/LinearProgress';

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckIcon from '@material-ui/icons/Check';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import LockIcon from '@material-ui/icons/Lock';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({

  card: {
    backgroundColor: '#000000',
  },
  accordion: {
    backgroundColor: '#000000',
    color: '#ffffff',
  },
  ExpandMoreIcon: {
    color: '#ffffff',
  },
  CardContent: {
    minHeight: '600px'
  },
  downlink: {
    color: '#000000',
    textDecoration: 'none',

    '&:hover': {
      color: '#000000',
    },
  }
}));

type MakePaymentProps = {
  back: () => void
}


export default function MakePayment({ back }: MakePaymentProps) {
  const classes = useStyles();
  const history = useHistory();
  
  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }, [])
  
  return (
    <div>
      <section id="features" className="section-top-1">
        <Container className="">
          <Row className="mb-2">
            <Col lg="6">
              <div>
                <img src="assets/images/svg/make_payment.svg" width="100%" />
              </div>
            </Col>
            <Col lg="6" className="mt-2">
              <Card className="Main_Card">
                <LinearProgress />
                <CardContent className={classes.CardContent}>
                  <Row className="">
                    <Typography className="pay" variant="h5" component="div">
                      Payment Information (required)
                    </Typography>
                  </Row>
                  <Row className="mt-2">
                    <Typography className="Sttext2" variant="body2">
                      <LockIcon />  SECURE SSL ENCRYPTED PAYMENT POWERED BY PAYMENT GATEWAY
                    </Typography>
                  </Row>
                  <div className="paymentWrap mt-3">
                    <div className="btn-group paymentBtnGroup btn-group-justified" data-toggle="buttons">

                      <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                        <FormControlLabel value="checkbox" control={<Radio color="primary" />} label={
                          <img
                            src='assets/images/visa.png'
                            className='img-fluid'
                            alt='tst'
                          />
                        } />
                        <FormControlLabel value="male" control={<Radio color="primary" />} label={
                          <img
                            src='assets/images/mastro.png'
                            className='img-fluid'
                            alt='tst'
                          />
                        } />
                        <FormControlLabel value="other" control={<Radio color="primary" />} label={
                          <img
                            src='assets/images/paypal.png'
                            className='img-fluid'
                            alt='tst'
                          />
                        } />
                      </RadioGroup>
                    </div>
                  </div>
                  <Row className="mt-3">
                    <Typography className="StLicence" variant="h6" component="div">
                      CREDIT CAD / DEBIT CARD
                    </Typography>
                  </Row>
                  <Row className="mt-1">
                    <Col lg="12" sm="12">
                      <TextField id="holder_name" fullWidth name="holder_name" label="Card holder Name" placeholder="Enter Card holder Name" multiline variant="standard" />
                    </Col>
                  </Row>
                  <Row className="mt-1">
                    <Col lg="12" sm="12">
                      <TextField id="card_number" fullWidth name="card_number" label="Card Number" placeholder="Enter Card Number" multiline variant="standard" />
                    </Col>
                  </Row>
                  <Row className="mt-1">
                    <Col lg="4" sm="12">
                      <TextField id="add_month" fullWidth name="add_month" label="And Month / Year" placeholder="And Month / Year" multiline variant="standard" />
                    </Col>
                    <Col lg="4" sm="12">
                      <TextField id="cvv_number" fullWidth name="cvv_number" label="CVV Number" placeholder="CVV Number" multiline variant="standard" />
                    </Col>
                    <Col lg="4" sm="12">
                      <TextField id="add_month" fullWidth name="add_month" label="And Month / Year" placeholder="And Month / Year" multiline variant="standard" />
                    </Col>
                  </Row>
                  <Row className="mt-1">
                    <Col lg="12" sm="12">
                      <FormControlLabel name="checkbox1" control={<Checkbox color="primary" />} label="Save Card for Fature" />
                    </Col>
                  </Row>
                  <Row className="mt-1">
                    <Col lg="6" sm="12">
                      <FormControlLabel name="checkbox1" control={<Checkbox color="primary" />} label="I agree Terms & Conditions" />
                    </Col>
                    <Col lg="6" sm="12">
                      <Link to="/" className={classes.downlink}>

                        <Typography component="div" >
                          <i className="far fa-download"></i> Download Terms & Conditions PDF
                        </Typography>
                      </Link>
                    </Col>
                  </Row>
                  <div className="mt-3 text-end">

                  </div>
                </CardContent>
                <CardContent>
                  <div className="mt-3 text-end">
                    <CustomButtons.OutlineColorButton onClick={back}>Back</CustomButtons.OutlineColorButton>{' '}
                    <CustomButtons.ColorButton onClick={() => history.push('thank-you')}>Pay Now</CustomButtons.ColorButton>
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
