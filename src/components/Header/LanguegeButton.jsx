import React, { useState } from 'react';
import { SelectLanguege } from './Header.styled';
/* import cookies from 'js-cookie'; */

export const LanguegeButton = ({i18n}) => {
  const [selectedOption, setSelectedOption] = useState({
    value: 'ua',
    label: 'UA',
  });

/*   const currentLang = cookies.get('i18next') || 'ua'; */

  const options = [
    { value: 'ua', label: 'UA' },
    { value: 'ru', label: 'RU' },
    { value: 'en', label: 'EN' },
  ];

  const selectLanguegeHandler = event => {
    console.log(event.value);
    console.log(selectedOption);
    setSelectedOption({ value: event.value, label: event.value.toUpperCase() });
    i18n.changeLanguage(selectedOption.value);
  };

  return (
    <>
      <SelectLanguege
        defaultValue={selectedOption | { value: 'ua', label: 'UA' }}
        onChange={selectLanguegeHandler}
        options={options}
        placeholder={'UA'}
      />
    </>
  );
};
