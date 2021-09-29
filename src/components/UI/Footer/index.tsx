import React from "react";
import "./Footer.scss";

function Footer(): JSX.Element {
  return (
    <>
      <footer className="Footer">
        <nav>
          <ul className="Footer__content">
            <li>© {new Date().getFullYear()}</li>
            <li>
              <a href="https://github.com/vjnadar" className="Footer__content-link">
                {" "}
                <span className="Footer__company-initials">Korkai Software</span>,
              </a>{" "}
              All Rights Reserved.
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
}
export default Footer;
