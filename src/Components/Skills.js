import React from "react";
import Header from "../Header";
import Nav from "../Components/Nav";
import Footer from "../Footer";
import skillData from "../Data/skillData";
import "../CSS/skills.css";

export default function Skills() {
  const [skills, setSkills] = React.useState(skillData);

  const skillElements = skills.map((skill) => (
    <div className="skill" key={skill.id}>
      <a href={skill.targetUrl} target="_blank">
        <img src={skill.imageUrl}></img>
      </a>
      <span>{skill.name}</span>
    </div>
  ));

  return (
    <>
      <Header />
      <main>
        <h1 className="section-title">Skills</h1>
        <div className="spacer"></div>
        <div className="skill-container">{skillElements} </div>
      </main>
      <Nav pageName={"Skills"}/>
      <Footer />
    </>
  );
}
