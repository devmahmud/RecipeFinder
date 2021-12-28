import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button, Image, Header, Segment } from 'semantic-ui-react';
import Loader from '../layout/Loader';
import { RECIPE_API } from '../../config';

function RecipeDetails(props) {
  const [state, setState] = useState({ recipe: {}, loading: true });

  useEffect(() => {
    const getRecipe = async () => {
      try {
        const response = await fetch(`${RECIPE_API}/get?rId=${props.match.params.recipe_id}`);
        const result = await response.json();
        setState({ recipe: result.recipe, loading: false });
      } catch (err) {
        console.log(err);
      }
    };
    getRecipe();
    //eslint-disable-next-line
  }, []);

  if (state.recipe) {
    return (
      <Grid container stackable columns={2} className="detailPageContent">
        <Grid.Column>
          <Button
            as={Link}
            to="/recipes"
            color="yellow"
            content="Back to recipe list"
            style={{ marginBottom: '3rem' }}
          />
          {state.loading && <Loader />}
          <Image src={state.recipe.image_url} />
        </Grid.Column>
        <Grid.Column>
          <Header size="medium">{state.recipe.title}</Header>
          <p className="text-cursive txt-yellow">Provided By {state.recipe.publisher}</p>
          <Button
            as="a"
            href={state.recipe.publisher_url}
            target="_blank"
            color="blue"
            content="Publisher Webpage"
          />
          <Button
            as="a"
            href={state.recipe.source_url}
            target="_blank"
            color="green"
            content="Recipe URL"
          />

          <Header size="large" content="Ingredients" />
          <Segment.Group>
            {state.recipe.ingredients &&
              state.recipe.ingredients.map((ingred, i) => (
                <Segment key={i}>
                  <h5 className="text-cursive">{ingred}</h5>
                </Segment>
              ))}
          </Segment.Group>
        </Grid.Column>
      </Grid>
    );
  } else {
    return (
      <Grid container stackable columns={2} className="detailPageContent">
        <Header>Nothing found !!</Header>
      </Grid>
    );
  }
}
export default RecipeDetails;
