import Menu from "./Components/Menu";

function Header() {
  return (
    <>
      <header className="header container-fluid">
        <div className="row" style={{ backgroundColor: "#fff" }}>
          <div className="col-2">
            <div id="logo">
              <a href="/">
                <img src="images/logo.png" className="app-logo" />
              </a>
            </div>
          </div>
          <div className="col-7">
            <p className="tagline">jackietrillo.com</p>
          </div>
          <div className="col-2" style={{ textAlign: "left", margin: "auto" }}>
            <Menu />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
