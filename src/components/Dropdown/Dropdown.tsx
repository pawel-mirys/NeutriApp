/* eslint-disable @typescript-eslint/no-unused-vars */
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type DropdownProps = {
  menuItems: string[];
};

const Dropdown: React.FC<DropdownProps> = ({ menuItems }) => {
  const [name, setName] = useState<string>('');
  const navigate = useNavigate();

  const handleChange = (event: SelectChangeEvent) => {
    setName((prev) => (prev = event.target.value));
  };

  const itemsToRender = () => {
    const items = menuItems.map((item) => {
      return (
        <MenuItem
          value={item}
          key={item}
          onClick={() => {
            navigate(`/list/${item}`);
          }}>
          {item}
        </MenuItem>
      );
    });
    return items;
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} color='primary' size='small'>
      <Select
        value={name}
        onChange={handleChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
        sx={{
          color: 'white',
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(255, 255, 255, 0.7)',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(255, 255, 255, 0.5)',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(255, 255, 255, 0.5)',
          },
          '.MuiSvgIcon-root ': {
            fill: 'white !important',
          },
        }}>
        <MenuItem
          value=''
          onClick={() => {
            navigate('');
          }}>
          <em>Select List</em>
        </MenuItem>
        {itemsToRender()}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
