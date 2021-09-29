import React from "react";
import { NotificationCardProps } from "./types";
import "./NotificationCard.scss";

function NotificationCard({ children, heading, subHeading, headingAlignment }: NotificationCardProps): JSX.Element {
  return (
    <section className="Notification-Card" role="presentation" aria-label="Notification Card">
      <div className={headingAlignment ? `Notification-Card__text ${headingAlignment}` : "Notification-Card__text"}>
        <span className="Notification-Card__text-heading">{heading}</span>
        <span className="Notification-Card__text-sub-heading">{subHeading}</span>
      </div>
      <div className="Notification-Card__content">{children}</div>
    </section>
  );
}

export default NotificationCard;
