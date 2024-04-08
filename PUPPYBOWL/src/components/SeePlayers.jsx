import { useState , useEffect } from "react";
import PlayerList from "./PlayerList";

const cohortName = '2402-FTB-ET-WEB-FT';
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName} `;

const AllPlayers = () => {
    const [seePlayers, setSeePlayers ] = useState([]);

}

useEffect( () => {
  fetchSeePlayers();

}, []);


// fetch all players mayne

const fetchSeePlayers = async () => {
  try {
    const response = await fetch(`${API_URL}/players`)
    const result = await response.json();
    console.log(result.data.players);
    setSeePlayers(result.data.players);
  } catch (err) {
    console.error(err);

  }
  


  return (
  <>
    <p> PLAYERA!</p>
    {seePlayers.length ? (seePlayers.map((players) => {
    return <PlayerList key= {players.id} player= {player} />;
    })) : ( <p> NUN YET!</p>)};
    
    
    
    </>
    );
  }
  
    export default AllPlayers;