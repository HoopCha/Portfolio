import React from "react";
import styled from "styled-components";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
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
transform:scale(1.03,1.03);
}
`


export default function Project() {
  return (
    <Main>
<Main2>
<h2>After Effects Reel</h2>
<iframe src="https://player.vimeo.com/video/353026412" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
</Main2>
<Main2>
<h3>Animator | Generalist</h3>
<About>A collection of some work I did in 2018, worked with a team of others to create videos for professors.
Responsible for most the Asset Creation, Rigs, Animation, Story Boards, and Effects.</About>
<StyledLink href="https://www.youtube.com/watch?v=SWFimEg7NVA&list=PLd7-auskepbKQ0B4Hc4rFxHVhmzgS9Ra5&index=2&t=0s" target="_blank"><LogoBox><FontAwesomeIcon icon={faYoutube} size="2x" /> View examples of full videos here</LogoBox></StyledLink>
</Main2>
    </Main>
  );
}