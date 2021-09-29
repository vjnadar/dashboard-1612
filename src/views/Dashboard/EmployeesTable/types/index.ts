export type Rows = {
  name: string;
  empCode: string;
  dob: string;
  joiningDate: string;
  bloodGroup: string;
};
export type Columns = {
  id: string;
  label: string;
  minWidth: number;
  align?: "inherit" | "left" | "center" | "right" | "justify";
  format?: (value: number) => string;
};
