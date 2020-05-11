import React from "react";
import styled from "styled-components";
import CSS from "./images/CSS_.svg"
import Database from "./images/database.svg"
import Git from "./images/git.svg"
import JSLogo from "./images/JavaScript.svg"
import Node from "./images/node.svg"
import Python from "./images/python.svg"
import ReactLogo from "./images/react.svg"
import HTML from "./images/HTML_.svg"



const Main = styled.div `
text-align: center;
`

const Logos = styled.div `
display:flex;
justify-content:center;
flex-wrap: wrap;
`

const LogoBox = styled.div `
display:flex;
align-content: flex-end;
justify-content: flex-end;
flex-direction:column
`

const Logo = styled.img `
padding: 20px;
height: auto;
width: 3rem;
`

export default function WelcomePage() {
  return (
      <Main>
    <Logos>
    <LogoBox><Logo src={JSLogo}/> JavaScript </LogoBox>
    <LogoBox><Logo src={ReactLogo} style={{width: '5rem'}}/> React </LogoBox>
    <LogoBox><Logo src={CSS}/> CSS </LogoBox>
    <LogoBox><Logo src={Python}/> Python </LogoBox>
    <LogoBox><Logo src={Node} style={{width: '5rem'}}/> Node </LogoBox>
    <LogoBox><Logo src={HTML}/> HTML </LogoBox>
    <LogoBox><Logo src={Git}/> Git </LogoBox>
    <LogoBox><Logo src={Database} style={{height: '3.5rem'}}/> SQL </LogoBox>
    </Logos>
      </Main>
  );
}