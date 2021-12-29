import { useForm } from 'react-hook-form';

const EditRecipeForm = (props) => {
   
    const { register, handleSubmit,  formState: { errors }, setValue } = useForm({
        defaultValues : props.currentRecipe
    }
       
    );

    setValue('name', props.currentRecipe.name)
    setValue('prepare_mode', props.currentRecipe.prepare_mode)
    setValue('cost', props.currentRecipe.cost)
    setValue('poster', props.currentRecipe.poster)
    setValue('stuff', props.currentRecipe.stuff)
    setValue('duration', props.currentRecipe.duration)
    setValue('calories', props.currentRecipe.calories)
    
    
    const onSubmit = (data, e) => {
        data.id = props.currentRecipe.id
        props.updateRecipe(props.currentRecipe.id, data)
        e.target.reset()
       
    }

  

    return (
        <form onSubmit =  {  handleSubmit(onSubmit)}>
        <input    className = "form-control mt-2"
            type ="text"     {...register("name", { required: true })} /> 
            
            {errors.name && <span>This field is required</span>}
         <textarea   
             {...register("stuff")} 
            placeholder ="Ingredients"
            className = "form-control mt-2"
         // value = {input.stuff}
           
            
        
        />
        
        <textarea   defaultValue="Water required" 
            
            placeholder ="Water"
            className = "form-control mt-2"
           
            {...register("prepare_mode", { required: true })}
           // onChange = {(handleChange)}
           
        />
        <input 
             {...register("duration")}   
            type ="text"
            placeholder ="Duration"
            className = "form-control mt-2"
            
            //onChange = {handleChange}
        />
        <input    
            type ="number"
            {...register("calories", )}  
            placeholder ="Calories"
            className = "form-control mt-2"
            name="calories"
            //onChange = {handleChange}
        />
        <input    
            type ="number"
            {...register("cost")}  
            placeholder ="Cost"
            className = "form-control mt-2"
           
            name="cost"
            //onChange = {handleChange}
        />
        <input    
            type ="file"
            {...register("poster")}  
            placeholder ="Poster"
            className = "form-control mt-2"
            name="poster"
            //onChange = {handleChange}
        />
                            
        
        <button
        
        className =" btn btn-primary mt-2"
       

        > Edit Recipe
        </button>


    </form>
          );
   
}
 
export default EditRecipeForm;