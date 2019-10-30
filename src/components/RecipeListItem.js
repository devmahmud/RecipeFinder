import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "semantic-ui-react";

function RecipeListItem({ recipe }) {
  return (
    <Card>
      <img src={recipe.image_url} height={170} alt="thumbnail" />
      <Card.Content>
        <Card.Header content={recipe.title} />
        <Card.Description>
          <h4 className="text-cursive txt-yellow">{recipe.publisher}</h4>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button
          as={Link}
          to={`/recipes/${recipe.recipe_id}`}
          content="Details"
          color="blue"
          size="tiny"
        />
        <Button
          as={"a"}
          href={recipe.source_url}
          target="_blank"
          content="Recipe URL"
          color="green"
          size="tiny"
        />
      </Card.Content>
    </Card>
  );
}
export default RecipeListItem;
