import { useState, useEffect } from 'react'

import './App.css';
import UserList from './components/UserList';

function App() {
  const [loaded, setLoaded] = useState(false)
  const [randUser, setRandUser] = useState([])

  useEffect(() =>{
   setLoaded(true);
  }, [randUser])

  const randPersonHandler = async () =>{
    let response = await fetch(`https://randomuser.me/api`);
    console.log(response)
    let data = await response.json()
    console.log(data.results)
    let randUserData = data.results.map(user =>{
      return {
        id: user.email,
        name: `${user.name.first} ${user.name.last}`,
        gender: user.gender,
      }
    })
    console.log(randUserData)
    setRandUser(randUserData);
    
  }

  return (
    <div className="App">
      {
        loaded && <UserList users={randUser}/>
      }
     <button onClick={randPersonHandler}>Fetch Random Person </button>
    </div>
  );
}

export default App;
