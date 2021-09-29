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
        <span className="Typography__grid-header1 text-size">h1</span>
        <h1 className="Typography__grid-description1">This is a h1 heading!</h1>
        <span className="Typography__grid-header2 text-size">h2</span>
        <h2 className="Typography__grid-description2">This is a h2 heading!</h2>
        <span className="Typography__grid-header3 text-size">h3</span>
        <h3 className="Typography__grid-description3">This is a h3 heading!</h3>
        <span className="Typography__grid-header4 text-size">h4</span>
        <h4 className="Typography__grid-description4">This is a h4 heading!</h4>
        <span className="Typography__grid-header5 text-size">h5</span>
        <h5 className="Typography__grid-description5">This is a h5 heading!</h5>
        <span className="Typography__grid-header6 text-size">h6</span>
        <h6 className="Typography__grid-description6">This is a h6 heading!</h6>
        <span className="Typography__grid-para text-size">p</span>
        <p className="Typography__grid-description7">This is a paragraph!</p>
        <span className="Typography__grid-quote text-size">quote</span>
        <div className="Typography__grid-description8">
          <LineComponent color="info" quote>
            This is a quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum".
          </LineComponent>
        </div>
        <span className="Typography__grid-muted text-size">muted text</span>
        <span className="Typography__grid-description9">
          <LineComponent color="muted">This is a muted text!</LineComponent>
        </span>
        <span className="Typography__grid-primary-text text-size">primary text</span>
        <span className="Typography__grid-description10">
          <LineComponent color="primary">This is the primary text!</LineComponent>
        </span>
        <span className="Typography__grid-info-text text-size">info text</span>
        <span className="Typography__grid-description11">
          <LineComponent color="info">This is the info text!</LineComponent>
        </span>
        <span className="Typography__grid-success-text text-size">success text</span>
        <span className="Typography__grid-description12">
          <LineComponent color="success">This is the success text!</LineComponent>
        </span>
        <span className="Typography__grid-error-text text-size">error text</span>
        <span className="Typography__grid-description13">
          <LineComponent color="error">This is the error text!</LineComponent>
        </span>
        <span className="Typography__grid-small-tag text-size">small tag</span>
        <small className="Typography__grid-description14">This text uses the HTML {`<small>`} tag.</small>
        <span className="Typography__grid-lists text-size">Lists</span>
        <div className="Typography__grid-description15">
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
        <span className="Typography__grid-code text-size">code</span>
        <code className="Typography__grid-description16">This text uses the HTML {`<code>`} tag.</code>
      </article>
    </section>
  );
}

export default Typography;
