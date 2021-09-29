import { LineComponent } from "../../components/UI";
import "./Typography.scss";

function Typography(): JSX.Element {
  return (
    <section className="Typography">
      <div className="Typography__title">
        <small>Dashboard-1612 text-styles:</small>
        <h4 className="Typography__title-description">Name of the font used: Montserrat</h4>
      </div>
      <article className="Typography__grid">
        <span className="Typography__grid-header1 text-size" role="presentation" aria-label="Tag name">
          h1
        </span>
        <h1 className="Typography__grid-description1" role="presentation" aria-label="Description">
          This is a h1 heading!
        </h1>
        <span className="Typography__grid-header2 text-size" role="presentation" aria-label="Tag name">
          h2
        </span>
        <h2 className="Typography__grid-description2" role="presentation" aria-label="Description">
          This is a h2 heading!
        </h2>
        <span className="Typography__grid-header3 text-size" role="presentation" aria-label="Tag name">
          h3
        </span>
        <h3 className="Typography__grid-description3" role="presentation" aria-label="Description">
          This is a h3 heading!
        </h3>
        <span className="Typography__grid-header4 text-size" role="presentation" aria-label="Tag name">
          h4
        </span>
        <h4 className="Typography__grid-description4" role="presentation" aria-label="Description">
          This is a h4 heading!
        </h4>
        <span className="Typography__grid-header5 text-size" role="presentation" aria-label="Tag name">
          h5
        </span>
        <h5 className="Typography__grid-description5" role="presentation" aria-label="Description">
          This is a h5 heading!
        </h5>
        <span className="Typography__grid-header6 text-size" role="presentation" aria-label="Tag name">
          h6
        </span>
        <h6 className="Typography__grid-description6" role="presentation" aria-label="Description">
          This is a h6 heading!
        </h6>
        <span className="Typography__grid-para text-size" role="presentation" aria-label="Tag name">
          p
        </span>
        <p className="Typography__grid-description7" role="presentation" aria-label="Description">
          This is a paragraph!
        </p>
        <span className="Typography__grid-quote text-size" role="presentation" aria-label="Tag name">
          quote
        </span>
        <div className="Typography__grid-description8" role="presentation" aria-label="Description">
          <LineComponent color="info" quote>
            This is a quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum".
          </LineComponent>
        </div>
        <span className="Typography__grid-muted text-size" role="presentation" aria-label="Tag name">
          muted text
        </span>
        <span className="Typography__grid-description9" role="presentation" aria-label="Description">
          <LineComponent color="muted">This is a muted text!</LineComponent>
        </span>
        <span className="Typography__grid-primary-text text-size" role="presentation" aria-label="Tag name">
          primary text
        </span>
        <span className="Typography__grid-description10" role="presentation" aria-label="Description">
          <LineComponent color="primary">This is the primary text!</LineComponent>
        </span>
        <span className="Typography__grid-info-text text-size" role="presentation" aria-label="Tag name">
          info text
        </span>
        <span className="Typography__grid-description11" role="presentation" aria-label="Description">
          <LineComponent color="info">This is the info text!</LineComponent>
        </span>
        <span className="Typography__grid-success-text text-size" role="presentation" aria-label="Tag name">
          success text
        </span>
        <span className="Typography__grid-description12" role="presentation" aria-label="Description">
          <LineComponent color="success">This is the success text!</LineComponent>
        </span>
        <span className="Typography__grid-error-text text-size" role="presentation" aria-label="Tag name">
          error text
        </span>
        <span className="Typography__grid-description13" role="presentation" aria-label="Description">
          <LineComponent color="error">This is the error text!</LineComponent>
        </span>
        <span className="Typography__grid-small-tag text-size" role="presentation" aria-label="Tag name">
          small tag
        </span>
        <small className="Typography__grid-description14" role="presentation" aria-label="Description">
          This text uses the HTML {`<small>`} tag.
        </small>
        <span className="Typography__grid-lists text-size" role="presentation" aria-label="Tag name">
          Lists
        </span>
        <div className="Typography__grid-description15" role="presentation" aria-label="Description">
          <div className="Typography__grid-description15-list-flex">
            <div>
              <small>Unordered List</small>
              <ul>
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
              </ul>
            </div>
            <div>
              <small>Ordered List</small>
              <ol>
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
              </ol>
            </div>
            <div>
              <small>Unstyled List</small>
              <ul className="unstyled-list">
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
              </ul>
            </div>
            <div>
              <small>Inline List</small>
              <ul className="inline-list">
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
              </ul>
            </div>
          </div>
        </div>
        <span className="Typography__grid-code text-size" role="presentation" aria-label="Tag name">
          code
        </span>
        <code className="Typography__grid-description16" role="presentation" aria-label="Description">
          This text uses the HTML {`<code>`} tag.
        </code>
      </article>
    </section>
  );
}

export default Typography;
