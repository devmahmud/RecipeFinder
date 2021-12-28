import React, { useState, useEffect } from 'react';
import { Container, Header, Grid } from 'semantic-ui-react';
import RecipeListItem from './RecipeListItem';
import Loader from './layout/Loader';
import { RECIPE_API } from '../config';

function RecipeList(props) {
  const [state, setState] = useState({ recipes: [], loading: false });

  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line
  }, [props.query]);

  const getRecipes = async () => {
    try {
      const url = `${RECIPE_API}/search?q=${props.query}`;
      setState({ ...state, loading: true });
      const response = await fetch(url);
      const result = await response.json();
      setState({ recipes: result.recipes, loading: false });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Header
        size="huge"
        content={props.query ? `RECIPE LIST FOR: ${props.query}` : 'RECIPE LIST'}
        className="text-cursive"
        textAlign="center"
      />
      {state.loading && <Loader />}
      <Grid doubling columns={4}>
        {state.recipes &&
          state.recipes.map((recipe, i) => {
            return (
              <Grid.Column key={i}>
                <RecipeListItem recipe={recipe} />
              </Grid.Column>
            );
          })}
      </Grid>
    </Container>
  );
}
export default RecipeList;
