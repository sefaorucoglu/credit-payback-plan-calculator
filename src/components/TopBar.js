import React from 'react';
import {AppBar, Toolbar, Typography} from "@mui/material";


const TopBar = () => {
    return (
        <div>
            <AppBar position="static" sx={{borderRadius:2}}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Kredi Geri Ödeme Planı Hesaplayıcı
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default TopBar;