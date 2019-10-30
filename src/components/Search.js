import React, { useState } from "react";
import { Grid, Form, Input } from "semantic-ui-react";

function Search(props) {
  const [query, setQuery] = useState("");

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = () => {
    props.onSearch(query);
  };

  return (
    <Grid textAlign="center" columns={2} className="search-box">
      <Grid.Column>
        <h2 className="search-heading">
          Search Recipes With{" "}
          <span style={{ color: "#ff3333" }}>Food2Fork</span>
        </h2>
        <h4>Type Recipes Separated By Comma</h4>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="chicken,onion,carrots"
            action={{ icon: "search", color: "blue" }}
            fluid
            onChange={handleChange}
            value={query}
          />
        </Form>
      </Grid.Column>
    </Grid>
  );
}
export default Search;
