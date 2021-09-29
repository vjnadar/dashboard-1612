import { PaperProps } from "@material-ui/core";
export interface CommonTypeProperties<T> {
  [key: string]: T;
}
export type EmptyObject = {
  [K in string]: never;
};

export type TableProps = {
  component: (props: PaperProps) => JSX.Element;
  size: string;
};
