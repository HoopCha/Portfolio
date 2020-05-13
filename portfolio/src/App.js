import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header.js";

import WelcomePage from "./components/WelcomePage";
import About from "./components/AboutPage";
import Projects from "./components/Projects";
import Animation from "./components/Animation";

export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component = {WelcomePage} />
      <Route exact path="/about" component = {About} />
      <Route exact path="/projects/web-dev" component = {Projects} />
      <Route exact path="/projects/animation" component = {Animation} />
    </main>
  );
}