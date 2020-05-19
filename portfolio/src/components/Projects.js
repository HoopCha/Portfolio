import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'
import Socials from "./Socials";

import SpeakOut from "./WebDevProjects/SpeakOut"
import CoachingGroup from "./WebDevProjects/CoachingGroup"
import FoodieFun from "./WebDevProjects/FoodieFun"


const Main = styled.div `
display:flex;
flex-direction:column;
justify-content:center;
padding: 0% 24%;
`
const Header = styled.div `
display:flex;
justify-content:space-around;
font-size: 2rem;
border-bottom: 1px solid black;
`


const StyledLink = styled(Link) `
color: #333;
padding: 15px;
margin-left: 10px;
text-align: center;
text-decoration: none;
border: solid black 1px;
border-radius: 15px;
margin: 10px;
-webkit-transition:all .3s ease-out;
:hover{
  background-color: #ebebeb;
  border-radius: 15px;
  border: solid white 1px;
}
`

export default function Projects() {
  return (
    <Main>
<Header>
<StyledLink to="/projects/web-dev" style={{backgroundColor: "#ebebeb", border: "white"}} >Web Development </StyledLink>
<StyledLink to="/projects/animation">Animation</StyledLink>
</Header>
<SpeakOut/>
<FoodieFun/>
<CoachingGroup/>
<Socials/>
    </Main>
  );
}