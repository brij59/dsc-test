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
import CheckIcon from '@material-ui/icons/Check';

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

type PlanOverviewProps = {
  next: () => void,
  back: () => void
}

export default function PlanOverview({ next, back }: PlanOverviewProps) {

  const classes = useStyles();
  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }, [])
  return (
    <div>
      <section className="section-top-2">
        <Container className="">
          <Row className="mb-2">
            <Col lg="6">
              <div>
                <img src="assets/images/svg/plan_overview.svg" width="100%" />
              </div>
            </Col>
            <Col lg="6" className="mt-2">
              <Card className="Main_Card">
                <LinearProgress />
                <CardContent className={classes.CardContent}>
                  <Card className="geatchoice">
                    <CardContent>
                      <Typography className="choicetitle" variant="h5" component="div">
                        Great Choice
                      </Typography>
                      <Typography className="StLicence" variant="h6" component="div">
                        Standard Licence
                      </Typography>
                      <Typography className="Sttext" variant="body2">
                        Lorem Ipsum is simply dummy text of the printing and typesetting, Lorem Ipsum has been the industry's standard dummy text.
                      </Typography>
                      <div className="stline"></div>

                      <Typography className="Sttext1" variant="body2">
                        <CheckIcon />  $10 per staff user / month charged yearly in advance.
                      </Typography>
                      <Typography className="Sttext1" variant="body2">
                        <CheckIcon />  $10 per instructor / month charged yearly in advance.
                      </Typography>
                      <Typography className="Sttext1" variant="body2">
                        <CheckIcon />  Buy a student limit on the fly.$1 per student. Minimum buy 50.
                      </Typography>
                      <Typography className="Sttext1" variant="body2">
                        <CheckIcon />  Referral program modules - $50/year paid in advance.
                      </Typography>
                      <Typography className="Sttext1" variant="body2">
                        <CheckIcon />  Vehicle management -$250/year notifications for plate expiry,
                        insurance expiry, service due, expense reporting, fuel, repair.
                      </Typography>
                      <Typography className="StLicence" variant="h6" component="div">
                        Order Summary
                      </Typography>
                      <Row>
                        <Col lg="8" sm="8" xs="8">
                          <Typography className="Sttext1" variant="body2">
                            Premium plan
                          </Typography>
                        </Col>
                        <Col lg="4" sm="4" xs="4" className="summary">
                          <Typography className="text-end" variant="body2">
                            $4000
                          </Typography>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="8" sm="8" xs="8">
                          <Typography className="Sttext1" variant="body2">
                            Addons
                          </Typography>
                        </Col>
                        <Col lg="4" sm="4" xs="4" className="summary">
                          <Typography className="text-end" variant="body2">
                            $120
                          </Typography>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="8" sm="8" xs="8">
                          <Typography className="Sttext1" variant="body2">
                            Vat
                          </Typography>
                        </Col>
                        <Col lg="4" sm="4" xs="4" className="summary">
                          <Typography className="text-end" variant="body2">
                            $412
                          </Typography>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="8" sm="8" xs="8">
                          <Typography className="Sttext1" variant="body2">
                            Total
                          </Typography>
                        </Col>
                        <Col lg="4" sm="4" xs="4" className="summary">
                          <Typography className="text-end" variant="body2">
                            $4532
                          </Typography>
                        </Col>
                      </Row>
                      <div className="stline"></div>
                      <Row>
                        <Col lg="8" sm="8" xs="8">
                          <Typography className="StLicence" variant="h6" component="div">
                            Grand Total
                          </Typography>
                        </Col>
                        <Col lg="4" sm="4" xs="4" className="summary">
                          <Typography className="text-end" variant="h6" component="div">
                            $4532
                          </Typography>
                        </Col>
                      </Row>
                    </CardContent>
                  </Card>
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
