import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return [
    'Question 1',
    'Question 2',
    'Question 3'
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'In an obvious nod to biology';
    case 1:
      return 'In a GA, potential hypotheses';
    case 2:
      return 'In a GA, each iteration';
    default:
      return 'Unknown step';
  }
}

function getQuestion(index) {
  switch (index) {
    case 0:
      return <div>
        <FormControl component="fieldset" /*className={classes.formControl}*/>
          <RadioGroup aria-label="options" name="gender1" /*value={value} onChange={handleChange}*/>
            <FormControlLabel value="a" control={<Radio />} label="A" />
            <FormControlLabel value="b" control={<Radio />} label="B" />
            <FormControlLabel value="c" control={<Radio />} label="C" />
            <FormControlLabel value="d" control={<Radio />} label="D" />
            <FormControlLabel value="e" control={<Radio />} label="E" />
          </RadioGroup>
        </FormControl>
      </div>;
    case 1:
      return <div>
        <FormControl component="fieldset" /*className={classes.formControl}*/>
          <RadioGroup aria-label="options" name="gender1" /*value={value} onChange={handleChange}*/>
            <FormControlLabel value="a" control={<Radio />} label="A1" />
            <FormControlLabel value="b" control={<Radio />} label="B1" />
          </RadioGroup>
        </FormControl>
      </div>;
    case 2:
      return <div>
        <FormControl component="fieldset" /*className={classes.formControl}*/>
          <RadioGroup aria-label="options" name="gender1" /*value={value} onChange={handleChange}*/>
            <FormControlLabel value="a" control={<Radio />} label="A2" />
            <FormControlLabel value="b" control={<Radio />} label="B2" />
            <FormControlLabel value="c" control={<Radio />} label="C2" />
          </RadioGroup>
        </FormControl>
      </div>;
    default:
      return 'Unknown step';
  }
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const [value, setValue] = React.useState('female');

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  {getQuestion(index)}
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
}