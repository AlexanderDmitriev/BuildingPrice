import { nanoid } from 'nanoid';

export const BasketList = ({ data }) => {
  return (
    <ul>
      {data.map(item => (
        <li key={nanoid()}>
          <p>{item.name}</p>
          <button>delete</button>
        </li>
      ))}
    </ul>
  );
};
