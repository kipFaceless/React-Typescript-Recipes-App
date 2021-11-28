import { useState } from "react";
import AddToList from "./components/recipes/AddToList";
import List from "./components/recipes/List";




export  interface Istate{
    recipe: {
      id : number,
       name : string,
      duration : number,
      calories : number,
      stuff : string,
      poster ?: string,
      cost :number,
      prepare_mode: string
  }[]
  }

export const RecipesApp = () => {




    const [recipe, setRecipe] = useState<Istate["recipe"]>([
        {   
            id: 1,
             name : "Banana caramelada com suspiro",
            duration : 6,
            calories :120,
            stuff : "6 bananas-pratas ,  1 xícara e meia de açúcar, 3 claras,   Canela a gosto",
            poster : "https://s2.glbimg.com/RemD1qzt8b_zoY6ALciOS_RgeVc=/0x0:3979x3528/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2021/L/x/SXi9WkQViDu711NW7oGQ/banana-caramelada-com-suspiro2.jpg",
            cost :800,
            prepare_mode: "1. Preaqueça o forno a 180 graus Celsius.     2. Descasque e corte as bananas em pedaços grandes. 3. Misture as bananas com meia xícara de açúcar e uma pitada de canela."
         
        }
    ])

    
    recipe.map(rec => rec.calories)
 
    return <div className ="container row">
        <h1>Recipes App</h1>
        <div className ="col-md-6">
            <AddToList />
        </div>
        <div className ="col-md-6">
        <List recipe ={recipe}/>
        </div>
        
    </div>;
}

