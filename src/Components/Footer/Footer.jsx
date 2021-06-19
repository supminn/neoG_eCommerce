export const Footer = () => {
    return (
        <footer className="footer">
        <h3 className="primary-txt">
          Made with <i className="fas fa-heart secondary-txt"></i> by{" "}
          <span className="secondary-txt">Supminn</span>
        </h3>
        <div>
          <a className="link primary-txt" rel="noopener noreferrer" href="https://github.com/supminn">
            <i className="fab fa-github fa-lg"></i>
          </a>
          <a className="link primary-txt" rel="noopener noreferrer" href="https://twitter.com/supminn">
            <i className="fab fa-twitter fa-lg"></i>
          </a>
          <a
            className="link primary-txt"
            rel="noopener noreferrer" href="https://www.linkedin.com/in/supminn"
          >
            <i className="fab fa-linkedin-in fa-lg"></i>
          </a>
        </div>
      </footer>
    )
}