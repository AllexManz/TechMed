import React from "react";
import {AppBar, Box, Button, Toolbar} from "@mui/material";
import MiddlePart from "./MiddlePart";
import MyLogo from "./MyLogo";


const MyHeader  = () => {
    return (
        <Box sx={{ flexGrow: 1, height: 70}}>
            <AppBar position="fixed">
                {/*Another color:
                sx={{backgroundColor: "#63DBBA"}}
                sx={{backgroundColor: "#00b5a0"}}
                */}
                <Toolbar sx={{display: 'flex', justifyContent: "space-between"}}>
                    <MyLogo/>

                    <MiddlePart sx={{mr: 20}}/>

                    <Button color="inherit" size="medium">
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default MyHeader;