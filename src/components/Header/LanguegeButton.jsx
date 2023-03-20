import React, { useState } from 'react';
import { SelectLanguege } from './Header.styled';
/* import cookies from 'js-cookie'; */
import { useDispatch, useSelector } from 'react-redux';
import {changeLanguege} from '../../redux/store';

export const LanguegeButton = ({ i18n }) => {
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

  const dispatch = useDispatch();
  const currentLocale = useSelector(state => state.locale);

  const selectLanguegeHandler = event => {
    console.log(selectedOption);
    setSelectedOption({ value: event.value, label: event.value.toUpperCase() });
    i18n.changeLanguage(event.value);
    dispatch(changeLanguege({ value: event.value, label: event.value.toUpperCase() }));
  };


  return (
    <>
      <SelectLanguege
        defaultValue={selectedOption}
        onChange={selectLanguegeHandler}
        options={options}
        placeholder={`${currentLocale.label}`}
      />
    </>
  );
};
