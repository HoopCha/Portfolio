import React from "react";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Main, Main2, About, StyledLink, LogoBox, Video} from "../styling"

export default function Project() {
  return (
    <Main>
<Main2>
<h2>After Effects Reel</h2>
<Video src="https://player.vimeo.com/video/353026412" title="AterEffects" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></Video>
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