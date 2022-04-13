//import { Istate as IProps} from '../../RecipesApp'




import {Table ,TableBody ,TableCell ,TableContainer ,TableHead ,TableRow, Paper } from '@material-ui/core';


/* import faker from 'faker';
letimport { Paper } from '@material-ui/core';
 USERS = [], STATUSES = ['Active', 'Pending', 'Blocked'];

for (let i=0; i<14; i++) {
    USERS[i] = {
        name: faker.name.findName(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
        jobTitle: faker.name.jobTitle(),
        company: faker.company.companyName(),
        joinDate: faker.date.past().toLocaleDateString('pt-PT'),
        status : STATUSES[Math.floor(Math.random() * STATUSES.length)]
    }
}

*/
const RecipeTable = (props) => {
  let recipe = props.recipe
  const noRecipes = "There Is No Recipes"
  return  (
    <TableContainer >
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
        <TableRow>
        <TableCell>Dessert (100g serving)</TableCell>
        <TableCell align="right">Calories</TableCell>
        <TableCell align="right">Fat&nbsp;(g)</TableCell>
        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
        <TableCell align="right">Protein&nbsp;(g)</TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
        {recipe.map((row) => (
        <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
            {row.name}
            </TableCell>
            <TableCell align="right">{row.prepare_mode}</TableCell>
            <TableCell align="right">{row.stuff}</TableCell>
            <TableCell align="right">{row.duration}</TableCell>
            <TableCell align="right">{row.calories}</TableCell>
        </TableRow>
        ))}
    </TableBody>
    </Table>
</TableContainer> 
  )
  
  
  
  
  /*<div>


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
              return (
                <tr key={rec.id}>
                  <th scope="row">{rec.id}</th>
                  <td>{rec.name}</td>
                  <td>{rec.duration} min</td>
                  <td>{rec.calories} Cal</td>
                  <td>{rec.cost} U$D</td>
                  <td><button className="btn btn-primary" onClick={() => { props.editRow(rec) }}>Edit </button>
                    <button className="btn btn-danger ml-2 " onClick={() => { props.deleteRecipe(rec.id) }}>Delete </button></td>
                </tr>

              )

            })
            : <tr><td>{noRecipes}</td></tr>
        }



      </tbody>
    </table>  
        </div> */
   
 
}


export default RecipeTable;