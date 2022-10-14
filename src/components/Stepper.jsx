import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { FiCheck } from 'react-icons/fi'
import { MdDomainVerification } from 'react-icons/md'
import { BiDetail } from 'react-icons/bi'
import { GrMail } from 'react-icons/gr'
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';

const steps = new Array(4).fill('');

export default function HorizontalLinearStepper({ activeStep }) {

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep} connector={<ColorlibConnector />} alternativeLabel>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    
                    return (
                        <Step key={index} {...stepProps}>
                            <StepLabel {...labelProps} StepIconComponent={ColorlibStepIcon} ></StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
        </Box>
    );
}

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 15,
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundColor: '#2196F3',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundColor: '#2196F3',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 3,
        border: 0,
        backgroundColor: '#2196F3',
        borderRadius: 1,
    },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 40,
    height: 40,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
        backgroundColor: '#2196F3',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    }),
    ...(ownerState.completed && {
        backgroundColor: '#2196F3',
    }),
}));

function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
        1: <GrMail />,
        2: <MdDomainVerification />,
        3: <BiDetail />,
        4: <FiCheck />
    };

    return (
        <ColorlibStepIconRoot ownerState={{ completed, active }} className={`text-lg ${className}`}>
            {icons[String(props.icon)]}
        </ColorlibStepIconRoot>
    );
}