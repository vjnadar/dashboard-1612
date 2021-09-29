import React from "react";
import { ChartCardProps } from "./types";
import "./ChartCard.scss";

function ChartCard({ children, mainHeading, subHeading }: ChartCardProps): JSX.Element {
  return (
    <section className="Chart-Card" role="presentation" aria-label={mainHeading}>
      <ul className="Chart-Card__content">
        <li className="Chart-Card__content-title">
          <ul>
            <li className="Chart-Card__content-main-heading">
              <span className="Chard-Card__heading-text">{mainHeading}</span>
            </li>
            <li className="Chart-Card__content-sub-heading">
              <h4>{subHeading}</h4>
            </li>
          </ul>
        </li>
        <li>
          <div className="Chart-Car__content-space" />
        </li>
      </ul>
      <div className="Chart-Card__chart-container">{children}</div>
    </section>
  );
}

export default ChartCard;
