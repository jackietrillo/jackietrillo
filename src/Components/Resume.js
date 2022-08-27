import Header from "../Header";
import Nav from "../Components/Nav";
import Footer from "../Footer";

const Resume = () => {
  return (
    <>
      <Header />
      <main className="container-fluid">
        <h2 className="section-title">Experience</h2>
        <div className="spacer"></div>
        <div className="row">
          <div className="col-md-12">
            <article className="experience">
              <header className="text-center">
                <img src="./images/practice-web.png" width="180px" />
                <br />
                <br />
                <p>Senior Applications Engineer</p>
                <p>
                  Sacramento, CA<span>&nbsp;</span>(2019 - Present)
                </p>
              </header>
            </article>
          </div>
          <div className="col-md-12">
            <article className="experience">
              <header className="text-center">
                <img src="./images/oracle.png" width="150px" />
                <p>Senior Software Engineer </p>
                <p>
                  Redwood City, CA <span>&nbsp;</span>(2006 - 2017)
                </p>
              </header>
            </article>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <article className="">
              <header className="text-center">
                <img src="./images/fau.png" width="80px" />
                <p>Florida Atlantic University</p>
                <p>B.S. Computer Science 2004</p>
              </header>
            </article>
          </div>
        </div>
      </main>
      <Nav pageName={"Resume"} />
      <Footer />
    </>
  );
};

export default Resume;
