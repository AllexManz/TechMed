import React from 'react';
import MyIcon from "./MyIcon";
import {Stack, Typography} from "@mui/material";

const MyLogo = ({...props}) => {
    return (
        <Stack {...props} direction="row" alignItems="center" justifyContent="flex-start">
            <MyIcon/>

            <Typography variant="h4" component="div" >
                TechMed
            </Typography>
        </Stack>
    );
};

export default MyLogo;