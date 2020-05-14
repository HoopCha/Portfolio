import React from "react";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Main, Main2, About, StyledLink, LogoBox, Image} from "./styling"

import Fries from "./images/fries.jpg"

export default function FoodieFun() {
  return (
    <Main>
<Main2>
<h1>Foodie Fun</h1>
<Image src={Fries} />
</Main2>
<Main2>
<h3>BACK-END DEVELOPER</h3>
<About>Created a backend server for a Foodie Fun app, that allowed users to register and add their favorite restaurants and then review menu items. The back-end included seeded data, testing, protected routes, authorization, and routes for full CRUD operations on data. The SQL relational database included different types of data with various restrictions and understandable error codes.</About>
<h3>Tech Stack: <br></br> NodeJS | SQL | Express
</h3>
<StyledLink href="https://github.com/build-week-foodie-fun-3/Back-End" target="_blank"><LogoBox><FontAwesomeIcon icon={faGithub} size="2x" /> View the code on Github</LogoBox></StyledLink>
</Main2>
    </Main>
  );
}