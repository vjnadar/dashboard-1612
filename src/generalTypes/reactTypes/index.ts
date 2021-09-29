import { EmptyObject } from "..";
export type ReactProp = Record<string, unknown> | EmptyObject;
export type ReactFC = (reactProp: ReactProp) => JSX.Element;
