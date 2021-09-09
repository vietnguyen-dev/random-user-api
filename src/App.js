import { useState, useEffect } from 'react'

import UserInfo from './components/User';
import './App.css';

function App() {
  const [loaded, setLoaded] = useState(false)
  const [randUser, setRandUser] = useState([])

  // useEffect(() =>{
  //   console.table(randUser)
  // }, [randUser])

  const randPersonHandler = async () =>{
   
    let response = await fetch(`https://randomuser.me/api`);
    //console.log(response)
    let data = await response.json()
    //console.log(data.results)
    let randUserData = data.results.map(user =>{
      return {
        id: user.id.value,
        name: `${user.name.first} ${user.name.last}`,
        gender: user.gender,
      }
    })
    setRandUser(randUserData);
    setLoaded(true);
  }

  return (
    <div className="App">
      {
        loaded && <UserInfo name={randUser[0].name} gender={randUser[0].gender}/>
      }
     <button onClick={randPersonHandler}>Fetch Random Person </button>
    </div>
  );
}

export default App;
