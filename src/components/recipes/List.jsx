//import { Istate as IProps} from '../../RecipesApp'

const List = ({ recipe }) => {

    const handleList = () => {
        return recipe.map(rec => {
            return (
                <li key={rec.id}>
                    <div>
                        <img src={rec.poster} alt={rec.name} width="150px"></img>
                    </div>
                    <h2><strong>{rec.name}</strong></h2>
                    <p> <strong>Prepare mode </strong>: {rec.prepare_mode}</p>
                    <p> <strong>Ingredients</strong>: {rec.stuff}</p>
                    <p> <strong>Duration </strong>: {rec.duration} min.</p>
                    <p> <strong>Calories </strong>: {rec.calories} g</p>
                    <p> <strong>Cost</strong>: {rec.cost} AKZ</p>
                </li>
            )

        })
    }
    return (
        <ul>
            {handleList()}
        </ul>
    )






}



export default List;