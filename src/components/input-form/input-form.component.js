import { useState } from "react";

import { FormControl, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { Box } from "@mui/system";



const InputForm = () => {
    const [values, setValues] = useState({
        employmentIncome: '',
        selfEmploymentIncome: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };

    return(
        <Box>
            <FormControl>
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
                    onChange={handleChange('employmentIncome')}
                    sx={{ m: 1, width: '25ch' }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}/>
                
                <TextField
                    label="Other Income"
                    id="other-income"
                    onChange={handleChange('employmentIncome')}
                    sx={{ m: 1, width: '25ch' }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}/>
                
                <TextField
                    label="RRSP Contribution"
                    id="rrsp-contribution"
                    onChange={handleChange('employmentIncome')}
                    sx={{ m: 1, width: '25ch' }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}/>
                
                <TextField
                    label="Capital Gains/Losses"
                    id="capital-gains-losses"
                    onChange={handleChange('employmentIncome')}
                    sx={{ m: 1, width: '25ch' }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}/>
                
                <TextField
                    label="Eligible Dividends"
                    id="eligible-dividends"
                    onChange={handleChange('employmentIncome')}
                    sx={{ m: 1, width: '25ch' }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}/>


            </FormControl>
        </Box>
    )
}

export default InputForm;