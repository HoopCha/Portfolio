import React from "react";
import styled from "styled-components";
import { faArtstation, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Main = styled.div `
display:flex;
justify-content:center;
padding: 5% 14%;
`
const Main2 = styled.div `
display:flex;
flex-direction:column;
justify-content:center;
padding: 0% 7%;
`

const About = styled.div `
padding: 0px;
width:500px;
`

const StyledLink = styled.a `
text-decoration: none;
width:50%;
:hover{
  background-color: #ebebeb;
  border-radius: 15px;
}
`

const LogoBox = styled.div `
display:flex;
align-items: center;
color:#333;
flex-direction:column;
font-weight: bold;
padding: 1rem;
-webkit-transition:all .6s ease-in-out;
&:hover {
-webkit-transition:all .2s ease-in-out;
transform:scale(1.1,1.1);
}
`


export default function Project() {
  return (
    <Main>
<Main2>
<h2>Speak Out</h2>
<iframe src="https://player.vimeo.com/video/418086837" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
</Main2>
<Main2>
<h3>FRONT-END DEVELOPER | UI/UX DESIGNER </h3>
<About>Speak-Out is a website for a non-profit in Bahrain that runs a school system for teaching english. It allows for visitors to learn about the school and sign up their children, and for teachers and administrators to run day to day operations which was previously done by hand and then entered into a local database on one computer. This project was picked up from a previous team that had not documented any progress, or written maintainable code. My main contributions to the project included getting the project to a clean workable state, and then building and designing modules for actions such as adding and editing student information, registering students in classes and attendance modules. </About>
<h3>Tech Stack: <br></br> React | Redux | Semantic UI | Ant Design | Styled Components
</h3>
<StyledLink href="https://github.com/HoopCha/speak-out-fe" target="_blank"><LogoBox><FontAwesomeIcon icon={faGithub} size="2x" /> View the code on Github</LogoBox></StyledLink>
</Main2>
    </Main>
  );
}