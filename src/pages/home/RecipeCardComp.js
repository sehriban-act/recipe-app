import React from 'react';

import {  useNavigate } from 'react-router-dom';

import defaultImage from "../../assets/default-image.jpg";

import { Button, RecipeCard, RecipeHeader, RecipeImage } from './HomeStyle';
const RecipeCardComp = ({recipe,key}) => {
    let navigate=useNavigate()
    const moreClick=()=>{
        navigate("/details",{state:{recipe}})
    }
  return (
   <RecipeCard>
   <RecipeHeader>{recipe.label}</RecipeHeader>
   <RecipeImage src={recipe?.image|| defaultImage}/>
  <Button onClick={moreClick}>see More</Button>
   </RecipeCard>
  );
}

export default RecipeCardComp;
