import React from "react";

import { faExternalLinkSquareAlt} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CGI from "../images/coachinggroup.JPG"

import { Main, Main2, About, StyledLink, LogoBox, Image} from "../styling"

export default function SpeakOut() {
  return (
    <Main>
<Main2>
<h1>Coaching Group Inc.</h1>
<Image src={CGI} />
</Main2>
<Main2>
<h3>FRONT-END DEVELOPER | UI/UX DESIGNER </h3>
<About>A Website created with WordPress to help the Coaching Group Inc distribute media such as videos and blogs, as well as advertise for services and provide contact information. Also run back end operations such as image/media creation, and newsletter distribution.</About>
<h3>Tech Stack: <br></br> WordPress | Google Analytics | MailPoet
</h3>
<StyledLink href="https://coachinggroupinc.com/" target="_blank"><LogoBox><FontAwesomeIcon icon={faExternalLinkSquareAlt} size="2x" /> View the Site</LogoBox></StyledLink>
</Main2>
    </Main>
  );
}