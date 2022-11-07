import React from 'react';
import {AppBar, Box, Icon, Toolbar, Typography} from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import MyLogo from "../Header/MyLogo";

const Footer = () => {
    return (

        <AppBar color="primary" sx={{bgcolor: 'primary.main', position:"absolute", bottom: -2560, top: 3120}}>
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                <MyLogo sx={{}}/>

                <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <Icon
                        size="large"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, fontSize: 40}}
                    >
                        <AccessTimeIcon sx={{fontSize: 40}}/>
                    </Icon>

                    <Typography sx={{fontSize: 15}}>
                        Working Time: <br/> 10:45 - 11:50
                    </Typography>
                </Box>

                <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <Icon
                        size="large"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, fontSize: 40}}
                    >
                        <PlaceIcon sx={{fontSize: 40}}/>
                    </Icon>

                    <Typography sx={{fontSize: 15}}>
                        Main Office: <br/> 115409, Москва, Каширское ш, 31
                    </Typography>
                </Box>

                <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <Icon
                        size="large"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, fontSize: 40}}
                    >
                        <PhoneIcon sx={{fontSize: 40}}/>
                    </Icon>

                    <Typography sx={{fontSize: 15}}>
                        +7(903) 627-29-29
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>

    );
};

export default Footer;