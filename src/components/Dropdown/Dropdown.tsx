import React, { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    console.log('Wybrano opcję:', option, selectedOption);
  };

  return (
    <div className='relative inline-block'>
      <button
        className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none'
        onClick={toggleDropdown}>
        Select list
        {isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      </button>
      {isOpen && (
        <ul className='absolute z-10 mt-2 w-40 bg-white border border-gray-300 rounded shadow-lg'>
          <li
            className='cursor-pointer px-4 py-2 hover:bg-gray-100'
            onClick={() => selectOption('Option 1')}>
            List 1
          </li>
          <li
            className='cursor-pointer px-4 py-2 hover:bg-gray-100'
            onClick={() => selectOption('Option 2')}>
            List 2
          </li>
          <li
            className='cursor-pointer px-4 py-2 hover:bg-gray-100'
            onClick={() => selectOption('Option 3')}>
            List 3
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
