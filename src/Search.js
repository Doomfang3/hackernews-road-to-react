import React from "react";

const Search = ({ value, onChange, children }) => (
  <form>
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={children}
    />
  </form>
);

export default Search;
