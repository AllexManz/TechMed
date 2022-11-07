import React from 'react';
import {Box, Typography} from "@mui/material";
import Photograph from "./Photograph";

const About = () => {
    return (
        <Box sx={{pl: 5, height: 800}}>
            <Typography variant="h2" component="div" >
                About Us
            </Typography>
            <Box sx={{mt: 8, ml:8, display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                <Box sx={{maxWidth: 560, maxHeight: 280, display: "flex", flexDirection: 'column', justifyContent: 'center'}}>
                    <Typography variant="body1" component="div" >
                        "TechMed" - современная компания, следящая за новыми медицинскими технологическими трендами и изобретениями, и успешно внедряющая их в медицинскую инфраструктуру, компания, которая предоставляет европейский уровень сервиса по русским ценам.
                    </Typography>
                    <Typography variant="body1" component="div" sx={{mt: 5}}>
                        Компания "TechMed" - качество превыше всего
                    </Typography>

                </Box>

                <Photograph type='number' value='1'/>
                <Photograph type='number' value='2'/>

                <Box sx={{ml: 17, mt: 10, maxWidth: 560, maxHeight: 280, display: "flex", flexDirection: 'column', justifyContent: 'center'}}>
                    <Typography variant="body1" component="div" >
                        "Мы любим свою работу. Для нас важно, чтобы каждый пациент получил высококвалифицированную помощь наших врачей, а также высококлассный сервис европейского уровня"
                    </Typography>
                </Box>


            </Box>
        </Box>
    );
};

export default About;