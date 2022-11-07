import React from 'react';
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import {IconButton} from "@mui/material";

const MyIcon = () => {
    return (
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2}}
        >
            <AddCircleOutlineOutlinedIcon fontSize="large"/>
        </IconButton>
    );
};

export default MyIcon;