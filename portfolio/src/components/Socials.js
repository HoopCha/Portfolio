import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'

import { faArtstation, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Main = styled.div `

text-align: center;
`

const Logos = styled.div `
border-top: 1px solid black;
display:flex;
justify-content:center;
flex-wrap: wrap;
`
const StyledLink = styled.a `
text-decoration: none;
:hover{
  background-color: #ebebeb;
  border-radius: 15px;
}
`

const LogoBox = styled.div `

display:flex;
align-content: flex-end;
justify-content: flex-start;
align-items: center;
color:#333;
flex-direction:column;
font-weight: bold;
padding: 1rem;
-webkit-transition:all 1s ease-in-out;
&:hover {
-webkit-transition:all .2s ease-in-out;
transform:scale(1.1,1.1);
}
`

export default function Skills() {
  return (
    <Main>
    <Logos>
    <StyledLink href="https://github.com/HoopCha" target="_blank"><LogoBox><FontAwesomeIcon icon={faGithub} size="2x" /> Github</LogoBox></StyledLink>
    <StyledLink href="https://www.artstation.com/hoopcha" target="_blank"><LogoBox><FontAwesomeIcon icon={faArtstation} size="2x" /> Art Station  </LogoBox></StyledLink>
    <StyledLink href="https://www.linkedin.com/in/chase-hooper/" target="_blank"><LogoBox><FontAwesomeIcon icon={faLinkedin} size="2x" /> linkedin  </LogoBox></StyledLink>
    </Logos>
    </Main>
  );
}