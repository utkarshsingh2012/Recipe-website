import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams(); // Get the id parameter from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const baseurl= process.env.API;
        const response = await fetch(`https://dummyjson.com/recipes/${id}`);
        const jsonData = await response.json();
        setRecipe(jsonData);
      } catch (error) {
        console.error('Error fetching recipe:', error);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  const { name, image, ingredients, instructions, prepTimeMinutes } = recipe;

  return (
    <div className='whole'>
        <div className='img-container'>
            <img className='img-detailed' src={image} alt={name} />
        </div>
    
      <h1>{name}</h1>
      <p> Preparation time: {prepTimeMinutes} minutes</p>
      <div className='div-class'>
      <div className='div-ingredients'>
        <h2>Ingredients:</h2>
        <ul>
            {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
            ))}
        </ul>
      </div>
      <div className='div-instructions'>
      <h2>Instructions:</h2>
        <ol>
            {instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
            ))}
        </ol>
      </div>

      </div>
              
    </div>
  );
};

export default RecipeDetail;
