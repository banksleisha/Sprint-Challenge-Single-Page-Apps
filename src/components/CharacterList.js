import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [characters, setCharacters] = useState([]);

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
      <h2>Names</h2>
      {characters.map((char, id) => {
        return <CharacterCard key={id} char={char} />
      })}
    </section>
  );
}
