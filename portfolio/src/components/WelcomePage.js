import React from "react";
import styled from "styled-components";
import breakpoint from 'styled-components-breakpoint';

import Skills from "./Skills"
import Socials from "./Socials";


const Main = styled.div `
text-align: center;
padding: 3% 24%;
${ breakpoint('mobile', 'tablet')`
padding: 0% 5%;
`};
${ breakpoint('tablet', 'desktop')`
padding: 3% 10%;
`};
`

const Grid = styled.div `
height: 80vh;
width: auto;
border: 10px solid #14a76c;
display: flex;
flex-wrap: wrap;
`

export default function WelcomePage() {
  return (
    <Main>
    <h2 style={{textAlign: 'left'}}>Hi, I'm Chase Hooper</h2>
    <h2 style={{textAlign: 'left', fontSize: '20px'}}>A Full Stack Web Developer, with a background in Animation and UX Design.</h2>
    <Skills/>
    <Socials/>
    </Main>
  );
}