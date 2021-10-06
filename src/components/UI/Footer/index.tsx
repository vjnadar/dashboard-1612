import "./Footer.scss";

function Footer(): JSX.Element {
  return (
    <>
      <footer className="Footer">
        <nav>
          <ul className="Footer__content">
            <li>
              <a href="https://github.com/vjnadar" className="Footer__content-link">
                <span className="Footer__company-name">Korkai Software</span>
              </a>
              <span className="Footer__rights">, All Rights Reserved.</span>
            </li>
            <li className="Footer__copyright-year">© {new Date().getFullYear()}&nbsp;</li>
          </ul>
        </nav>
      </footer>
    </>
  );
}
export default Footer;
