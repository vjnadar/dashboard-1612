import React from "react";
import { ToggleButtonProps } from "./types";
import "./ToggleButton.scss";

function ToggleButton({ transformation, setTransformation, dark }: ToggleButtonProps): JSX.Element {
  return (
    <div
      role="button"
      aria-label="Toggle button"
      className={!transformation ? `Toggle-Button open` : `Toggle-Button`}
      onClick={() => setTransformation(!transformation)}
    >
      <div className={!dark ? "Toggle-Button__burger" : "Toggle-Button__burger dark"}></div>
    </div>
  );
}

export default ToggleButton;
