import React,{useState} from 'react';

import axios from 'axios';

import homeSvg from "../../assets/home.svg";
import Header from '../../components/header/Header';

import { ImgDiv, MainContainer,HomeImg} from './HomeStyle';
import RecipeCardComp from './RecipeCardComp';
const mealTypes=["Breakfast","Lunch","Dinner","Snack","Teatime"]
const APP_KEY="02a9897838d00b1fa7a1711a5dccd294"
const APP_ID="40829007"
const Home = () => {
const [query,setQuery]=useState('pizza')
const [recipes,setRecipes]=useState() 
const [meal,setMeal]=useState(mealTypes[0].toLowerCase())
const url=`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`
const getData =async()=>{
  if (query!=="") {
    const result=await axios.get(url)
    if(result.data.hits){
      console.log("no food a this name");
    }
    setRecipes(result.data.hits)
    setQuery("")
  }
  else{console.log("please fil the form")}
}




  return (
    <div>
    <Header
    setQuery={setQuery}
    query={query}
    getData={getData}
    mealTypes={mealTypes}
    setMeal={setMeal}
    meal={meal}
    />
    {recipes? (<MainContainer>
      
      {recipes.map((recipe,index)=>(<RecipeCardComp key={index} recipe={recipe.recipe}/>
        ))}
        </MainContainer>)

 : <ImgDiv>
 <HomeImg src={homeSvg}/>
    </ImgDiv>}
    </div>
  );
}

export default Home;
