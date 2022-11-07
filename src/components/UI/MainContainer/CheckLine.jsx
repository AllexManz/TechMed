import React from 'react';
import {Box, Icon, Typography} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const CheckLine = (props) => {
    return (
        <Box sx={{display: "inline-flex", flexDirection: "row", mt: 3}}>
            <Icon
                fontSize="large"
                color="string"
                sx={{ mr: 2}}
            >
                <CheckIcon fontSize="large"/>
            </Icon>

            <Typography variant="h6" component="div" >
                {props.text}
            </Typography>
        </Box>
    );
};

export default CheckLine;