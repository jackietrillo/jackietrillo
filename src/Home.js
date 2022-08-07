import Header from "./Header";
import Footer from "./Footer";
import Intro from "./Components/Intro";
import Nav from "./Components/Nav";
import Quote from "./Components/Quote";

function Home() {
  const randomIndex = Math.ceil(Math.random() * 11);
  let randomImage = `images/gallery/gallery${randomIndex}.jpeg`;
  return (
    <>
      <Header />
      <main>
        <div className="row">
          <div className="col-12" style={{ textAlign: "center" }}>
            <Quote />
          </div>
        </div>
        <div className="row">
          <img className="home-image fade-in" src={randomImage} />
          <Intro />
          <Nav pageName={"Home"} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
