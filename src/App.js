import { useState, useEffect } from 'react'

import './App.css';
import UserList from './components/UserList';

function App() {
  const [loaded, setLoaded] = useState(false)
  const [loading, setLoading] = useState(false);
  const [randUser, setRandUser] = useState([])

  // useEffect(() =>{
  //  setLoaded(true);
  // }, [randUser])

  const randPersonHandler = async () =>{
    setLoading(true)
    try {
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
      setLoaded(true);
    } catch(err){
      console.error(err)
    }
    setLoading(false);
  }

  return (
    <div className="App">
      {loaded && <UserList users={randUser}/>}
      {loading && <p>Loading...</p>}
      <button onClick={randPersonHandler}>add Random Person </button>
    </div>
  );
}

export default App;
