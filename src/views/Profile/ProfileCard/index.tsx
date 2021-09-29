import React from "react";
import { ProfileCardProps } from "./types";
import "./ProfileCard.scss";

function ProfileCard({ children, heading, userContact }: ProfileCardProps): JSX.Element {
  const cardClassName = userContact ? `Profile-Card user-contact` : "Profile-Card";
  return (
    <div className={cardClassName} role="presentation" aria-label="Profile Card">
      {heading ? <h4 className="Profile-Card__heading">{heading}</h4> : <></>}
      {children}
    </div>
  );
}
export default ProfileCard;
