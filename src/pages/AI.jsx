import React from 'react';
import {Box, Stack, Typography} from "@mui/material";
import MyHeader from "../components/UI/Header/MyHeader";
import Footer from "../components/UI/Footer/Footer";

const Ai = () => {
    return (
        <Stack direction='column' spacing={7} justifyContent="center">
            <MyHeader/>
            <Box>
                <Typography>
                    There would be some information about AI models we use in our project
                </Typography>
            </Box>
            <Footer/>
        </Stack>
    );
};

export default Ai;