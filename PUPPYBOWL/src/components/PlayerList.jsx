const PlayerList = ({ playerList , API_URL}) => {



     const deleteHandler = async() => {
      try {
        const response = await fetch(`${API_URL}/players`, {
          method:"DELETE"

        })
      } catch (err) 
      {console.log(error)}
      throw error 
     }








  return (
    <>
     <h3> List of Players </h3>

     { playerList.map((player) => {
      return (
        <>

      
      <p key={player.id}>{player.name}  </p>
      <button onClick={deleteHandler}> DELETE!</button>

      
      
      
      
      
      
      
      
      </>
      );
     })}
    
    
    
    
    
    
    </>


  )
}

export default PlayerList



 // {/* <h3> {player.name}</h3>
   // <p> {player.breed}</p>
   // <img src = {player.imageUrl}> </img>
   //  */}