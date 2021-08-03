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
import './checkOut.css'

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

export default function CheckOut({mercadoPago, funcion, nombre, mail, telefono, direccion, localidad}) {
    
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    
    
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    function getStepContent(step) {
    
        switch (step) {
            case 0:
            return  <form noValidate autoComplete="off">
                        <TextField id="outlined-basic" label="Nombre y apellido" variant="outlined" style={{margin: 15 , width: 500}} onInput={(e) => {nombre (e.target.value)}}/><br />
                        <TextField type="email" id="outlined-full-width" label="E-Mail" variant="outlined" style={{margin: 15, width: 500}} onInput={(e) => {mail(e.target.value)}}/> <br />
                        <TextField type="text" id="outlined-basic" label="Teléfono" variant="outlined" style={{margin: 15}} onInput={(e) => {telefono(e.target.value)}}/>
                    </form>;
            case 1:
            return  <form noValidate autoComplete="off">
                        <TextField id="outlined-basic" label="Dirección" variant="outlined" style={{margin: 15 , width: 500}} onInput={(e) => {direccion(e.target.value)}}/><br />
                        <TextField id="outlined-basic" label="Localidad" variant="outlined" style={{margin: 15 , width: 500}} onInput={(e) => {localidad(e.target.value)}}/><br />
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
            return  <div className="mercadoPago">
                        <img src="https://firebasestorage.googleapis.com/v0/b/jackie-app-74305.appspot.com/o/mp.png?alt=media&token=c76cc288-bafb-4e6e-9f60-196dd447bbba" alt="Mercado Pago" />
                        <Button variant="contained" color="primary" onClick={mercadoPago}>IR A MERCADO PAGO</Button>
                    </div>;
            default:
            return 'Unknown step';
        }
    }
    
    return (
        <div className={classes.root} style={{marginBottom: 150}}>
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
            <Button onClick={funcion} variant="contained" color="secondary">
                FINALIZAR COMPRA
            </Button>
            </Paper>
        )}
        </div>
    );
}