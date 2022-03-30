import { useState, useEffect } from 'react';
import MakePayment from './MakePayment';
import PlanAddons from './PlanAddons';
import PlanOverview from './PlanOverview';
import Registration from './Registration';
import { Box, Stepper, Step, StepLabel, StepIconProps } from "@material-ui/core";
import { Check } from "@material-ui/icons";
import "./style.css";
import { Container, Row, Col } from 'react-bootstrap';

const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];

export default function GetStarted() {
  const [activeStep, setActiveStep] = useState(1)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }, [])

  function QontoStepIcon(props: StepIconProps) {
    const { active, completed, className } = props;

    return (
      <>
        {
          completed ? <Check className="QontoStepIcon-completedIcon" /> :
            <div className="QontoStepIcon-circle" />
        }
      </>
    );
  }

  return (
    <div>
      <section className="section-top-2">
        {/* <Container className="">
          <Row> */}
        <Box sx={{ width: '100%' }}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step className="stepper-css" key={label}>
                <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {
            activeStep === 1 ?
              <Registration next={handleNext} /> :
              activeStep === 2 ?
                <PlanAddons next={handleNext} back={handleBack} /> :
                activeStep === 3 ?
                  <PlanOverview next={handleNext} back={handleBack} /> :
                  activeStep === 4 ?
                    <MakePayment back={handleBack} /> : ""
          }
        </Box>
        {/* </Row>
        </Container> */}
      </section>
    </div>
  )
}
