import React from 'react';
import {Box, Stack, Typography} from "@mui/material";
import MyHeader from "../components/UI/Header/MyHeader";
import Footer from "../components/UI/Footer/Footer";

const About = () => {
    return (
        <Stack direction='column' spacing={7} justifyContent="center">
            <MyHeader/>
            <Box>
                <Typography>
                    There would be some information about our project
                </Typography>
            </Box>
            <Footer/>
        </Stack>

    );
};

export default About;