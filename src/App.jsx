import { useState, useEffect } from 'react'
import Recipe from './Recipe'
import './App.css'
import chef from './assets/Male-chef-cooking-in-kitchen.svg'

function App() {
 

 const APP_ID = import.meta.env.PROD.VITE_APP_ID
 const APP_KEY = import.meta.env.VITE_APP_KEY

  

  const [recipes, setRecipes] = useState({})
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("")
 
  
  
    useEffect( () => {
     if(query.length > 0) getRecipe()
      
     console.log("query")
    
     
      
    }, [query])

    
     
      
    

    
  

  const getRecipe = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    setRecipes(data.hits)
    console.log(data)
    
    
  }

  function updateSearch(e) {
    setSearch(e.target.value)
   
  }

  function getSearch(e) {
    e.preventDefault()
    setQuery(search)
    setSearch("")
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className='search-form'>
        <input className='search-bar' type="text" value={search} onChange={updateSearch}/>
        <button className='search-btn' type='submit'>search</button>
      </form>
      { Array.isArray(recipes) ?

       !recipes.length?
      
      <div className='not-found'>not found</div>
      :

      <div className='recipe-grid'>
      {recipes.map((recipe, index) => (
        <Recipe 
        key={index}
        title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>

       
      
      :
      <div className='empty'>
        <p className="need">Need a recipe?, I gat you</p>
        <img className="chef" src={chef} alt=""/>
      </div>
      
      
      
      }
      
    </div>
  )
}

export default App
