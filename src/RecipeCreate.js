import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  const initialFormState = {
    name: "Name",
    cuisine: "Cuisine",
    photo: "Photo",
    ingredients: "Ingredients",
    preparation: "Preparation"
  };

  const [content, setContent] = useState({ ...initialFormState });

  const handleContentChange = (event) => {
    const { name, value } = event.target;
    setContent((prevContent) => ({ ...prevContent, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newRecipe = {
      name: content.name,
      cuisine: content.cuisine,
      photo: content.photo,
      ingredients: content.ingredients,
      preparation: content.preparation
    };
    createRecipe(newRecipe);
    setContent({ ...initialFormState });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                name="name"
                type="text"
                onChange={handleContentChange}
                value={content.name}
              />
            </td>
            <td>
              <input
                id="cuisine"
                name="cuisine"
                type="text"
                onChange={handleContentChange}
                value={content.cuisine}
              />
            </td>
            <td>
              <input
                id="photo"
                name="photo"
                type="url"
                onChange={handleContentChange}
                value={content.photo}
              />
            </td>
            <td>
              <textarea
                id="ingredients"
                name="ingredients"
                onChange={handleContentChange}
                value={content.ingredients}
              />
            </td>
            <td>
              <textarea
                id="preparation"
                name="preparation"
                onChange={handleContentChange}
                value={content.preparation}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
