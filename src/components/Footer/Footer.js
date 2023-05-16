import "./footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-item footer-wrap">
          <p className="footer-rights">
            © 2020 Solisgroup. All Rights Reserved.
          </p>
          <p className="footer-item footer-made">
            <span>made by</span>
            <a href="#">Zgraya.digital</a>
          </p>
          <p className="footer-item footer-links">
            <a href="#">User Agreement</a>
            <a href="#">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
