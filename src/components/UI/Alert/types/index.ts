import { ReactChild } from "react";

export type AlertProps = {
  color?: string;
  children: ReactChild | ReactChild[];
  closeButton?: boolean;
  iconSrc?: string;
};
