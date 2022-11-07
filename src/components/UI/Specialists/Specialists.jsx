import React from 'react';
import {Box, Typography} from "@mui/material";
import Specialist from "./Specialist";

const Specialists = () => {
    return (
        <Box sx={{pl: 5, height: 800}}>
            <Typography variant="h2" component="div" >
                Our Specialists
            </Typography>

            <Box sx={{mt: 8, display: 'flex', justifyContent: 'space-around', flexDirection: 'row', flexWrap: 'wrap'}}>
                <Specialist position='CEO'/>
                <Specialist position='Frontend Dev'/>
                <Specialist position='Backend Dev'/>
            </Box>
        </Box>
    );
};

export default Specialists;