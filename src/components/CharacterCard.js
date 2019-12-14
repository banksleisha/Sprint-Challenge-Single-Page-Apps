import React from "react";
import styled from 'styled-components';



const Card = styled.div`
width: 80%;
height: 80%;
background: lightblue;
text-align: center;
margin: 0 auto;
opactity: 0.7;`

export default function CharacterCard(props) {
  return ( <div className="character-card">
    <Card>
    
    <h2>Name: {props.char.name}</h2>
    <p>Status: {props.char.status}</p>
    <p>Gender: {props.char.gender}</p>
    <p>Species: {props.char.species}</p>
   </Card>
  
  </div>
  )
}
