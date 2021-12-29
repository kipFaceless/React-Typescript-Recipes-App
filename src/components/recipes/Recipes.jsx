
import { useEffect, useState } from "react";
import AddToList from "./AddToList";
import List from "./List";
import RecipeTable from "./RecipeTable";
//import { v4 as uuid4 } from "uuid";
//import "./style/main.css";
import EditRecipeForm from "./EditRecipeForm";
import { onSnapshot, collection, doc, addDoc, updateDoc, deleteDoc, serverTimestamp, query, orderBy } from "firebase/firestore"
import db from "../../firebase";





export const RecipesApp = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {

    const collectionRef = collection(db, "recipes")
    const q = query(collectionRef, orderBy("date", "desc"));

    const unsub = onSnapshot(q, (snapshot) =>
      setRecipes(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    );

    return unsub;

  }, []);



  //Add New Recipe
  const addRecipe = async (recipe) => {
    try {
      recipe.date = serverTimestamp()
      //const docRef = doc(db, "recipes", "new recipe")  Using custom ID
      const collectionRef = collection(db, "recipes")
      await addDoc(collectionRef, recipe).then(
        alert("New Recipe Added Successfully")
      )
      //recipe.id = uuid4();
      //setRecipes([...recipes, recipe]);

    } catch (error) {
      console.log("error", error)
    }


  };

  // Delete Recipe
  const deleteRecipe = async id => {

    try {


      const docRef = doc(db, "recipes", id)
      await deleteDoc(docRef, updateRecipe).then(
        alert("Deleted Successfully!")
        // const fitlerRecipes = recipes.filter(rec => rec.id !== id)
        // setRecipes(fitlerRecipes)
      )



    } catch (error) {

    }

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

  const editRow = recipe => {
    setEditing(true)
    setCurrentRecipe({
      id: recipe.id,
      name: recipe.name,
      duration: recipe.duration,
      calories: recipe.calories,
      stuff: recipe.stuff,
      poster: recipe.poster,
      cost: recipe.cost,
      prepare_mode: recipe.prepare_mode
    })
  }

  const updateRecipe = async (id, updateRecipe) => {

    try {

      setEditing(false)

      const docRef = doc(db, "recipes", id)
      await updateDoc(docRef, updateRecipe).then(
        alert("Edited Successfully")
      )

      //setRecipes(recipes.map(rec => (rec.id === id ? updateRecipe : rec)))

    } catch (error) {

    }



  }


  recipes.map((rec) => rec.calories);

  return (
    <div className="container row">
     

      <div className="col-md-5">
        {
          editing ? (
            <div>
              <h2>Edit Recipe</h2>
              <EditRecipeForm
                currentRecipe={currentRecipe}
                updateRecipe={updateRecipe}
              />
            </div>
          ) : (
            <> <h2>New Recipe</h2>
              <AddToList addRecipe={addRecipe} />
            </>



          )
        }



      </div>
      <div className="col-md-7">
        <RecipeTable
          recipe={recipes}
          deleteRecipe={deleteRecipe}
          editRow={editRow}

        />

        <List recipe={recipes} />
      </div>
    </div>
  );
};