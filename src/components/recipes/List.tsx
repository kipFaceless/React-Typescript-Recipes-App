import { Istate as IProps} from '../../RecipesApp'

const List : React.FC<IProps> = ({recipe})=> {

    const handleList = ()=>{
        return recipe.map(rec =>{
            return(
                <li key={rec.id}>
                <div>
                    <img src={rec.poster} alt={rec.name} width="150px"></img>
                </div>
                <h2>{rec.name}</h2>
                <p>Modo preparo : {rec.prepare_mode}</p>
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