import React, { useState, useEffect } from "react";
import Header from "../Header";
import Nav from "../Components/Nav";
import Footer from "../Footer";
import "../CSS/isotope.css";
import "../CSS/magnific.css";

const Portfolio = () => {
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
            ' &middot; <a class="image-source-link" href="' +
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
            Online Payments
          </button>
          <button className="button" data-filter=".reviews">
            Social Media Reviews
          </button>
          <button className="button" data-filter=".texting">
            Texting Services
          </button>
        </div>
        <div className="grid">
          <div className="element-item payments" data-category="payments">
            <a
              href="/images/portfolio/portfolio-payments.png"
              data-source="/images/portfolio/portfolio-payments.png"
              className="magnific"
              title="blah blah blah"
            >
              <div className="overlay">
                <i className="fa fa-search"></i>
              </div>

              <img src="/images/portfolio/portfolio-payments.png"></img>
            </a>
          </div>
          <div className="element-item reviews" data-category="reviews">
            <img src="/images/portfolio/portfolio-onlinereviews2.webp"></img>
          </div>
          <div className="element-item reviews" data-category="reviews">
            <img src="/images/portfolio/portfolio-onlinereviews3.webp"></img>
          </div>
          <div className="element-item reviews" data-category="reviews">
            <img src="/images/portfolio/portfolio-onlinereviews5.webp"></img>
          </div>
          <div className="element-item reviews" data-category="reviews">
            <img src="/images/portfolio/portfolio-onlinereviews6.webp"></img>
          </div>
          <div className="element-item reviews" data-category="reviews">
            <img src="/images/portfolio/portfolio-onlinereviews4.webp"></img>
          </div>
          <div className="element-item reviews" data-category="reviews">
            <img src="/images/portfolio/portfolio-onlinereviews5.webp"></img>
          </div>
          <div className="element-item reviews" data-category="reviews">
            <img src="/images/portfolio/portfolio-onlinereviews.webp"></img>
          </div>
          <div className="element-item texting" data-category="texting">
            <img src="/images/portfolio/portfolio-texting.webp"></img>
          </div>
        </div>
      </main>
      <Nav pageName={"Portfolio"} />
      <Footer />
    </>
  );
};

export default Portfolio;
