import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '40%',
        marginLeft: '30%',
        marginRight: '30%',
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
    return ['Datos Personales', 'Información de Envío', 'Forma de Pago'];
}



function getStepContent(step) {

    switch (step) {
        case 0:
        return  <form noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Nombre y apellido" variant="outlined" style={{margin: 15 , width: 500}}/><br />
                    <TextField type="email" id="outlined-full-width" label="E-Mail" variant="outlined" style={{margin: 15, width: 500}}/> <br />
                    <TextField type="text" id="outlined-basic" label="Teléfono" variant="outlined" style={{margin: 15}}/>
                </form>;
        case 1:
        return  <form noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Dirección" variant="outlined" style={{margin: 15 , width: 500}} /><br />
                    <TextField id="outlined-basic" label="Localidad" variant="outlined" style={{margin: 15 , width: 500}} /><br />
                    <FormControl component="fieldset" style={{margin: 15 , width: 500}}>
                        <FormLabel component="legend">Tipo de Envío</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1">
                            <FormControlLabel value="female" control={<Radio />} label="Retiro por Sucursal ($0)" />
                            <FormControlLabel value="male" control={<Radio />} label="Envío OCA ($280)" />
                            <FormControlLabel value="other" control={<Radio />} label="Envío Express ($530)" />
                        </RadioGroup>
                    </FormControl>
                </form>;
        case 2:
        return `Por el momento no se encuentra habilitado la opción de Pago Online, se abonará en Efectivo a contrareembolso cuando llegue su pedido`;
        default:
        return 'Unknown step';
    }
}

export default function CheckOut({state}) {
    
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
                    <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.button}
                    >
                        ATRAS
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}
                    >
                        SIGUIENTE
                    </Button>
                    </div>
                </div>
                </StepContent>
            </Step>
            ))}
        </Stepper>
        {activeStep === steps.length && (
            <Paper square elevation={0} className={classes.resetContainer}>
            <Typography style={{textAlign: "center"}}>Felicidades todos los campos estan Validados</Typography>
            <Button onClick={handleReset} variant="contained" color="secondary">
                FINALIZAR COMPRA
            </Button>
            </Paper>
        )}
        </div>
    );
}