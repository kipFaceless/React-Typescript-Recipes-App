
import { useForm } from 'react-hook-form';


const AddToList = (props) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    
    
    const onSubmit = (data, e) => {
        props.addRecipe(data)
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
                type ="text"
                {...register("poster")}  
                placeholder ="Poster"
                className = "form-control mt-2"
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

