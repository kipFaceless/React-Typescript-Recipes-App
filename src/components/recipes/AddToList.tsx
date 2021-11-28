
import { useState } from 'react';
const AddToList = () => {

    const [input, setInput] = useState(
        {
        id : "",
         name : "",
        duration : "",
        calories : "",
        stuff : "",
        poster : "",
        cost : "",
        prepare_mode:""
        },
    )

    const handleChange = ( e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) :void => {
   
     
        setInput({
            ...input,
            [e.target.name] : e.target.value
        } )
    }

    const handleSubmit = ()  => {

        console.log("input", input)
    }

    return <div>
        <form >
            <input    
                type ="text"
                placeholder ="Name"
                className = "form-control"
                value = {input.name}
                name="name"
                onChange = {(handleChange)}
            /> 

             <textarea   
                
                placeholder ="Ingredients"
                className = "form-control mt-2"
              value = {input.stuff}
                name="stuff"
                onChange = {(handleChange)}
            
            />
            
            <textarea   
                
                placeholder ="Prepare mode"
                className = "form-control mt-2"
                //value = {input.prepare_mode}
                name="prepare_mode"
                onChange = {(handleChange)}
               
            />
            <input    
                type ="text"
                placeholder ="Duration"
                className = "form-control mt-2"
                value = {input.duration}
                name="duration"
                onChange = {handleChange}
            />
            <input    
                type ="number"
                placeholder ="Calories"
                className = "form-control mt-2"
                value = {input.duration}
                name="calories"
                onChange = {handleChange}
            />
            <input    
                type ="number"
                placeholder ="Cost"
                className = "form-control mt-2"
                value = {input.cost}
                name="cost"
                onChange = {handleChange}
            />
            <input    
                type ="file"
                placeholder ="Poster"
                className = "form-control mt-2"
                value = {input.poster}
                name="poster"
                onChange = {handleChange}
            />

            
            <button
            type = "submit"
            className =" btn btn-primary mt-2"
            onClick = {handleSubmit}

            > Add Recipe
            </button>

        </form>
    </div>;
}


export default AddToList;

