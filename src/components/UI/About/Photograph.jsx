import React from 'react';
import {Paper} from "@mui/material";
import Patient1 from './images/patient1.png'
import Patient2 from './images/patient2.png'


const Photograph = (props) => {
    if (props.value === '1'){
        return (
            <Paper sx={{ml:15}} elevation={6}>
                <img src={Patient1} alt='' width="550" height="280"/>
            </Paper>
        );
    }
    else{
        return (
            <Paper sx={{ml:0, mt: 10}} elevation={6}>
                <img src={Patient2} alt='' width="550" height="280"/>
            </Paper>
        );
    }

};

export default Photograph;