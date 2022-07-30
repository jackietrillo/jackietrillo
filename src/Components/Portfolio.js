import Header from "../Header";
import Nav from "../Components/Nav";
import Footer from "../Footer";

const Portfolio = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <div className="row">
            <header className="section-header">
              <h2 className="section-title">
                <span>Portfolio</span>
              </h2>
            </header>

            <div id="grid-controls-wrapper">
              <ul className="nav nav-pills center-pills grid-controls d-none">
                <li className="active filter">
                  <a href="javascript:void(0)" data-filter="*">
                    All
                  </a>
                </li>
                <li className="filter">
                  <a href="javascript:void(0)" data-filter=".branding">
                    Branding
                  </a>
                </li>
                <li className="filter">
                  <a href="javascript:void(0)" data-filter=".design">
                    Design
                  </a>
                </li>
                <li className="filter">
                  <a href="javascript:void(0)" data-filter=".photography">
                    Photography
                  </a>
                </li>
                <li className="filter">
                  <a href="javascript:void(0)" data-filter=".web">
                    Website
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <ul id="grid" className="grid-wrapper d-none">
                <li className="mix web">
                  <a href="img/portfolio/large/01.png">
                    <div className="overlay">
                      <i className="fa fa-search"></i>
                    </div>
                    <img src="img/portfolio/small/01.png" alt="" />
                  </a>
                </li>
                <li className="mix design">
                  <a href="img/portfolio/large/02.png">
                    <div className="overlay">
                      <i className="fa fa-search"></i>
                    </div>
                    <img src="img/portfolio/small/02.png" alt="" />
                  </a>
                </li>
                <li className="mix design">
                  <a href="img/portfolio/large/03.png">
                    <div className="overlay">
                      <i className="fa fa-search"></i>
                    </div>
                    <img src="img/portfolio/small/03.png" alt="" />
                  </a>
                </li>
                <li className="mix web">
                  <a href="img/portfolio/large/04.png">
                    <div className="overlay">
                      <i className="fa fa-search"></i>
                    </div>
                    <img src="img/portfolio/small/04.png" alt="" />
                  </a>
                </li>
                <li className="mix branding">
                  <a href="img/portfolio/large/05.png">
                    <div className="overlay">
                      <i className="fa fa-search"></i>
                    </div>
                    <img src="img/portfolio/small/05.png" alt="" />
                  </a>
                </li>
                <li className="mix design">
                  <a href="img/portfolio/large/06.png">
                    <div className="overlay">
                      <i className="fa fa-search"></i>
                    </div>
                    <img src="img/portfolio/small/06.png" alt="" />
                  </a>
                </li>
                <li className="mix photography">
                  <a href="img/portfolio/large/07.png">
                    <div className="overlay">
                      <i className="fa fa-search"></i>
                    </div>
                    <img src="img/portfolio/small/07.png" alt="" />
                  </a>
                </li>
                <li className="mix photography">
                  <a href="img/portfolio/large/08.png">
                    <div className="overlay">
                      <i className="fa fa-search"></i>
                    </div>
                    <img src="img/portfolio/small/08.png" alt="" />
                  </a>
                </li>
                <li className="mix photography">
                  <a href="img/portfolio/large/09.png">
                    <div className="overlay">
                      <i className="fa fa-search"></i>
                    </div>
                    <img src="img/portfolio/small/09.png" alt="" />
                  </a>
                </li>
                <li className="mix web">
                  <a href="img/portfolio/large/10.jpg">
                    <div className="overlay">
                      <i className="fa fa-search"></i>
                    </div>
                    <img src="img/portfolio/small/10.jpg" alt="" />
                  </a>
                </li>
                <li className="mix design">
                  <a href="img/portfolio/large/11.jpg">
                    <div className="overlay">
                      <i className="fa fa-search"></i>
                    </div>
                    <img src="img/portfolio/small/11.jpg" alt="" />
                  </a>
                </li>
                <li className="mix design">
                  <a href="img/portfolio/large/12.png">
                    <div className="overlay">
                      <i className="fa fa-search"></i>
                    </div>
                    <img src="img/portfolio/small/12.png" alt="" />
                  </a>
                </li>
                <li className="mix design">
                  <a href="img/portfolio/large/13.png">
                    <div className="overlay">
                      <i className="fa fa-search"></i>
                    </div>
                    <img src="img/portfolio/small/13.png" alt="" />
                  </a>
                </li>
                <li className="mix design">
                  <a href="img/portfolio/large/14.png">
                    <div className="overlay">
                      <i className="fa fa-search"></i>
                    </div>
                    <img src="img/portfolio/small/14.png" alt="" />
                  </a>
                </li>
                <li className="mix branding">
                  <a href="img/portfolio/large/15.png">
                    <div className="overlay">
                      <i className="fa fa-search"></i>
                    </div>
                    <img src="img/portfolio/small/15.png" alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Nav pageName={"Portfolio"} />
      <Footer />
    </>
  );
};

export default Portfolio;
