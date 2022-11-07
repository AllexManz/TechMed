import React from 'react';
import {Paper, Typography} from "@mui/material";
import Alex from './images/Alex.png';

const Specialist = (props) => {
    return (
        <Paper elevation={6} sx={{width: 272, height: 430, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <img src={Alex} alt='' width='272' height='364'/>
            <Typography variant="h4" component="div" sx={{mt: 1.5}}>
                {props.position}
            </Typography>
        </Paper>
    );
};

export default Specialist;