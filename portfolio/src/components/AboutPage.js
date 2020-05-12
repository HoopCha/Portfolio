import React from "react";
import styled from "styled-components";
import Profile from "./images/profile.jpg";
import Socials from "./Socials";

const Main = styled.div `
display:flex;
flex-direction:column;
justify-content:center;
padding: 3% 24%;
`
const Header = styled.div `
display:flex;
justify-content:center;
align-items: flex-end;
justify-content: flex-start;
`

const Image = styled.img`
width: 150px;
height: 150px;
border-radius: 150px;
`


export default function WelcomePage() {
  return (
    <Main>
    <Header>
    <Image src={Profile} />
    <h1 style={{margin: '0px'}}>Hi, I'm Chase.</h1>
    </Header>
    <p>A highly creative animator who has studied and worked for seven
years in industry. My specialty is building detailed 3D models that
bring stories to life while using the most efficient processes.
Abilities that assist this modeling work are, intentional and
practiced observation, capturing the nuances of a technical
challenge, high attention to detail, as well as a strong framework
for technical problem-solving.
</p>
<Socials/>
    </Main>
  );
}