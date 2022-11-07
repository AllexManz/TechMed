import React from 'react';
import MyHeader from "../components/UI/Header/MyHeader";
import MainContainer from "../components/UI/MainContainer/MainContainer";
import About from "../components/UI/About/About";
import Facility from "../components/UI/Facility/Facility";
import Specialists from "../components/UI/Specialists/Specialists";
import Footer from "../components/UI/Footer/Footer";
import {Stack} from "@mui/material";

const Home = () => {
    return (
        <Stack direction='column' spacing={7} justifyContent="center">
            <MyHeader/>
            <MainContainer/>
            <About/>
            <Facility/>
            <Specialists/>
            <Footer/>
        </Stack>
    );
};

export default Home;