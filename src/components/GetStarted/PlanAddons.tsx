import React, { useState,useEffect } from 'react';
import CustomButtons from "../CustomButtons/Button";

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
  }
}));

type PlanAddonsProps = {
  next: () => void,
  back: () => void
}


export default function PlanAddons({ next, back }: PlanAddonsProps) {
  const classes = useStyles();

  const [addRegistration, SetaddRegistration] = useState({
    id: 0,
    business_name: "",
    owner_name: "",
    phone_number: "",
    mobile_number: "",
    whatsapp_number: "",
    business_number: "",
    address_line_1: "",
    address_line_2: "",
    country: "",
    province: "",
    email: "",
    registry_id: "",
    tax_identi_number: "",
    counter1: 0,
    counter2: 0,
    counter3: 0,
    check1: false,
    check2: false,
    check3: false,
    check4: false,
    check5: false,
    primplan: '4000',
    addon: '100',
    vat: '900',
    total: '5000',
    gtotal: '5000',
    schoollogo: '',
    disable1: true,
    disable2: true,
    disable3: true

  });
  const [addErrRegistration, SetErraddRegistration] = useState({
    business_nameErr: false,
    owner_nameErr: false,
    phone_numberErr: false,
    mobile_numberErr: false,
    whatsapp_numberErr: false,
    business_numberErr: false,
    address_line_1Err: false,
    address_line_2Err: false,
    countryErr: false,
    provinceErr: false,
    emailErr: false,
    registry_idErr: false,
    tax_identi_numberErr: false,
    counterErr: false
  });

  const handleDecrement1 = () => {
    SetaddRegistration(prevState => ({
      ...prevState,
      counter1: addRegistration.counter1 - 1
    }));
  };
  const handleIncrement1 = () => {
    SetaddRegistration(prevState => ({
      ...prevState,
      counter1: addRegistration.counter1 + 1
    }));
  };
  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }, [])
  return (
    <div>
      <section className="section-top-2">
        <Container className="">
          <Row className="mb-2">
            <Col lg="6" className="d-flex flex-column justify-content-center">
              <div>
                <img src="assets/images/svg/plan_and_addons.svg" width="100%" />
              </div>
            </Col>
            <Col lg="6" className="mt-2">
              <Card className="Main_Card">
                <LinearProgress />
                <CardMedia className={classes.card} component="div">

                  <Accordion className={classes.accordion}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon className={classes.ExpandMoreIcon} />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography>
                        Standard license selected</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      {/* <Typography variant="h5" component="div">
                        $4000/year
                      </Typography> */}
                    </AccordionDetails>
                  </Accordion>

                </CardMedia>
                <CardContent className={classes.CardContent}>
                  <Row>
                    <Col lg="9" sm="9" xs="9" className="with11">
                      <FormControlLabel name="checkbox1" control={<Checkbox color="primary" />} label="$10 per staff user / month charged yearly in advance." />
                    </Col>
                    <Col lg="3" sm="3" xs="3">
                      <div className="number">
                        <span className="minus" onClick={handleDecrement1} >-</span>
                        <input className="text-center" type="text" value={addRegistration.counter1} disabled={addRegistration.disable1} />
                        <span className="plus" onClick={handleIncrement1}>+</span>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="9" sm="9" xs="9" className="with11">
                      <FormControlLabel name="checkbox1" control={<Checkbox color="primary" />} label="$10 per instructor user / month charged yearly in advance." />
                    </Col>
                    <Col lg="3" sm="3" xs="3">
                      <div className="number">
                        <span className="minus" onClick={handleDecrement1} >-</span>
                        <input className="text-center" type="text" value={addRegistration.counter1} disabled={addRegistration.disable1} />
                        <span className="plus" onClick={handleIncrement1}>+</span>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="9" sm="9" xs="9" className="with11">
                      <FormControlLabel name="checkbox1" control={<Checkbox color="primary" />} label="Buy a student limit on the fly.$1 per student. Minimum buy 50." />
                    </Col>
                    <Col lg="3" sm="3" xs="3">
                      <div className="number">
                        <span className="minus" onClick={handleDecrement1} >-</span>
                        <input className="text-center" type="text" value={addRegistration.counter1} disabled={addRegistration.disable1} />
                        <span className="plus" onClick={handleIncrement1}>+</span>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="9" sm="9" xs="9" className="with11">
                      <FormControlLabel name="checkbox1" control={<Checkbox color="primary" />} label="Referral program modules - $50/year paid in advance." />
                    </Col>
                    <Col lg="3" sm="3" xs="3">
                      <div className="number">
                        <span className="minus" onClick={handleDecrement1} >-</span>
                        <input className="text-center" type="text" value={addRegistration.counter1} disabled={addRegistration.disable1} />
                        <span className="plus" onClick={handleIncrement1}>+</span>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="9" sm="9" xs="9" className="with11">
                      <FormControlLabel name="checkbox1" control={<Checkbox color="primary" />} label="Vehicle management -$250/year notifications for plate expiry, 
                                                insurance expiry, service due, expense reporting, fuel, repair." />
                    </Col>
                    <Col lg="3" sm="3" xs="3">
                      <div className="number">
                        <span className="minus" onClick={handleDecrement1} >-</span>
                        <input className="text-center" type="text" value={addRegistration.counter1} disabled={addRegistration.disable1} />
                        <span className="plus" onClick={handleIncrement1}>+</span>
                      </div>
                    </Col>
                  </Row>
                </CardContent>
                <CardContent>
                  <div className="text-end">
                    <CustomButtons.OutlineColorButton onClick={back}>Back</CustomButtons.OutlineColorButton>{' '}
                    <CustomButtons.ColorButton onClick={next}>Next</CustomButtons.ColorButton>
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
