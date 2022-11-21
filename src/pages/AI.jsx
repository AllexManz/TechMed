import React from 'react';
import {Box, Paper, Stack, Typography} from "@mui/material";
import MyHeader from "../components/UI/Header/MyHeader";
import Footer from "../components/UI/Footer/Footer";
import AiImage from '../components/images/AI_picture.jpg'

const Ai = () => {
    return (
        <Stack direction='column' spacing={7} justifyContent="center">
            <MyHeader/>
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
                <Paper elevation={6} sx={{width: 500}}>
                    <img src={AiImage} width='500' height='500' alt=''/>
                </Paper>
                <Box sx={{width: 700, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Typography variant='h3' sx={{}}>
                        AI for vocal analyzing
                    </Typography>

                    <Typography variant='h5' sx={{mt: 10}}>
                        We use modern technologies to diagnose diseases. Our main diagnostician is an
                        Artificial Intelligence that help our doctors to find abnormalities in patience's vocal cords.
                    </Typography>
                </Box>
            </Box>
            <Footer/>
        </Stack>
    );
};

export default Ai;