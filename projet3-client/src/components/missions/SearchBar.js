import React from 'react';

function SearchBar(props) {
  return (
    <div className="SearchBar">
      <input type="search" value={props.query} onChange={(e) => props.updateQuery(e.target.value)} />

    </div>
  );
}

export default SearchBar;