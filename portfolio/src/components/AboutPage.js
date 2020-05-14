import React from "react";
import styled from "styled-components";
import Profile from "./images/profile.jpg";
import Socials from "./Socials";
import Skills from "./Skills"
import breakpoint from 'styled-components-breakpoint';

const Main = styled.div `
display:flex;
flex-direction:column;
justify-content:center;
padding: 3% 24%;
${ breakpoint('mobile', 'tablet')`
padding: 3% 15%;
`};
${ breakpoint('tablet', 'desktop')`
padding: 3% 10%;
`};
`

const Image = styled.img`
width: 150px;
height: 150px;
border-radius: 150px;
animation: bounce 3s;
transform: translateY(0px);
`
const Wrapper = styled.h1 `
height: 100%;
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
margin: 0px;
`

const Sides = styled.h1 `
position: relative;
animation: 0.7s customBounce ease 0.4s both;
display: grid;
margin: 0px;
grid-template-columns: 50vw 50vw;
@keyframes customBounce {
  0% {
    grid-gap: 100vw;
  }
  12% {
    grid-gap: 90vw;
  }
  24% {
    grid-gap: 57vw;
  }
  36% {
    grid-gap: 3vw;
  }
  54% {
    grid-gap: 25vw;
  }
  74% {
    grid-gap: 2.5vw;
  }
  82% {
    grid-gap: 6.25vw;
  }
  92% {
    grid-gap: .7vw;
  }
  96% {
    grid-gap: 1.5vw;
  }
  100% {
    grid-gap: 0;
  }
}
`

const Side = styled.div `
display: flex;
align-items: center;
justify-content: flex-end;
margin: 10px;
`

const Title = styled.h1 `
margin: 0px;
font-size: 3rem;
`


const Body = styled.p `
margin: 0px;
font-size: 1.5rem;
`

export default function WelcomePage() {
     return (
       <Main>
         <Wrapper>
          <Sides>
            <Side><Image src={Profile} /></Side>
            <Side style={{justifyContent: 'flex-start'}}><Title>Hi, I'm Chase.</Title></Side>
          </Sides>
         </Wrapper>
         <Body>A highly creative animator who has studied and worked for seven
years in industry. My specialty is building detailed 3D models that
bring stories to life while using the most efficient processes.
Abilities that assist this modeling work are, intentional and
practiced observation, capturing the nuances of a technical
challenge, high attention to detail, as well as a strong framework
for technical problem-solving.
</Body>
<Skills/>
<Socials/>
       </Main>
     );
}


// export default function WelcomePage() {
//   return (
//     <Main>
//     <Header>
//     <Image src={Profile} />
//     <h1 style={{margin: '0px'}}>Hi, I'm Chase.</h1>
//     </Header>

//     </Main>
//   );
// }