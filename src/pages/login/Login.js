import React from 'react'
import { FormContainer, Header, LoginContainer, StyledButton,StyledForm, StyledImg, StyledInput } from './LoginStyle'
import mealSvg from "../../assets/meal.svg";
const Login = () => {
  const handleSubmit=(e)=>{
    e.preventDefault();
    window.location.href="/"
  }
  return (
    <LoginContainer>
    <FormContainer>
    <StyledImg src={mealSvg}></StyledImg>
    <Header>{"<Clarusway/>"}Recipe</Header>
<StyledForm onSubmit={handleSubmit}>
    <StyledInput type="text" placeholder='username' required/>
    <StyledInput type="password" placeholder='password' required/>
    <StyledButton type="submit">Login</StyledButton>

    </StyledForm>
    </FormContainer>
    </LoginContainer>
  )
}

export default Login
