import React from 'react'


const Card = (prop) => {
  return (
    <div className="card">
        <img src ={prop.img} alt="icons" /> 
       <h1>{prop.title}</h1>
       <p>{prop.description}</p>
    </div>
    
  )
}

export default Card