import { useState } from 'react';
import { BasketList } from '../components/Basket/BasketList';
import { BasketRadioButtons } from '../components/Basket/BasketRadioButtons';

export const Basket = () => {
  const [contactsType, setContactsType] = useState('email');
  const [resultMessage, setResultMessage] = useState(null);
  const testText = [
    { name: 'one', price: 1 },
    { name: 'two', price: 2 },
    { name: 'three', price: 3 },
    { name: 'four', price: 4 },
    { name: 'five', price: 5 },
  ];

  const basketSummary = ({ services }) => {
    return services.reduce((total, item) => total + item.price, 0);
  };

  const checkBoxHandle = event => {
    setContactsType(event.target.value);
  };

  const handleContactData = event => {
    setResultMessage({
      basket: testText,
      customer: {
        contact: event.currentTarget.value,
        type: contactsType,
      },
      //sum: basketSummary(testText),
    });
  };

  const handleSubmit = () => {
    console.log(resultMessage);
  };

  return (
    <>
      <h2>Кошик</h2>
      <BasketRadioButtons
        onChange={handleContactData}
        checkBoxHandle={checkBoxHandle}
      />
      <BasketList data={testText} />
      <p>Sum = </p>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
};
