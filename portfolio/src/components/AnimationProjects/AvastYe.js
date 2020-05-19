import React from "react";
import { faSteam } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Main, Main2, About, StyledLink, LogoBox, Video} from "../styling"

export default function AvastYe() {
  return (
    <Main>
<Main2>
<h2>Avast Ye</h2>
<Video width="640" height="360" src="https://www.youtube.com/embed/tTR3fUmbIwE" title="AvaseYe" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Video>
</Main2>
<Main2>
<h3>3D Modeler | Environment Layout | Procedural Tool Creation</h3>
<About>Avast Ye winner of the 2020 Intel University Game Showcase for Best Visuals and Best Gameplay. Modeled characters and environment props, contributed to level design layout and gameplay decisions. Worked with a brilliant team to put this together.</About>
<StyledLink href="https://store.steampowered.com/app/1064170/Avast_Ye/" target="_blank"><LogoBox><FontAwesomeIcon icon={faSteam} size="2x" /> Play for Free on Steam</LogoBox></StyledLink>
</Main2>
    </Main>
  );
}