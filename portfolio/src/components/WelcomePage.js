import React from "react";
import styled from "styled-components";

import Skills from "./Skills"
import Socials from "./Socials";


const Main = styled.div `
text-align: center;
padding: 3% 24%;
`

export default function WelcomePage() {
  return (
    <Main>
    <h2 style={{textAlign: 'left'}}>Hi, I'm Chase Hooper!<br></br> A Full Stack Web Developer, with a background in Animation and UX</h2>
    <Skills/>
    <Socials/>
    </Main>
  );
}