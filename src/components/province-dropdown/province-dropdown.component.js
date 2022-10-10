import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ProvinceDropDown = () => {
  const [province, setProvince] = useState('');

  const handleChange = (event) => {
    setProvince(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="select-province-dropdown-label">Province</InputLabel>
        <Select
          labelId="select-province-dropdown-label"
          id="select-province-dropdown"
          value={province}
          onChange={handleChange}
          label="Province"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ontario</MenuItem>
          <MenuItem value={20}>British Columbia</MenuItem>
          <MenuItem value={30}>Winnipeg</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default ProvinceDropDown;