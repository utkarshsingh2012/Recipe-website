import React from 'react'
import { Link } from 'react-router-dom';



const MenuCard = ({ filteredRecipes }) => {

  if (!Array.isArray(filteredRecipes)) {
    return <div>No recipes found.</div>;
  }


  console.log(filteredRecipes);
  return (
    <>
      <section className='main-card--cointainer'>
        {/* {filteredRecipes.recipes.map((curElem) => { */}
        {/* // const{id, name,image} = curElem; */}
        {filteredRecipes.map(recipe => {
          // id: recipe.id,
          // name: recipe.name,
          // image: recipe.image,
          // category: recipe.cuisine
          const { id, name, image } = recipe; 
        

        return(
        
          <div className="card-container" key={id}>
            <div className="card">
              <div className='card-body'>
                {/* <span className='card-number card-circle subtle'>{id}</span> */}
                {/* <span className='card-author subtle'>{name}</span> */}
                
                <span className='card-description subtle'>
                  {/* {description} */}
                </span>
                {/* <div className='card-read'>Read</div> */}
              </div>
              <img
                src={image}
                alt="images"
                className='card-media'
              />
              <h2 className='card-title'> {name} </h2>
              <Link to={`/recipe/${id}`} className='card-tag subtle'>View Recipe</Link>
              {/* <span className='card-tag subtle'>View Recipie</span> */}
            </div>
          </div>
        );
        })}
      </section>
    </>
  );
};

export default MenuCard
