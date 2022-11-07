import React from 'react';
import {Button, Stack} from "@mui/material";

/*
import {useNavigate} from "react-router-dom";


let navigate = useNavigate();
const routeChange = () =>{
    let path = `/about`;
    navigate(path);
}
 */

const MiddlePart = ({...props}) => {
    return (
            <Stack direction="row" spacing={4} justifyContent="space-around" {...props}>

                <Button color="inherit"
                        size="medium"
                        sx={{ flexGrow: 10 }}
                        onClick={() => window.location.href='/about'}
                >
                    About
                </Button>
                <Button color="inherit"
                        size="medium"
                        sx={{ flexGrow: 10 }}
                        onClick={() => window.location.href='/data'}
                >
                    Data
                </Button>
                <Button color="inherit"
                        size="medium"
                        sx={{ flexGrow: 10 }}
                        onClick={() => window.location.href='/ai'}
                >
                    AI
                </Button>
            </Stack>
    );
};

export default MiddlePart;