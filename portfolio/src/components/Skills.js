import React from "react";
import styled from "styled-components";
import breakpoint from 'styled-components-breakpoint';


import CSS from "./images/svg/CSS_.svg"
import Database from "./images/svg/database.svg"
import Git from "./images/svg/git.svg"
import JSLogo from "./images/svg/JavaScript.svg"
import Node from "./images/svg/node.svg"
import Python from "./images/svg/python.svg"
import ReactLogo from "./images/svg/react.svg"
import HTML from "./images/svg/HTML_.svg"

import AE from "./images/aftereffects.svg"
import Houdini from "./images/houdini.png"
import Maya from "./images/maya-2017.svg"
import PS from "./images/photoshop-cc.svg"
import Substance from "./images/substance.png"
import Unreal from "./images/unreal.png"
import Zbrush from "./images/zbrush.png"


const Main = styled.div `
text-align: center;
`

const Logos = styled.div `
  display:flex;
  justify-content:center;

  ${ breakpoint('mobile', 'tablet')`
    flex-wrap: wrap;
  `};
  `

const LogoBox = styled.div `
display:flex;
align-content: flex-end;
justify-content: flex-start;
flex-direction:column;
align-items: center;
color:#333;

font-weight: bold;
-webkit-transition:all 1s ease-in-out;
&:hover {
-webkit-transition:all .2s ease-in-out;
margin: 15px;
transform:scale(1.2,1.2);
}
`

const Logo = styled.img `
padding: 10px 30px;
height: auto;
width: 3rem;
-webkit-animation: fadein 1.5s ease-in-out;
@keyframes fadein {
    0% { opacity: 0; transform:scale(0,0);}
    92% { opacity: 1; transform:scale(1.05,1.05);}
    100%   { opacity: 1; transform:scale(1,1); }
}
`

export default function Skills() {
  return (
    <Main>
    <h1>Skills</h1>
    <Logos>
    <LogoBox><Logo src={JSLogo}/> JavaScript </LogoBox>
    <LogoBox><Logo src={ReactLogo} style={{width: '5rem'}}/> React </LogoBox>
    <LogoBox><Logo src={CSS}/> CSS </LogoBox>
    <LogoBox><Logo src={Python}/> Python </LogoBox>
    <LogoBox><Logo src={Node} style={{width: '5rem'}}/> Node </LogoBox>
    <LogoBox><Logo src={HTML}/> HTML </LogoBox>
    <LogoBox><Logo src={Git}/> Git </LogoBox>
    <LogoBox><Logo src={Database} style={{height: '3.1rem'}}/> SQL </LogoBox>
    </Logos>
    <Logos>
    <LogoBox><Logo src={AE}/> After Effects </LogoBox>
    <LogoBox><Logo src={Houdini}/> Houdini </LogoBox>
    <LogoBox><Logo src={Maya}/> Maya </LogoBox>
    <LogoBox><Logo src={PS}/> Photoshop </LogoBox>
    <LogoBox><Logo src={Substance}/> Substance<break/> Painter </LogoBox>
    <LogoBox><Logo src={Unreal}/> Unreal Engine </LogoBox>
    <LogoBox><Logo src={Zbrush}/> ZBrush </LogoBox>
    </Logos>
    </Main>
  );
}