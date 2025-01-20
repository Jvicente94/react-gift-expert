import { useState } from "react";
import { AddCategory, GifGrid  } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);


const onAddcategory = (newCategory) => {

    if(categories.includes(newCategory)) return;
    
    setCategories(cat => [newCategory, ...cat]);
    // setCategories([...categories, 'HunterXHunter']);
    // setcategories(cat => [...cat, 'HunterXHunter']);
};    

  return (
    <>
     <h1>GifExpertApp</h1>

    <AddCategory 
        setCategories={ setCategories }
        onNewCategory={ onAddcategory }    // es lo mismo que onNewValue={ (value) => onAddcategory(value) } 
    />
       
    { categories.map( category => ( <GifGrid key={category} category={ category } />       ) )}
    </>
  )
}
