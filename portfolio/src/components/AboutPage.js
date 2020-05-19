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
animation: 0.9s customBounce ease 0.6s both;
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
         <h2>My Background:</h2>
         <Body>I got my BA in Computer Animation. I love design and problem solving, and after getting many opportunities to start building procedural tools, I started to realize how much I love the problem solving process that coding provides. I then enrolled at Lambda School, a school that taught full stack web development and have been coding and designing ever since.
          </Body>
          <h2></h2>
         <Body>With a strong background with design and UI/UX, Im looking for any opportunties to continue learning and creating better products with my skills. 
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