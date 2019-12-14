import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";

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
      <h2>Rick and Morty Characters</h2>
      <Link className="nav" to={"/"}> Home </Link>
      <SearchForm search={search} characters ={characters} />
      {characters.map((char, id) => {
        return <CharacterCard key={id} char={char} />
      })}
    </section>
  );
}
