import { LineComponentProps } from "./types";
import "./LineComponent.scss";

function LineComponent({ color, children, quote }: LineComponentProps): JSX.Element {
  let styles =
    color?.toLowerCase() === "error"
      ? "error-line"
      : color?.toLowerCase() === "warning"
      ? "warning-line"
      : color?.toLowerCase() === "info"
      ? "info-line"
      : color?.toLowerCase() === "success"
      ? "success-line"
      : color?.toLowerCase() === "muted"
      ? "muted-line"
      : "";
  styles = quote ? `${styles} quote` : styles;
  return (
    <div className={`Line ${styles}`}>
      <p>{children}</p>
    </div>
  );
}

export default LineComponent;
