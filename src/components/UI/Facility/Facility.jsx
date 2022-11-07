import React from 'react';
import {Box, Typography} from "@mui/material";
import Service from "./Service";

const Facility = () => {
    return (
        <Box sx={{pl: 5, height: 800}}>
            <Typography variant="h2" component="div" >
                Our Services
            </Typography>
            <Box sx={{mt: 8, ml: 5, display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                <Service value='1'/>
                <Service value='2'/>
                <Service value='3'/>
                <Service value='4'/>
                <Service value='5'/>
                <Service value='6'/>
                <Service value='7'/>
                <Service value='8'/>
            </Box>
        </Box>
    );
};

export default Facility;