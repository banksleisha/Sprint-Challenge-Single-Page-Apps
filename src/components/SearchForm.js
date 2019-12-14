import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard"


export default function SearchForm( props) {
 const [searchNames, addNames]=useState([]);
 const [CurrentSearch, ChangeSearch]=useState('');

  useEffect(() => {
  axios
  .get('https://rickandmortyapi.com/api/character/')
    .then(res => {
      console.log(res.data.results);
     const characters= res.data.results;
      const characterReturn=characters.filter(character => { 
        return character.name.toLowerCase().includes(CurrentSearch.toLowerCase());
      })
        addNames(characterReturn)
       
     })
   .catch(error=> {
      console.log(error);
    })

    }, [CurrentSearch]);

   const onSearchChange= e => {
     ChangeSearch(e.target.value);
     console.log(ChangeSearch);
   }

   let searchResult = "";
   var submit = event => {
     return (searchResult = event.target.value)
   }
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
     {
       searchNames.map((character, index) => {
         return(
           <CharacterCard key={index} char={character} />
         )
       })
     }
    </section>
  );
}
