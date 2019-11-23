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
  return ['Question 1',
    'Question 2',
    'Question 3'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `In an obvious nod to biology, a chromosome is a single hypothesis of which many make up a population. `;
    case 1:
      return 'In a GA, potential hypotheses are made up of chromosomes, which are, in turn, made up of genes. Practically, in a GA, chromosomes are generally represented as binary strings, a series of 1s and 0s, which denote inclusion or exclusion of particular items represented by position in the string. A gene is a single bit within such a chromosome.\n' +
        '\n' +
        'For example, the Hello World of genetic algorithms is often considered to be the knapsack problem. In this problem, there would be a set of N items which may or may not be included in a thief\'s knapsack, and these N items would be represented as a binary string (the chromosome) N characters long, with each position in the string representing a particular item and the positional bit (1 or 0; the gene) denoting whether the item is included in the particular hypothesis or not.\n' +
        '\n' +
        'Population → all of the proposed solutions to the knapsack problem of the current generation (iteration of the algorithm)\n' +
        '\n' +
        'Chromosome → a particular proposed solution to the knapsack problem\n' +
        '\n' +
        'Gene → positional representation of a particular item (and its inclusion or exclusion) in the knapsack of a particular solution to the knapsack problem.';
    case 2:
      return `In a GA, each iteration, or generation, results in a series of possible hypotheses for best approximating a function, and the population refers to the complete set or pool of these generated hypotheses after a given iteration.`;
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
                  <div>
                    <FormControl component="fieldset" className={classes.formControl}>
                      <RadioGroup aria-label="options" name="gender1" value={value} onChange={handleChange}>
                        <FormControlLabel value="a" control={<Radio />} label="A" />
                        <FormControlLabel value="b" control={<Radio />} label="B" />
                        <FormControlLabel value="c" control={<Radio />} label="C" />
                        <FormControlLabel value="d" control={<Radio />} label="D" />
                        <FormControlLabel value="e" control={<Radio />} label="E" />
                      </RadioGroup>
                    </FormControl>
                  </div>

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