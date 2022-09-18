import React from 'react';
import {AppBar, Button, IconButton, Toolbar, Typography} from "@mui/material";

function MenuIcon() {
    return null;
}

const TopBar = () => {
    return (
        <div>
            <AppBar position="static" sx={{borderRadius:2}}>
                <Toolbar>
                    <MenuIcon></MenuIcon>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Kredi Geri Ödeme Planı Hesaplayıcı
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default TopBar;