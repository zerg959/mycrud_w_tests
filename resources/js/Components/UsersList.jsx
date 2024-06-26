import User from '@Models/User'
function UsersList() {
  const items = User::all();
  return (
    <ul>
      {items.map((item, index) => (
        <li>{item}</li>
      ))}
    </ul>
  );
}