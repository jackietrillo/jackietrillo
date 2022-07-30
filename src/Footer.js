import Quote from "./Components/Quote";

function Footer() {
  const today = new Date();
  return (
    <footer>
      <section id="page-contact" className="page-contact">
        <div className="container">
          <header className="section-header"></header>
          <div className="row">
            <div className="col-md-12 contact-info">
              <p>
                <i className="fa fa-phone"></i> (954) 260-5782
              </p>
              <p>
                <a href="mailto:jackietrillo@outlook.com">
                  <i className="fa fa-envelope-o" />
                </a>{" "}
                jackietrillo@outlook.com
              </p>
              <div className="social-icons">
                <a
                  href="https://twitter.com/intent/tweet?screen_name=jackietrillo"
                  className="btn btn-round btn-clear btn-twitter"
                  target="_blank"
                >
                  <i className="fa fa-twitter"></i>
                </a>
                <a
                  href="https://www.facebook.com/jackietrillo"
                  className="btn btn-round btn-clear btn-facebook"
                  target="_blank"
                >
                  <i className="fa fa-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/jax0110"
                  className="btn btn-round btn-clear btn-instagram"
                  target="_blank"
                >
                  <i className="fa fa-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/jackietrillo"
                  className="btn btn-round btn-clear btn-linkedin"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <p className="copy">
        <small>copyright &copy; {today.getFullYear()}</small>
      </p>
    </footer>
  );
}

export default Footer;
