import { useState } from "react";
import { Close } from "@material-ui/icons";
import { AlertProps } from "./types";
import "./Alert.scss";

function Alert({ color, children, closeButton, iconSrc }: AlertProps): JSX.Element {
  const [open, setOpen] = useState(true);
  const colorClassName =
    color?.toLowerCase() === "error"
      ? "error"
      : color?.toLowerCase() === "warning"
      ? "warning"
      : color?.toLowerCase() === "info"
      ? "info"
      : color?.toLowerCase() === "success"
      ? "success"
      : color?.toLowerCase() === "dark"
      ? "dark"
      : "";
  return (
    <article className={open ? `Alert ${colorClassName}` : `Alert ${colorClassName} close`} role="alert">
      <div className="Alert__content">
        {typeof iconSrc === "string" ? (
          <span>
            <img src={iconSrc} alt="alert-icon" className="Alert__content-icon" />
          </span>
        ) : (
          <></>
        )}
        <span className="Alert__content-text">{children}</span>
      </div>

      {closeButton ? (
        <span className="Alert__close-button" onClick={() => setOpen(!open)}>
          <Close className="Alert__close-button-icon" />
        </span>
      ) : (
        <></>
      )}
    </article>
  );
}

export default Alert;
