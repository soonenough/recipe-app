import React from "react";

function RecipeList({ recipes, deleteRecipe }) {
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe) => (
            <tr className="recipe" key={recipe.id}>
              <td>{recipe.name}</td>
              <td>{recipe.cuisine}</td>
              <td>
              <img 
                  alt= "http://www.nopicavailable.com"
                  src={recipe.photo}
                />
              </td>
              <td>{recipe.ingredients}</td>
              <td>{recipe.preparation}</td>
              <td>
                <button
                name="delete" 
                onClick={() => deleteRecipe(recipe.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
