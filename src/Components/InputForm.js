import React from 'react';
import {TextField, Grid, Button, Select, MenuItem, InputLabel, FormControl, FormHelperText} from "@mui/material";


const InputForm = () => {
    const [taxType, setTaxType] = React.useState('BSMV');
    const [range, setRange] = React.useState('Aylık');
    const handleChangeTaxType = (event) => {
        setTaxType(event.target.value);
    };
    const handleChangeRange = (event) => {
        setRange(event.target.value);
    };

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Grid sx={{border: '1px solid grey', borderRadius: 2, mt: '20px', width: '600px'}}>
                <div className="Input Row" style={{padding: 10}}>
                    <TextField
                        id="outlined-basic"
                        label="Kredi Tutarı(Ana Para)"
                        variant="outlined"
                        fullWidth={true}
                    />
                </div>
                <div className="Input Row" style={{display: 'flex', justifyContent: 'space-around'}}>
                    <TextField
                        id="outlined-basic"
                        label="Taksit Sayısı"
                        variant="outlined"
                        fullWidth={false}
                        sx={{width:150}}
                    />
                    <TextField id="outlined-required"
                               label="Kar Oranı"
                               variant="outlined"
                               fullWidth={false}
                               sx={{width:150}}/>
                </div>
                <div className="Input Row"
                     style={{display: 'flex', justifyContent: 'space-around',marginTop:10}}
                >
                    <FormControl sx={{minWidth: 120, maxWidth: 150}}>
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
                    <FormControl sx={{ minWidth: 120, maxWidth: 150}}>
                        <InputLabel >Vergi Tipi</InputLabel>
                        <Select
                            id="tax-type-selector"
                            label="Vergi Tipi"
                            onChange={handleChangeTaxType}
                        >

                            <MenuItem value={"BSMV"}>BSMV</MenuItem>
                            <MenuItem value={"KKDF"}>KKDF</MenuItem>
                        </Select>
                        <FormHelperText>(Seçim olmaması durumda varsayılan değer "BSMV")</FormHelperText>
                    </FormControl>
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