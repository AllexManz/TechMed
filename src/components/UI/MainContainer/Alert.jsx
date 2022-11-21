import React from 'react';
import {Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";

const Alert = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button sx={{mt: 10.5, ml: 5}} variant="outlined" onClick={handleClickOpen}>
                Upload File
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Want to upload your medical file?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        If you want to upload your medical information here you must upload it in a
                        .mp3 .wav or .ogg format
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>
                        <Button sx={{ml: 3}} onClick={handleClose} variant="contained" component="label">
                            Upload
                            <input hidden accept="image/*" multiple type="file" />
                        </Button>
                    </Box>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Alert;