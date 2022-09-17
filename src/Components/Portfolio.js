import React, { useState, useEffect } from "react";
import Header from "../Header";
import Nav from "../Components/Nav";
import Footer from "../Footer";
import portData from "../Data/portData";
import "../CSS/isotope.css";
import "../CSS/magnific.css";

const Portfolio = () => {
  const [items, setItems] = React.useState(portData);

  const portfolioElements = items.map((item) => {
    let CSS = "element-item " + item.category;

    return (
      <div className={CSS} key={item.id} data-category={item.category}>
        <a
          href={item.imageUrl}
          data-source={item.imageUrl}
          className="magnific"
          title={item.description}
        >
          <div className="overlay">
            <i className="fa fa-search"></i>
          </div>
          <img src={item.imageUrl}></img>
        </a>
      </div>
    );
  });

  useEffect(() => {
    var $grid = $(".grid").isotope({
      itemSelector: ".element-item",
      layoutMode: "fitRows"
    });

    $("#filters").on("click", "button", function () {
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({ filter: filterValue });
    });

    $(".button-group").each(function (i, buttonGroup) {
      var $buttonGroup = $(buttonGroup);
      $buttonGroup.on("click", "button", function () {
        $buttonGroup.find(".is-checked").removeClass("is-checked");
        $(this).addClass("is-checked");
      });
    });

    $(".magnific").magnificPopup({
      type: "image",
      closeOnContentClick: true,
      closeBtnInside: false,
      mainClass: "mfp-with-zoom mfp-img-mobile",
      image: {
        verticalFit: true,
        titleSrc: function (item) {
          return (
            item.el.attr("title") +
            ' &middot; <a className="image-source-link" href="' +
            item.el.attr("data-source") +
            '" target="_blank">image source</a>'
          );
        }
      },
      zoom: {
        enabled: true
      }
    });

    $('button[data-filter=".payments"').click();

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
      <main className="container">
        <h2 className="section-title">
          <span>Portfolio</span>
        </h2>
        <div className="spacer"></div>
        <div id="filters" className="button-group">
          <button className="button is-checked" data-filter=".payments">
            Payments
          </button>
          <button className="button" data-filter=".reviews">
            Reviews
          </button>
          <button className="button" data-filter=".marketing">
            Marketing
          </button>
          <button className="button" data-filter=".texting">
            Texting
          </button>
        </div>
        <div className="grid">{portfolioElements}</div>
      </main>
      <Nav pageName={"Portfolio"} />
      <Footer />
    </>
  );
};

export default Portfolio;
