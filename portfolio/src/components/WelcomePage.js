import React from "react";
import styled from "styled-components";

import Skills from "./Skills"


const Main = styled.div `
text-align: center;
`

export default function WelcomePage() {
  return (
    <Main>
    <Skills/>
    </Main>
  );
}