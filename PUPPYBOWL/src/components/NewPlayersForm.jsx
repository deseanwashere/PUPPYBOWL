import { useState } from "react"



const NewPlayer = () =>  {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log(name, description);
      try {
        const response = await fetch(`${API_URL}/players`, {
            method: "POST",
            headers: {
              "Content-Type" : "application/json",
            }
        });
        const result = await response.json();
        console.log(result);
        if (result.success){
          await fetchAllPlayers();
        }
        else {
          alert("ERROR!")
        }

      }
      catch (error) {
        console.log(error);
      }
      throw error;
    }

  return (
    <form onSubmit={handleSubmit}>
      <label> 
        Name : <input type="text" value={name} onChange={(e) => {setName(e.target.value)}}/>
      </label>

      <label>
        Description: <input type="text" value= {description} onChange={(e) => {setDescription(e.target.value)}}/>
      </label>

      <input type="submit" value="Add Player"/>
    </form>



  )
}

export default NewPlayer;