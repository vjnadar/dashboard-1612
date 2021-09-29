import { ReactNode } from "react";

export type NotificationCardProps = {
  children: ReactNode;
  heading: string;
  subHeading?: string;
  headingAlignment?: "left" | "right";
};
