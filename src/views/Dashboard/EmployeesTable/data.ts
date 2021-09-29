import { Columns, Rows } from "./types";

function createData(name: string, empCode: string, dob: string, joiningDate: string, bloodGroup: string): Rows {
  return { name, empCode, dob, joiningDate, bloodGroup };
}
export const columns: Columns[] = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "empCode", label: "Employee Code", minWidth: 100 },
  {
    id: "dob",
    label: "Date of Birth",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US")
  },
  {
    id: "joiningDate",
    label: "Joining Date",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US")
  },
  {
    id: "bloodGroup",
    label: "Blood group",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US")
  }
];

export const rows: Rows[] = [
  createData("Aaron Hawk", "CSE-4171354", "27/10/1987", "24/09/2008", "A+"),
  createData("Peter Wood", "CSE-3500365", "21/04/1982", "24/09/2008", "O+"),
  createData("Jim Edens", "CSE-83973", "12/09/1987", "24/09/2008", "B+"),
  createData("Katie Bond", "CSE-167434", "30/04/1981", "24/09/2008", "AB-"),
  createData("Pandit Singh", "CSE-02103", "12/06/1978", "24/09/2008", "A+"),
  createData("Harry Oak", "CSE-22203", "02/06/1979", "24/09/2008", "0-"),
  createData("Ethan Smith", "CSE-32103", "22/03/1980", "24/09/2008", "B+"),
  createData("Tom Jackson", "CSE-62103", "14/03/1986", "24/09/2008", "A+")
];
