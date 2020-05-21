import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Main, Main2, About, StyledLink, LogoBox, Video} from "../styling"

export default function SpeakOut() {
  return (
<Main>
<Main2 style={{justifyContent: 'flex-start'}}>
<h1 style={{marginTop: '0px'}}>Speak Out</h1>
<Video src="https://player.vimeo.com/video/418086837" title="SpeakOut" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></Video>
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