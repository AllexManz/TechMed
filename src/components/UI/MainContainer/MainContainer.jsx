import React from 'react';
import {Box, Button, Typography} from "@mui/material";
import CheckLine from "./CheckLine";
import Alert from "./Alert";

const MainContainer = () => {
    return (
        <Box sx={{pl: 5, height: 500, display: "flex", flexDirection: 'column', flexWrap: 'wrap'}}>
            <Typography variant="h2" component="div" >
                Cloud medical service
            </Typography>


            <CheckLine text="We keep our equipment up to date and use only modern technologies"/>
            <CheckLine text="Round-the-clock support"/>
            <CheckLine text="AI Technologies"/>

            <Box sx={{display: 'inline-flex'}}>
                <Button variant='contained' color="primary" size="large" sx={{mt: 10, ml: 5, justifyContent: "flex-start"}}>
                    Subscribe Now
                </Button>
                <Alert sx={{ml: 5}}/>
            </Box>


        </Box>
    );
};

export default MainContainer;