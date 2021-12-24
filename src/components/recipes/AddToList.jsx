
import { useForm } from 'react-hook-form';




const AddToList = (props) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    
    const onSubmit = (data, e) => {
        //console.log("data", data)
        props.addRecipe(data)
        e.target.reset()
       
       // e.target.reset()
    }
 /*   const handleChange = (e)=> {
   
     
        setInput({
            ...input,
            [e.target.name] : e.target.value
        } )
    }

*/
 
  

    return (
        <form onSubmit =  {  handleSubmit(onSubmit)}>
            <input    className = "form-control mt-2"
                type ="text"     {...register("name", { required: true })} /> 
                
                {errors.name && <span>This field is required</span>}
             <textarea   
                
                placeholder ="Ingredients"
                className = "form-control mt-2"
             // value = {input.stuff}
                name="stuff"
                
            
            />
            
            <textarea   defaultValue="Water required" 
                
                placeholder ="Water"
                className = "form-control mt-2"
                //value = {input.prepare_mode}
               
                {...register("prepare_mode", { required: true })}
               // onChange = {(handleChange)}
               
            />
            <input    
                type ="text"
                placeholder ="Duration"
                className = "form-control mt-2"
               // value = {input.duration}
                name="duration"
                //onChange = {handleChange}
            />
            <input    
                type ="number"
                placeholder ="Calories"
                className = "form-control mt-2"
               //value = {input.calories}
                name="calories"
                //onChange = {handleChange}
            />
            <input    
                type ="number"
                placeholder ="Cost"
                className = "form-control mt-2"
               // value = {input.cost}
                name="cost"
                //onChange = {handleChange}
            />
            <input    
                type ="file"
                placeholder ="Poster"
                className = "form-control mt-2"
                //value = {input.poster}
                name="poster"
                //onChange = {handleChange}
            />
                                
            
            <button
            
            className =" btn btn-primary mt-2"
           

            > Add Recipe
            </button>

   
        </form>
          );
   
}

  
export default AddToList;

