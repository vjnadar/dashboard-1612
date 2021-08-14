import { EmptyObject } from '..';
export type ReactProp = Record<string, unknown> | EmptyObject;
export type ReactFC = (ReactProp) => JSX.Element;
