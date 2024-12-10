import React from "react";
import "../App.css";
const SearchBar = (props) => {
  return (
    <div>
      <input
        type="text"
        id="search-bar"
        value={props.value}
        onChange={(event) => props.setSearchMovie(event.target.value)}
        placeholder="Search your movie..."
      />
    </div>
  );
};

export default SearchBar;
