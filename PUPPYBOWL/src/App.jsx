import { useState } from 'react'
import AllPlayers from './components/SeePlayers.jsx'
import NewPlayer from './components/NewPlayersForm.jsx';
import PlayerList from './components/PlayerList.jsx';
import './App.css'


const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-FT/players";

function App() {
  const [token, setToken] = useState(null);
  

  return (
    <>
    <h1> Routes! </h1>
    <Routes>
    <Route  path='/' element={<AllPlayers/>} />
    <Route path='/players/:id' element={<NewPlayer/>}/>
    </Routes >
     

      <AllPlayers token = {token} setToken={setToken}/>
      <NewPlayer/>
      <PlayerList API_URL={API_URL}/>
      
    </>
  )
}

export default App
