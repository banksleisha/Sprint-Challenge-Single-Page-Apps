import React from "react";
import styled from 'styled-components';

const Characters = styled.div`
background: gray`


const Card = styled.div`
width: 80%;
height: 80%;
background: lightblue;
text-align: center;`

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
