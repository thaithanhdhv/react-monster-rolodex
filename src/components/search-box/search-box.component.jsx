import React from 'react';

export const SearchBox = ({ handleChange }) => {
  return (
    <input
      className="search"
      type="input"
      placeholder="Enter monster name"
      onChange={handleChange}
    />
  );
};
