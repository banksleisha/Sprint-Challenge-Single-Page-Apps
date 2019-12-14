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

  const [characters, setCharacters] = useState([]);
  const [filterData, updateData] = useState([]);

  const search = chars => {
    updateData(chars)
  };

  useEffect(() => {
    
    axios
    .get("https://rickandmortyapi.com/api/character/")
    .then (response => {
      console.log (response.data.results)
      setCharacters(response.data.results)
    })

    .catch(err => {
      console.log("error");
    });
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      <Title>Rick and Morty Characters</Title>
      <Nav>
        <Button>
      <Link className="nav" to={"/"}> Home </Link>
      </Button>
      </Nav>
      <SearchForm search={search} characters ={characters} />
      {characters.map((char, id) => {
        return <CharacterCard key={id} char={char} />
      })}
    </section>
  );
}
