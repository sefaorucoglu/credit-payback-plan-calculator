import React from 'react';
import {Box, Grid, TextField, Typography} from "@mui/material";

const OutputForm = () => {
    const [totalCashback, setTotalCashback] = React.useState('0');
    const [monthlyCashback, setMonthlyCashback] = React.useState('0');
    const [totalTaxValue, setTotalTaxValue] = React.useState('0');
    return (
        <div style={{display: 'flex', justifyContent: 'center',padding:15}}>
            <Grid sx={{border: '1px solid grey', borderRadius: 2, mt: '20px', width: '650px'}}>
                <div style ={{padding :10,display:'flex',justifyContent: 'space-around'}}>
                    {/*<TextField
                        disabled
                        placeholder={totalCashback}
                        variant="outlined"
                        style={{maxWidth:150}}
                    />
                    <TextField
                        disabled
                        placeholder={monthlyCashback}
                        variant="outlined"
                        style={{maxWidth:150}}
                    />
                    <TextField
                        disabled
                        placeholder={totalTaxValue}
                        variant="outlined"
                        sx={{maxWidth:150}}
                    />*/}



                    <div>
                        <Typography component="div" variant="body2" sx={{display:'flex',justifyContent:'center',fontFamily:'sans',opacity:'70%'}}>
                            Geri ödeme tutarı
                        </Typography>
                        <Box sx={{border:'1px solid black', width:120,borderRadius:2,opacity:'50%'}}>
                            <Typography component="div" variant="h6" sx={{display:'flex',justifyContent:'flex-end'}}>
                                {totalTaxValue}
                            </Typography>
                        </Box>
                    </div>
                    <div>
                        <Typography component="div" variant="body2" sx={{display:'flex',justifyContent:'center',fontFamily:'sans',opacity:'70%'}}>
                            Aylık taksit tutarı
                        </Typography>
                        <Box sx={{border:'1px solid black', width:120,borderRadius:2,opacity:'50%'}}>
                            <Typography component="div" variant="h6" sx={{display:'flex',justifyContent:'flex-end'}}>
                                {totalTaxValue}
                            </Typography>
                        </Box>
                    </div>
                    <div>
                        <Typography component="div" variant="body2" sx={{display:'flex',justifyContent:'center',fontFamily:'sans',opacity:'70%'}}>
                            Toplam vergi tutarı
                        </Typography>
                        <Box sx={{border:'1px solid black', width:120,borderRadius:2,opacity:'50%'}}>
                            <Typography component="div" variant="h6" sx={{display:'flex',justifyContent:'flex-end'}}>
                                {totalTaxValue}
                            </Typography>
                        </Box>
                    </div>
                </div>
            </Grid>
        </div>
    );
};

export default OutputForm;