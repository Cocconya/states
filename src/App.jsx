import { useState } from 'react'
import { UserClass, UserFunction, UserChildren } from './user'

function App() {
  const [users, setUsers] = useState([
    { name: 'Ivan', years: 30 },
    { name: 'Marko', years: 35 },
    { name: 'Ana', years: 25 },
  ]);

  const [tekst] = useState("Unknown");

  const uvecajGodine = () => {
    const newUsers = users.map(user => {
      return { ...user, years: user.years + 5 }
    });
    setUsers(newUsers);
  }

  return (
    <>
      <h1>State</h1>
      <UserClass name={users[0].name} years={users[0].years} />
      <UserFunction name={users[1].name} years={users[1].years} />
      <UserChildren name={users[2].name} years={users[2].years}>
        {tekst}
      </UserChildren>
      <button onClick={uvecajGodine}>Uvećaj godine</button>
    </>
  )
}

export default App
