import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'
import Socials from "./Socials";

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
`

const Image = styled.img`
width: 150px;
height: 150px;
border-radius: 150px;
`

const StyledLink = styled(Link) `
color: #333;
padding: 15px;
margin-left: 10px;
text-align: center;
text-decoration: none;
:hover{
  background-color: #ebebeb;
  border-radius: 15px;
}
`

export default function Animation() {
  return (
    <Main>
<Header>
<StyledLink to="/projects/web-dev">Web Development</StyledLink>
<StyledLink to="/projects/animation">Animation</StyledLink>
</Header>
<p>test 2</p>
<Socials/>
    </Main>
  );
}