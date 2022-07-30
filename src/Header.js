import Menu from "./Components/Menu";
import Quote from "./Components/Quote";

function Header() {
  return (
    <>
      <header className="header shadow-smn p-3">
        <div className="row">
          <div className="col-2">
            <div id="logo">
              <a href="/">
                <img src="images/logo.png" className="app-logo" />
              </a>
            </div>
          </div>
          <div
            className="col-10"
            style={{ textAlign: "right", margin: "auto" }}
          >
            <Menu />
          </div>
        </div>
        <div className="row">
          <div className="col-12" style={{ textAlign: "center" }}>
            <Quote />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
