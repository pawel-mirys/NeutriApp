/* eslint-disable @typescript-eslint/no-unused-vars */
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type DropdownProps = {
  menuItems: JSX.Element[];
  variant?: 'white' | 'blue';
  onChange: (event: SelectChangeEvent) => void;
  defaultItemOnClick?: () => void;
  selectValue: string;
};

const Dropdown: React.FC<DropdownProps> = ({
  menuItems,
  variant = 'blue',
  onChange,
  defaultItemOnClick,
  selectValue,
}) => {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} color='primary' size='small'>
      <Select
        value={selectValue}
        onChange={onChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
        sx={{
          color: (variant = 'white' && 'white'),
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
        <MenuItem value='' onClick={defaultItemOnClick}>
          <em>Select List</em>
        </MenuItem>
        {menuItems}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
