import React, { useState } from 'react';
import { SelectLanguege } from './Header.styled';

export const LanguegeButton = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: 'ua', label: 'UA' },
    { value: 'ru', label: 'RU' },
    { value: 'en', label: 'EN' },
    { value: 'pl', label: 'PL' },
  ];

  return (
    <>
      <SelectLanguege
        defaultValue={selectedOption | { value: 'ua', label: 'UA' }}
        onChange={setSelectedOption}
        options={options}
        placeholder={'UA'}
      />
    </>
  );
};
