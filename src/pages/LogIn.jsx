import React from 'react';
import MyHeader from "../components/UI/Header/MyHeader";
import {Button, Paper, Stack, TextField, Typography} from "@mui/material";


const LogIn = () => {
    return (
        <Stack direction='column' spacing={7} justifyContent="center" sx={{alignItems: 'center'}}>
            <MyHeader/>
            <Paper elevation={6} sx={{width: 350, display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                <Typography variant='h4' sx={{mt: 5}}>
                    Enter your data
                </Typography>
                <TextField id="outlined-basic" label="email" variant="outlined" margin='normal' sx={{mt: 5}}/>
                <TextField id="outlined-basic" label="password" type='password' variant="outlined" margin='normal' sx={{mb: 7}}/>
                <Button color="primary"
                        size="large"
                        variant='contained'
                        sx={{mb: 5}}
                >
                    Log In
                </Button>
            </Paper>
        </Stack>
    );
};

export default LogIn;