import React from "react";
import * as Icons from "@material-ui/icons";
import "./IconsComponent.scss";
function IconsComponent(): JSX.Element {
  const randomNumber = Math.floor(Math.random() * (5000 - 1000 + 1) + 1000);
  return (
    <div className="Icons-Component">
      <h3 className="Icons-Component__title">Material-UI Icons</h3>
      <div className="Icons-Component__grid">
        {Object.keys(Icons)
          .slice(randomNumber, randomNumber + 100)
          .map((iconName) => (
            <div key={iconName} className="Icons-Component__row-element" role="presentation" aria-label="Icons-Row-Element">
              <div className="Icons-Component__row-element-item">
                {React.createElement(Icons[iconName as keyof typeof Icons], {})}
                {
                  <>
                    <br />
                    <span aria-label={iconName}>{iconName}</span>
                  </>
                }
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default React.memo(IconsComponent);
