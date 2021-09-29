import React from "react";
import * as Icons from "@material-ui/icons";
import "./IconsComponent.scss";
function IconsComponent(): JSX.Element {
  React.useEffect(() => {}, []);
  return (
    <div className="Icons-Component">
      <h3>Material-UI Icons</h3>
      <div className="Icons-Component__grid">
        {Object.keys(Icons)
          .slice(0, 1000)
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

export default IconsComponent;
