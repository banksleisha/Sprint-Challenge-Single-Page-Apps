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
   
    <img src={`${props.image}`} alt="character"/> 
    <h2>Name: {props.name}</h2>
    <p>Status: {props.status}</p>
    <p>Gender: {props.gender}</p>
    <p>Species: {props.species}</p>
   </Card>
  
  </div>
  )
}
