export interface CommonTypeProperties<T> {
    [key: string]: T;
}
export type EmptyObject = {
    [K in string]: never;
};
