import { useContext, useState } from "react";

import { MyContext } from "../../context/context-provider";
import { federal_tax_brackets_2022 } from "../../utils/tax-data";

import ProvinceDropDown from "../province-dropdown/province-dropdown.component";

import { Typography, FormControl, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { Box } from "@mui/system";



const InputForm = () => {
    const { income, setIncome, results, setResults } = useContext(MyContext);

      
    const handleChange =  (prop) => (event) => {
        event.preventDefault();
        setIncome({ ...income, [prop]: parseInt(event.target.value) });
       

     };
    
    return(
        <Box sx={{ p: 3, m: 3, boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px', borderRadius: 4 }}>
            <Typography variant='h6' align='center'>Your Information</Typography>
            <Box sx={{p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <ProvinceDropDown />
                
                <TextField
                    label="Employment Income"
                    id="employment-income"
                    onChange={handleChange('employmentIncome')}
                    sx={{ m: 1, width: '25ch' }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}/>
                
                <TextField
                    label="Self-employment Income"
                    id="self-employment-income"
                    onChange={handleChange('selfEmploymentIncome')}
                    sx={{ m: 1, width: '25ch' }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}/>
                
                <TextField
                    label="Other Income"
                    id="other-income"
                    onChange={handleChange('otherIncome')}
                    sx={{ m: 1, width: '25ch' }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}/>
                
                <TextField
                    label="RRSP Contribution"
                    id="rrsp-contribution"
                    onChange={handleChange('RRSPcontribution')}
                    sx={{ m: 1, width: '25ch' }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}/>
                
                <TextField
                    label="Capital Gains/Losses"
                    id="capital-gains-losses"
                    onChange={handleChange('capitalGainsLosses')}
                    sx={{ m: 1, width: '25ch' }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}/>
                
                <TextField
                    label="Eligible Dividends"
                    id="eligible-dividends"
                    onChange={handleChange('eligibleDividends')}
                    sx={{ m: 1, width: '25ch' }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}/>


            </Box>
        </Box>
    )
}

export default InputForm;