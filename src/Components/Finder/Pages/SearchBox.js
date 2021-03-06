import React from "react";
import TextField from "@material-ui/core/TextField";

const SearchBox = ({ handleKeyDown }) => {
  return (
    <form noValidate autoComplete="off">
      <TextField
        fullWidth
        id="standard-search"
        label="Search something"
        type="search"
        onKeyDown={handleKeyDown}
      />
    </form>
  );
};

export default SearchBox;
