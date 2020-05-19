import React from "react";
import styled from "styled-components";
import breakpoint from 'styled-components-breakpoint';


import CamelUp from "./images/boardgames/camelup.png"
import CaptainSonar from "./images/boardgames/captainsonar.png"
import Clank from "./images/boardgames/clank.png"
import Quacks from "./images/boardgames/quacks.png"
import Skull from "./images/boardgames/Skull.png"
import Terraform from "./images/boardgames/terraformingmars.png"



const Main = styled.div `
text-align: center;
`

const Logos = styled.div `
  display:flex;
  justify-content:center;
  flex-wrap: wrap;

  ${ breakpoint('mobile', 'tablet')`
    flex-wrap: wrap;
  `};
  `

const LogoBox = styled.div `
max-width: 30%;
height: auto;

${ breakpoint('mobile', 'tablet')`
max-width: 50%;
height: auto;
`};

display:flex;
align-content: flex-end;
justify-content: flex-start;
flex-direction:column;
align-items: center;
color:#333;
font-weight: bold;
`

const Logo = styled.img `
width: 50%;
height: auto;
padding: 10px 30px;
-webkit-animation: fadein 1s ease-in-out;
@keyframes fadein {
    0% { opacity: 0; transform:scale(0,0);}
    92% { opacity: 1; transform:scale(1.05,1.05);}
    100%   { opacity: 1; transform:scale(1,1); }
}
`

export default function BoardGames() {
  return (
    <Main>
    <Logos>
    <LogoBox><Logo src={CamelUp}/> Camel Up </LogoBox>
    <LogoBox><Logo src={CaptainSonar}/> Captain Sonar </LogoBox>
    <LogoBox><Logo src={Clank}/> Clank </LogoBox>
    <LogoBox><Logo src={Quacks}/> Quacks of Quedlinburg </LogoBox>
    <LogoBox><Logo src={Skull}/> Skull </LogoBox>
    <LogoBox><Logo src={Terraform}/> Terraforming Mars </LogoBox>
    </Logos>
    </Main>
  );
}