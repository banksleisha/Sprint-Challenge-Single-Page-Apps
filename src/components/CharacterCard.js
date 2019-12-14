import React from "react";

export default function CharacterCard(props) {
  return ( <div className="character-card">
    <div>
    <h2>{props.char.name}</h2>
    <p>{props.char.status}</p>
    <p>{props.char.gender}</p>
    <p>{props.char.species}</p>
   </div>
  
  </div>
  )
}
