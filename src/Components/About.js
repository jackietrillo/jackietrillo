import Header from "../Header";
import Nav from "../Components/Nav";
import Footer from "../Footer";
import "../CSS/about.css";

const About = () => {
  return (
    <>
      <Header />
      <main>
        <h2 className="section-title">
          <span>About Me</span>
        </h2>
        <div className="spacer"></div>
        <div className="container">
          <img src="./images/me.jpeg" id="about-photo" />
          <div id="about-content">
            <p>
              I fell in love with programming at an early age when I saw my
              first command prompt and entered a command into the windows DOS
              terminal. It took me a while to figure out what I wanted to do for
              a career. I switched majors a few times in college. I started of
              with psychology, then went to pre-med and from there enginneering
              until finally I settled on computer science.
            </p>
            <p>
              I have many hobbies and interests. I play poker, chess, and
              backgammon. I practice Zen and love nature and music. I hope you
              enjoy the quotes and pictures on my site.
            </p>
          </div>
        </div>
      </main>
      <Nav pageName={"About"} />
      <Footer />
    </>
  );
};

export default About;
