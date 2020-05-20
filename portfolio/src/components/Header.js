import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";
import BB from './images/bouncingball.png'

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  height: 50px;
`;

const Image = styled.img`
width:auto;
height:100%;
`
const Main = styled.div `
display:flex;
flex-wrap: wrap;
justify-content:space-around;
align-items: center;
#border-bottom: 1px solid black;
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

export default function Header() {
  return (
    <header>
    <Main>
    <Link to="/" style={{textDecoration: 'none'}}><Title><Image src={BB} className="favicon" alt="Bouncing Ball" /> Chase Hooper</Title></Link>
        <div>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/projects/web-dev">Projects</StyledLink>
        </div>
    </Main>
    </header>
  );
}