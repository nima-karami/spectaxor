import { useContext, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { MyContext } from '../../context/context-provider';

const ProvinceDropDown = () => {
  const { income, setIncome } = useContext(MyContext);

  const handleChange = (event) => {
    setIncome({...income, province: event.target.value});
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
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'Ontario'}>Ontario</MenuItem>
          <MenuItem value={'British Columbia'}>British Columbia</MenuItem>
          <MenuItem value={'Winnipeg'}>Winnipeg</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default ProvinceDropDown;