import React from 'react';
import {Button, Stack} from "@mui/material";

const MiddlePart = ({...props}) => {
    return (
            <Stack direction="row" spacing={1} justifyContent="space-around" {...props}>
                <Button color="inherit" size="medium" sx={{ flexGrow: 10 }}>
                    About
                </Button>
                <Button color="inherit" size="medium" sx={{ flexGrow: 10 }}>
                    Data
                </Button>
                <Button color="inherit" size="medium" sx={{ flexGrow: 10 }}>
                    AI
                </Button>
            </Stack>
    );
};

export default MiddlePart;