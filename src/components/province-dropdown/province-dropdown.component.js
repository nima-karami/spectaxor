import { useContext, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { MyContext } from '../../context/context-provider';

const ProvinceDropDown = () => {
  const { income, setIncome } = useContext(MyContext);

  const handleChange = (event) => {
    event.preventDefault();
    setIncome({...income, province: event.target.value});
    console.log(income.province)
  };

  return (
    <div>
      <FormControl variant="outlined" sx={{ m: 1, width: '30ch' }}>
        <InputLabel id="select-province-dropdown-label">Province</InputLabel>
        <Select
          labelId="select-province-dropdown-label"
          id="select-province-dropdown"
          value={income.province}
          onChange={handleChange}
          label="Province"
        >
          <MenuItem value={'Ontario'}>Ontario</MenuItem>
          <MenuItem value={'British Columbia'}>British Columbia</MenuItem>
          <MenuItem value={'Quebec'}>Quebec</MenuItem>
          <MenuItem value={'NewFoundland and Labrador'}>Newfoundland and Labrador</MenuItem>
          <MenuItem value={'Prince Edward Island'}>Prince Edward Island</MenuItem>
          <MenuItem value={'Nova Scotia'}>Nova Scotia</MenuItem>
          <MenuItem value={'New Brunswick'}>New Brunswick</MenuItem>
          <MenuItem value={'Saskatchewan'}>Saskatchewan</MenuItem>
          <MenuItem value={'Manitoba'}>Manitoba</MenuItem>
          <MenuItem value={'Alberta'}>Alberta</MenuItem>
          <MenuItem value={'Yukon'}>Yukon</MenuItem>
          <MenuItem value={'Northwest Territories'}>Northwest Territories</MenuItem>
          <MenuItem value={'Nunavut'}>Nunavut</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default ProvinceDropDown;