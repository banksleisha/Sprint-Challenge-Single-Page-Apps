import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

//useState
export default function SearchForm(props) {
  const [searchNames, addNames] = useState([]);
  const [CurrentSearch, ChangeSearch] = useState("");

  const onSearchChange = e => {
    ChangeSearch(e.target.value);
    console.log(ChangeSearch);
  };

  let searchResult = "";
  var submit = event => {
    const characterReturn = characters.filter(character => {
      //props.characters instead must pass props!!!
      return character.name.toLowerCase().includes(CurrentSearch.toLowerCase());

      //here update character list state ***set characters**** pass to child
    });
  };
  return (
    <section className="search-form">
      <form onSubmit={event => submit(event)}>
        <input
          onChange={event => onSearchChange(event)}
          type="text"
          name="character"
          id="character"
          placeholder="Find More Characters"
        />
      </form>
      {searchNames.map((character, index) => {
        return <CharacterCard key={index} char={character} />;
      })}
    </section>
  );
}
