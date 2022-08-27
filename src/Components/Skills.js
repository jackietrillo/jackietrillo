import React from "react";
import Header from "../Header";
import Nav from "../Components/Nav";
import Footer from "../Footer";
import skillData from "../Data/skillData";
import "../CSS/skills.css";
import "../CSS/isotope.css";

export default function Skills() {
  const [skills, setSkills] = React.useState(skillData);

  const skillElements = skills.map((skill) => {
    let skillCSS = "element-item skill " + skill.category;

    return (
      <div className={skillCSS} key={skill.id} data-category={skill.category}>
        <a href={skill.targetUrl} target="_blank">
          <img src={skill.imageUrl}></img>
        </a>
        <span>{skill.name}</span>
      </div>
    );
  });

  React.useEffect(() => {
    // init Isotope
    var $grid = $(".grid").isotope({
      itemSelector: ".element-item",
      layoutMode: "fitRows"
    });

    // bind filter button click
    $("#filters").on("click", "button", function () {
      var filterValue = $(this).attr("data-filter");
      // use filterFn if matches value
      // filterValue = filterFns[filterValue] || filterValue;
      $grid.isotope({ filter: filterValue });
    });

    // change is-checked class on buttons
    $(".button-group").each(function (i, buttonGroup) {
      var $buttonGroup = $(buttonGroup);
      $buttonGroup.on("click", "button", function () {
        $buttonGroup.find(".is-checked").removeClass("is-checked");
        $(this).addClass("is-checked");
      });
    });

    $("#button-languages").click();

    return function cleanUp() {
      console.log("running cleanup");
      $("#filters").off("click", "button");
      $(".button-group").each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.off("click", "button");
      });
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <h1 className="section-title">Skills</h1>
        <div className="spacer"></div>
        <div id="filters" className="button-group">
          {" "}
          <button className="button" data-filter="*">
            Show All
          </button>
          <button
            id="button-languages"
            className="button is-checked"
            data-filter=".languages"
          >
            Languages
          </button>
          <button className="button is-checked" data-filter=".frameworks">
            Frameworks
          </button>
          <button className="button" data-filter=".databases">
            Databases
          </button>
          <button className="button" data-filter=".tooling">
            Tooling
          </button>
        </div>
        <div className="grid skill-container">{skillElements}</div>
      </main>
      <Nav pageName={"Skills"} />
      <Footer />
    </>
  );
}
