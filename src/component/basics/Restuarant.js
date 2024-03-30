import React, { useEffect, useState } from 'react'
import "./style.css"
import MenuCard from './MenuCard'

const Restuarant = () => {


  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  
  const [selectedCategory, setSelectedCategory] = useState("All"); // Default to show all recipes
  const [selectedDifficulty, setSelectedDifficulty]= useState("All");


  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of recipes per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/recipes');
        // console.log(response);
        const jsonData = await response.json();
        // console.log('hii',jsonData);


        const formattedRecipes = jsonData.recipes.map(recipe => ({
          id: recipe.id,
          name: recipe.name,
          image: recipe.image,
          category: recipe.cuisine, // Assuming cuisine as the category field
          difficulty: recipe.difficulty
        }));
        // console.log(formattedRecipes);
        setRecipes(formattedRecipes);
        setFilteredRecipes(formattedRecipes); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 




  const filterRecipes = (category, difficulty) => {
    setSelectedCategory(category);
    setSelectedDifficulty(difficulty);

    if (category === "All") {
      setFilteredRecipes(recipes); 
      console.log(recipes);
    } else if(category!=="All"){
      const filtered = recipes.filter(recipe => recipe.category === category);
      setFilteredRecipes(filtered);
      console.log(filtered);
    }

    if(difficulty==="All"){
      const filtered = recipes.filter(recipe => recipe.difficulty === difficulty);
      setFilteredRecipes(filtered);
      console.log(filtered);
    }
    else if(difficulty==="Easy"){
      const filtered = recipes.filter(recipe => recipe.difficulty === difficulty);
      setFilteredRecipes(filtered);
      console.log(filtered);
    }
    else if(difficulty==="Medium"){
      const filtered = recipes.filter(recipe => recipe.difficulty === difficulty);
      setFilteredRecipes(filtered); 
      console.log(filtered);
    }
    else if(difficulty==="Hard"){
      const filtered = recipes.filter(recipe => recipe.difficulty === difficulty);
      setFilteredRecipes(filtered);
      console.log(filtered);
    }
    setCurrentPage(1);
  };



  const totalPages = Math.ceil(filteredRecipes.length / itemsPerPage);
  const indexOfLastRecipe = currentPage * itemsPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - itemsPerPage;
  const currentRecipes = filteredRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const handlePreviousPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };


  return(
  <> 

    <nav className="navbar">
      <div className="btn-group">


          <select className="filterCuisine" value={selectedCategory} onChange={(e) => filterRecipes(e.target.value)}>
            <option value="All">All</option>
            <option value="Italian">Italian</option>
            <option value="Asian">Asian</option>
            <option value="American">American</option>
            <option value="Mexican">Mexican</option>
            <option value="Mediterranean">Mediterranean</option>
            <option value="Pakistani">Pakistani</option>
            <option value="Japanese">Japanese</option>
            <option value="Moroccan">Moroccan</option>
            <option value="Korean">Korean</option>
            <option value="Greek">Greek</option>
            <option value="Thai">Thai</option>
            <option value="Indian">Indian</option>
            <option value="Turkish">Turkish</option>
            <option value="Smoothie">Smoothie</option>
            <option value="Russian">Russian</option>
            <option value="Labanese">Labanese</option>
            <option value="Brazilian">Brazilian</option>

          </select>



          <select className= "filterDifficulty" value={selectedDifficulty} onChange={(e) => filterRecipes(e.target.value)}>
            <option value="All">All</option>
            <option value="Easy">Easy</option>
            <option value="Italian">Medium</option>
            <option value="Asian">Hard</option>

          </select>


      </div>

    </nav>

     <MenuCard filteredRecipes={currentRecipes}/>
     <div className="pagination">
        <button disabled={currentPage === 1} onClick={handlePreviousPage}>Previous</button>
        <span>{currentPage} / {totalPages}</span>
        <button disabled={currentPage === totalPages} onClick={handleNextPage}>Next</button>
      </div>
     {/* <MenuCard/> */}
  </>
  );
};

export default Restuarant;
