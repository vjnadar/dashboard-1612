import React from "react";
import * as Icons from "@material-ui/icons";
import "./IconsComponent.scss";
function IconsComponent(): JSX.Element {
  React.useEffect(() => {}, []);
  console.log(Object.keys(Icons).length);
  return (
    <div className="Icons-Component">
      <h3>Material-UI Icons</h3>
      <div className="Icons-Component__grid">
        {Object.keys(Icons)
          .slice(Math.floor(Math.random() * 1000) + 100, 2000)
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
