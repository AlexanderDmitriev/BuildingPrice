export const Basket = () => {
  return (
    <>
      <h2>Кошик</h2>
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
        <input type="text" name="email" placeholder="example@mail.com" />
      </label>
      <ul>
        <li>
          <p>item name</p>
          <button>delete</button>
        </li>
        <li>
          <p>item name</p>
          <button>delete</button>
        </li>
        <li>
          <p>item name</p>
          <button>delete</button>
        </li>
      </ul>
      <button>Submit</button>
    </>
  );
};
