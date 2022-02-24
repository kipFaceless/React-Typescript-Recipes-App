//import { Istate as IProps} from '../../RecipesApp'


import { makeStyles, Container, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';


const useStyles = makeStyles((theme)=>({

    media: {
      height : 250,
      [theme.breakpoints.down("sm")]:{
          height : 150
      }
    },
    card :{
        marginBottom : theme.spacing(5)
    }  
}))
const List = ({ recipe }) => {

    const classes = useStyles()

    const handleList = () => {
        return recipe.map(rec => {
            return (
                <CardActionArea key={rec.id}>
                    <CardMedia className= {classes.media}
                        image={rec.poster} alt={rec.name} width="150px"
                    />
                       
                    
                    <h2><strong>{rec.name}</strong></h2>
                    <p> <strong>Prepare mode </strong>: {rec.prepare_mode}</p>
                    <p> <strong>Ingredients</strong>: {rec.stuff}</p>
                    <p> <strong>Duration </strong>: {rec.duration} min.</p>
                    <p> <strong>Calories </strong>: {rec.calories} g</p>
                    <p> <strong>Cost</strong>: {rec.cost} AKZ</p>
                </CardActionArea>
            )

        })
    }
    return (
        <Card  className={classes.card}>
            {handleList()}
        </Card>
    )






}



export default List;