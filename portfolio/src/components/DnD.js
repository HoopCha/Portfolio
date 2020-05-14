import React from "react";
import { faVimeo } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import DnD from "./images/dnd.JPG"
import { Main, Main2, About, StyledLink, LogoBox, Image} from "./styling"

export default function AvastYe() {
  return (
    <Main>
<Main2>
<h2>Death and Delilah</h2>
<Image src={DnD} />
</Main2>
<Main2>
<h3>3D Modeler</h3>
<About>Film done in a cubist style that led to 'multi-perspective' models that led to unique challenges. Modeled a majority of environment props. A disgruntled corporate grim reaper gets his chance for a promotion in his new assignment, but that turns out to be a bigger challenge than expected. </About>
<StyledLink href="https://vimeo.com/364122139" target="_blank"><LogoBox><FontAwesomeIcon icon={faVimeo} size="2x" /> Watch the full thing here</LogoBox></StyledLink>
</Main2>
    </Main>
  );
}