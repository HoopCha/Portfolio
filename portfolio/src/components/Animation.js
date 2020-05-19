import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'
import Socials from "./Socials";
import breakpoint from 'styled-components-breakpoint';

import AfterEffects from "./AnimationProjects/AfterEffects"
import AvastYe from "./AnimationProjects/AvastYe"
import DnD from "./AnimationProjects/DnD"
import Fence from "./AnimationProjects/Fence"

const Main = styled.div `
display:flex;
flex-direction:column;
justify-content:center;
padding: 0% 24%;
${ breakpoint('mobile', 'tablet')`
padding: 0% 2%;
`};
${ breakpoint('tablet', 'desktop')`
padding: 0% 0%;
`};
`
const Header = styled.div `
display:flex;
justify-content:space-around;
font-size: 2rem;
border-bottom: 1px solid black;

${ breakpoint('mobile', 'tablet')`
flex-direction:column;
`};
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


export default function Animation() {
  return (
    <Main>
<Header>
<StyledLink to="/projects/web-dev" >Web Development</StyledLink>
<StyledLink to="/projects/animation" style={{backgroundColor: "#ebebeb", border: "white"}}>Animation</StyledLink>
</Header>
<AfterEffects/>
<AvastYe/>
<DnD/>
<Fence/>
<Socials/>
    </Main>
  );
}