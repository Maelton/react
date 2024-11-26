export default function Fruits() {
  const fruits: string[] = ['banana', 'apple', 'orange'];

  return (
    <ul>
      {fruits.map(fruit => <li>{fruit}</li>)}
    </ul>
  );
}