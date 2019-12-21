import React, { useState } from "react";

function SearchForm(props) {
  const [searchTerm, setSearch] = useState([]);
  const handleChanges = e => {
    setSearch(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();

    const filteredResults = props.characters.filter(character => {
      //make character name lower case or else will break
      const characterName = character.name.toLowerCase();
      //make search term lower case or else will break
      const term = searchTerm.toLowerCase();
      //if character name includes search term add character object to filtered results
      return characterName.includes(term);
    });
    //updates character list state with filtered results
    props.filter(filteredResults);
  };

  return (
    <div className="search-form">
      <form onSubmit={submitHandler}>
        <input
          onChange={handleChanges}
          type="text"
          name="searchTerm"
          id="character"
          placeholder="Find More Characters"
        />
      </form>
    </div>
  );
}

export default SearchForm;
