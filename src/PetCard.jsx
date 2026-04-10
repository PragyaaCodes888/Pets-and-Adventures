import React from 'react'
import { useNavigate } from 'react-router-dom'
const PetCard = (prop) => {
    let navigate = useNavigate();
   const btnClicked = () => {
             navigate(`/browsingpets/info/${prop.slug}`);
           };
  return (
    <div className="PetCard">
        <img src={prop.img} alt="Pets" />                        
        <h1>{prop.PetName}</h1>
        <h2>{prop.PetType}</h2>
        <h2>{prop.breed}</h2>
       
        <button onClick={btnClicked}>AdoptNow</button>
    </div>
  )
}

export default PetCard