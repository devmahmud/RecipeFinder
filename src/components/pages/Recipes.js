import React, { useState } from "react";
import Search from "../Search";
import RecipeList from "../RecipeList";

function Recipes() {
  const [query, setQuery] = useState("");

  const handleSearch = query => {
    setQuery(query);
  };

  return (
    <React.Fragment>
      <Search onSearch={handleSearch} />
      <RecipeList query={query} />
    </React.Fragment>
  );
}
export default Recipes;
