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
  const [filterData , updateData] = useState([]); //this is why it isn't filtering properly

  const search = chars => {
    updateData(chars)
  };

  

  return (
    <section className="character-list">
      <Title>Rick and Morty Characters</Title>
      <Nav>
        <Button>
      <Link className="nav" to="/"> Home </Link>
      </Button>
      </Nav>
      <SearchForm search={search} characters ={characters} />
      {characters.map((char, id) => {
        return <CharacterCard key={id} char={char} />
      })}
    </section>
  );
}
