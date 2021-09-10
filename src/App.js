import { useState } from 'react'

import './App.css';
import UserList from './components/UserList';

function App() {
  const [loading, setLoading] = useState(false);
  const [randUser, setRandUser] = useState([])
  const [error, setError] = useState(null)

  const randPersonHandler = async () =>{
    setLoading(true)
    try {
      let response = await fetch(`https://randomuser.me/api`);
      console.log(response)

      if (response.status !== 200){
        throw Error('Call Failed')
      }

      let data = await response.json()
      //console.log(data.results)
      let randUserData = data.results.map(user =>{
        return {
          id: user.email,
          name: `${user.name.first} ${user.name.last}`,
          gender: user.gender,
        }
      })
      // console.log(randUserData[0])
      setRandUser(() =>{
        return [...randUser, randUserData[0]]});
    } catch(err){
      setError(err.message)
      //console.log(err)
    }
    setLoading(false);
  }

  return (
    <div className="App">
      <div>
        {!loading && <UserList users={randUser} />}
        {loading && <p>Loading...</p>}
        {!loading && error && <p>{error}</p>}
      </div>
      <div>
        <button onClick={randPersonHandler}>add Random Person </button>
      </div>
    </div>
  );
}

export default App;
