import { useState } from "react";

import AddToList from "./components/recipes/AddToList";
import List from "./components/recipes/List";
import RecipeTable from "./components/recipes/RecipeTable";
import { v4 as uuid4 } from "uuid";
import "./style/main.css";
import EditRecipeForm from "./components/recipes/EditRecipeForm";



export const RecipesApp = () => {
  const userRecipes = [
    {
      id: uuid4(),
      name: "Banana caramelada com suspiro",
      duration: 6,
      calories: 120,
      stuff:
        "6 bananas-pratas ,  1 xícara e meia de açúcar, 3 claras,   Canela a gosto",
      poster:
        "https://s2.glbimg.com/RemD1qzt8b_zoY6ALciOS_RgeVc=/0x0:3979x3528/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2021/L/x/SXi9WkQViDu711NW7oGQ/banana-caramelada-com-suspiro2.jpg",
      cost: 800,
      prepare_mode:
        "1. Preaqueça o forno a 180 graus Celsius.     2. Descasque e corte as bananas em pedaços grandes. 3. Misture as bananas com meia xícara de açúcar e uma pitada de canela.",
    },
    {
      id: uuid4(),
      name: "Receita 2",
      duration: 29,
      calories: 90,
      stuff:
        "6 bananas-pratas ,  1 xícara e meia de açúcar, 3 claras,   Canela a gosto",
      poster:
        "https://s2.glbimg.com/RemD1qzt8b_zoY6ALciOS_RgeVc=/0x0:3979x3528/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2021/L/x/SXi9WkQViDu711NW7oGQ/banana-caramelada-com-suspiro2.jpg",
      cost: 230,
      prepare_mode:
        "1. Preaqueça o forno a 180 graus Celsius.     2. Descasque e corte as bananas em pedaços grandes. 3. Misture as bananas com meia xícara de açúcar e uma pitada de canela.",
    },
  ];

  const [recipes, setRecipes] = useState(userRecipes);

  
 


  //Add New Recipe
  const addRecipe = (recipe) => {
    recipe.id = uuid4();
    setRecipes([...recipes, recipe]);
  };

  // Delete Recipe
    const deleteRecipe = id => {
        const fitlerRecipes = recipes.filter(rec => rec.id !== id)
        setRecipes(fitlerRecipes)
    }
 // Editing Recipe
    const [editing, setEditing] = useState(false);
    const [currentRecipe, setCurrentRecipe] = useState({
  
        id: null,
        name: "",
        duration: null,
        calories: null,
        stuff: "",
        poster: "",
        cost: null,
        prepare_mode: ""
    })

    const editRow = recipe =>{
        setEditing(true)
        setCurrentRecipe({
        id: recipe.id,
        name:recipe.name,
        duration: recipe.duration,
        calories: recipe.calories,
        stuff: recipe.stuff,
        poster: recipe.poster,
        cost: recipe.cost,
        prepare_mode: recipe.prepare_mode
        })
    }

    const updateRecipe = (id, updateRecipe) => {
        setEditing(false)
        setRecipes(recipes.map(rec => (rec.id === id ? updateRecipe : rec)))
    

    }


  recipes.map((rec) => rec.calories);

  return (
    <div className="container row">
      <h1>Recipes App</h1>

      <div className="col-md-5">
        {
            editing ? (
                    <div>
                        <EditRecipeForm 
                        currentRecipe ={currentRecipe}
                        updateRecipe = {updateRecipe}
                        /> 
                    </div>
            ) : (
                <AddToList addRecipe={addRecipe}
                
                />
            )
        }
        
        
       
      </div>
      <div className="col-md-7">
        <RecipeTable 
            recipe={recipes} 
            deleteRecipe = {deleteRecipe}
            editRow = {editRow}
            
            />

        <List recipe={recipes} />
      </div>
    </div>
  );
};
