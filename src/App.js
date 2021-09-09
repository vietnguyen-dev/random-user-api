import { useState } from 'react'
import './App.css';

function App() {
  let [randUser, setRandUser] = useState([])

  const randPersonHandler = async () =>{
    let response = await fetch(`https://randomuser.me/api`);
    console.log(response)
    let data = await response.json()
    setRandUser(data.results)
    console.log(data.results)
  }

  return (
    <div className="App">
      {/* <pre>
        {randUser}
      </pre> */}
     <button onClick={randPersonHandler}>Fetch Random Person </button>
    </div>
  );
}

export default App;
