import { useState } from 'react'

function App() {
  const [users, setUsers] = useState([
    { name: 'Ivan', years: 30 },
    { name: 'Marko', years: 35 },
    { name: 'Ana', years: 25 },
  ]);

  const [tekst] = useState("Unknown");

  const uvecajGodine = (index) => {
    const newUsers = [...users];
    newUsers[index].years += 1;
    setUsers(newUsers);
  };

  return (
    <>
      <h1>useState hook</h1>
      <div>
      {users.map((user, index) => (
        <div key={index}>
          <p> {user.name} has {user.years} years.</p>
          <button onClick={() => uvecajGodine(index)}> {tekst} {user.name}</button>
        </div>
      ))}
    </div>
    </>
  )
}

export default App
