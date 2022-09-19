import React, {useContext, useState} from 'react';
import {TextField, Grid, Button, Select, MenuItem, InputLabel, FormControl, FormHelperText} from "@mui/material";
import {InputContext} from "../contexts/InputContext";


const InputForm = () => {
    const context = useContext(InputContext);
    const handleChangeTaxType = (event) => {
        context.setTaxType(event.target.value);
    };
    const handleChangeRange = (event) => {
        context.setRange(event.target.value);
    };




    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Grid sx={{border: '1px solid grey', borderRadius: 2, mt: '20px', width: '600px'}}>
                <div className="Input Row" style={{padding: 10}}>
                    <TextField
                        id="credit-amount-input"
                        label="Kredi Tutarı(Ana Para)"
                        variant="outlined"
                        fullWidth={true}
                        onChange={(e)=>{
                            context.setCreditAmount(e.target.value);
                        }
                    }
                    />
                </div>
                <div className="Input Row" style={{display: 'flex', justifyContent: 'space-around'}}>
                    <TextField
                        id="installment-value-input"
                        label="Taksit Sayısı"
                        variant="outlined"
                        fullWidth={false}
                        sx={{width:150}}
                        onChange={(e)=>{
                            context.setInstallmentValue(e.target.value);
                        }
                        }

                    />
                    <TextField id="profit-ratio-input"
                               label="Kar Oranı"
                               variant="outlined"
                               fullWidth={false}
                               sx={{width:150}}
                               onChange={(e)=>{
                                   context.setProfitRatio(e.target.value);
                               }
                               }
                    />
                </div>
                <div className="Input Row"
                     style={{display: 'flex', justifyContent: 'space-around',marginTop:10}}
                >
                    <FormControl sx={{minWidth: 100, maxWidth: 150}}>
                        <InputLabel >Taksit Aralığı</InputLabel>
                        <Select
                            id="range-selector"
                            label="Range"
                            onChange={handleChangeRange}
                        >
                            <MenuItem value={"Haftalık"}>Haftalık</MenuItem>
                            <MenuItem value={"Aylık"}>Aylık</MenuItem>
                            <MenuItem value={"Yıllık"}>Yıllık</MenuItem>
                        </Select>
                        <FormHelperText>(Seçim olmaması durumda varsayılan değer "Aylık")</FormHelperText>
                    </FormControl>
                    <TextField id="profit-ratio-input"
                               label="KKDF Oranı"
                               variant="outlined"
                               fullWidth={false}
                               sx={{width:150}}
                               helperText={"(Giriş olmaması durumunda 15% olarak kabul edilir)"}
                               onChange={(e)=>{
                                   context.setKkdfRatio(e.target.value);
                               }
                               }
                    />
                    <TextField id="profit-ratio-input"
                               label="BSMV Oranı"
                               variant="outlined"
                               fullWidth={false}
                               sx={{width:150}}
                               helperText={"(Giriş olmaması durumunda 5% olarak kabul edilir)"}
                               onChange={(e)=>{
                                   context.setBsmvRatio(e.target.value);
                               }
                               }
                    />

                </div>
                <div style={{display: 'flex', justifyContent: 'space-around',padding:10}}>
                    <Button variant="contained" color="success" sx={{margin:"2px"}}>
                        Değerleri Hesapla
                    </Button>
                    <Button variant="contained" color="success" sx={{margin:"2px"}}>
                        Geri Ödeme Tablosu
                    </Button>
                </div>

            </Grid>

        </div>
    )
};


export default InputForm;