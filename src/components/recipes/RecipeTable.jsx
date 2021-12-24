//import { Istate as IProps} from '../../RecipesApp'



const RecipeTable = (props) => {
  let recipe = props.recipe
   
    return <div>
        
        
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Recipe Name</th>
      <th scope="col">Duration</th>
      <th scope="col">Calories</th>
      <th scope="col">Cost</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
      {     
          recipe.length > 0 ?
          recipe.map(rec => {
           return(
            <tr key={rec.id}>
            <th scope="row">{rec.id}</th>
            <td>{rec.name}</td>
            <td>{rec.duration} min</td>
            <td>{rec.calories} Cal</td>
            <td>{rec.cost} U$D</td>
            <td><button className="btn btn-primary"  onClick={() => {props.editRow(rec)}}>Edit </button>
             <button className="btn btn-danger ml-2 " onClick={() => {props.deleteRecipe(rec.id)}}>Delete </button></td>
          </tr>
          
           ) 

          })
          : <tr>There Is No Recipes</tr>
      }
   
   
  
  </tbody>
</table>
    </div>;
}


export default RecipeTable;