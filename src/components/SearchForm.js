import React, { useState } from "react";


function SearchForm(props) {
  const [search, setSearch] = useState([]);
const handleChanges = e => {
  setSearch(e.target.value);
};

const submitHandler= e => {
  e.preventDefault();
 const searchFilter = props.character.filter(character => {
  return character.name.indexOf(search) !== -1;
});
props.search(searchFilter)
};



return (
  <div className="search-form">
  <form onSubmit={submitHandler}>
  <input
  onChange={handleChanges}
  type="text"
  name="search"
  id="character"
  placeholder="Find More Characters"
  />
  </form>
</div>
 );
}

export default SearchForm;