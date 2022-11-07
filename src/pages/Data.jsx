import React from 'react';
import {Box, Stack, Typography} from "@mui/material";
import MyHeader from "../components/UI/Header/MyHeader";
import Footer from "../components/UI/Footer/Footer";

const Data = () => {
    return (
        <Stack direction='column' spacing={7} justifyContent="center">
            <MyHeader/>
            <Box>
                <Typography>
                    There is some information about the data we use in our project
                </Typography>
            </Box>
            <Footer/>
        </Stack>
    );
};

export default Data;