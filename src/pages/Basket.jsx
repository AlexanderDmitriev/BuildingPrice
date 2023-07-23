import { BasketList } from '../components/Basket/BasketList';
import {BasketRadioButtons} from '../components/Basket/BasketRadioButtons';

export const Basket = () => {
  const testText = [
    { name: 'one' },
    { name: 'two' },
    { name: 'three' },
    { name: 'four' },
    { name: 'five' },
  ];

  const resultMessage = {basket:testText, customer:'someone'};

  const handleSubmit = () => {
    console.log(resultMessage);
  };

  return (
    <>
      <h2>Кошик</h2>
      <BasketRadioButtons/>
      <p>Choose a type:</p>
      <label>
        <input type="radio" name="color" value="red" checked />
        email
      </label>
      <label>
        <input type="radio" name="color" value="white" />
        viber
      </label>
      <label>
        <input type="radio" name="color" value="green" />
        telegram
      </label>
      <label>
        Contact
        <input type="text" name="contact" placeholder="example@mail.com" />
      </label>
      <BasketList data={testText} />
      <p>Sum</p>
      <button type='submit' onClick={handleSubmit}>Submit</button>
    </>
  );
};
