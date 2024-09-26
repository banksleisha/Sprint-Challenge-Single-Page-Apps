import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";
import styled from "styled-components";


const Title = styled.h2`
text-align: center;`

const Nav = styled.div`
text-align: center;
color: white;
`
const Button = styled.button`
background: white;`
export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters]= useState([]);
  const [newdata, setData]= useState([]);

  const filter = chars => {
    
    setData(chars)
  }

  useEffect(() => {
  // TODO: Add API Request here - must run in `useEffect`
  //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

      axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        setCharacters(response.data.results);
        setData(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });

  }, []);

return (
  <section className="character-list">
  <Title>Rick and Morty Characters</Title>
  <Nav>
    <Button>
  <Link className="nav" to="/"> Home </Link>
  </Button>
  <SearchForm filter = {filter} characters={characters} />
  </Nav>
  
    {newdata.map(chars => (
      <CharacterCard
        key={chars.id}
        name={chars.name}
        species={chars.species}
        gender={chars.gender}
        image={chars.image}
      />
         ))}
  </section>
);
};
