import React from 'react';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import MasksIcon from '@mui/icons-material/Masks';
import HealingIcon from '@mui/icons-material/Healing';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import MedicationIcon from '@mui/icons-material/Medication';
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import {Icon, Paper, Typography} from "@mui/material";

const Service = (props) => {
    if (props.value === '1'){
        return (
            <Paper elevation={6} sx={{m: 3, width: 272, height: 272, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Icon
                    size="large"
                    edge="start"
                    color="inherit"
                    sx={{m:1, fontSize: 120}}
                >
                    <VaccinesIcon sx={{fontSize: 120}}/>
                </Icon>
                <Typography variant="h5" component="div" sx={{mt: 5}}>
                    Vaccination
                </Typography>
            </Paper>
        );
    }

    if (props.value === '2'){
        return (
            <Paper elevation={6} sx={{m: 3, width: 272, height: 272, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Icon
                    size="large"
                    edge="start"
                    color="inherit"
                    sx={{m:1, fontSize: 120}}
                >
                    <BloodtypeIcon sx={{fontSize: 120}}/>
                </Icon>
                <Typography variant="h5" component="div" sx={{mt: 5}}>
                    Donor Service
                </Typography>
            </Paper>
        );
    }

    if (props.value === '3'){
        return (
            <Paper elevation={6} sx={{m: 3, width: 272, height: 272, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Icon
                    size="large"
                    edge="start"
                    color="inherit"
                    sx={{m:1, fontSize: 120}}
                >
                    <MasksIcon sx={{fontSize: 120}}/>
                </Icon>
                <Typography variant="h5" component="div" sx={{mt: 5}}>
                    Personal Protection
                </Typography>
            </Paper>
        );
    }

    if (props.value === '4'){
        return (
            <Paper elevation={6} sx={{m: 3, width: 272, height: 272, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Icon
                    size="large"
                    edge="start"
                    color="inherit"
                    sx={{m:1, fontSize: 120}}
                >
                    <HealingIcon sx={{fontSize: 120}}/>
                </Icon>
                <Typography variant="h5" component="div" sx={{mt: 5}}>
                    Well-known Drugs
                </Typography>
            </Paper>
        );
    }

    if (props.value === '5'){
        return (
            <Paper elevation={6} sx={{m: 3, width: 272, height: 272, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Icon
                    size="large"
                    edge="start"
                    color="inherit"
                    sx={{m:1, fontSize: 120}}
                >
                    <MonitorHeartIcon sx={{fontSize: 120}}/>
                </Icon>
                <Typography variant="h5" component="div" sx={{mt: 5}}>
                    Vitals Monitoring
                </Typography>
            </Paper>
        );
    }

    if (props.value === '6'){
        return (
            <Paper elevation={6} sx={{m: 3, width: 272, height: 272, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Icon
                    size="large"
                    edge="start"
                    color="inherit"
                    sx={{m:1, fontSize: 120}}
                >
                    <MedicalInformationIcon sx={{fontSize: 120}}/>
                </Icon>
                <Typography variant="h5" component="div" sx={{mt: 5}}>
                    Ambulances
                </Typography>
            </Paper>
        );
    }

    if (props.value === '7'){
        return (
            <Paper elevation={6} sx={{m: 3, width: 272, height: 272, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Icon
                    size="large"
                    edge="start"
                    color="inherit"
                    sx={{m:1, fontSize: 120}}
                >
                    <MedicationIcon sx={{fontSize: 120}}/>
                </Icon>
                <Typography variant="h5" component="div" sx={{mt: 5}}>
                    Home Kits
                </Typography>
            </Paper>
        );
    }

    if (props.value === '8'){
        return (
            <Paper elevation={6} sx={{m: 3, width: 272, height: 272, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Icon
                    size="large"
                    edge="start"
                    color="inherit"
                    sx={{m:1, fontSize: 120}}
                >
                    <MedicationLiquidIcon sx={{fontSize: 120}}/>
                </Icon>
                <Typography variant="h5" component="div" sx={{mt: 5}}>
                    Vitamins & Nutrition
                </Typography>
            </Paper>
        );
    }
};

export default Service;