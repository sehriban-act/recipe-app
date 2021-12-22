import React from 'react'
import { AboutContainer, HeaderContainer, InfoContainer, StyledImage } from './AboutStyle'
import codingSvg from "../../assets/coding.svg"
const About = () => {
    return (
      <AboutContainer>
          <StyledImage src={codingSvg}/>
          <HeaderContainer>
          <h1>About Software Developer <span>Sehriban Matur</span> </h1>
          </HeaderContainer>
          <InfoContainer>
          <h2>Hi, I'am Sehriban</h2>
                <h3>I’m currently learning Full-Stack Development Languages.</h3>
                <h4> I've already known JS, ReactJS, ReactNative, NodeJS, MongoDB,SQL,
          Python, AWS Services.</h4>
          <h2>
          <a href="mailto:smatur@clarusway.com">Send email</a> :
          helen@clarusway.com
        </h2>
          </InfoContainer>
      </AboutContainer>
    )
}
export default About




