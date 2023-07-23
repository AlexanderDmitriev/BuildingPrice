export const BasketList = ({ data }) => {
  return (
    <ul>
      {data.map(item => (
        <>
          <p>{item.name}</p>
          <button>delete</button>
        </>
      ))}
    </ul>
  );
};
