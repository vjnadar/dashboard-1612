import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { columns, rows } from "./data";
import { TableProps } from "../../../generalTypes/generics";
import "./EmployeesTable.scss";

export default function EmployeesTable(): JSX.Element {
  const tableProps: TableProps = {
    component: Paper,
    size: "small"
  };
  return (
    <>
      <TableContainer className="Employees-Table__Paper" {...tableProps}>
        <Table role="table" aria-label="Employees-Table" className="Employees-Table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.empCode}>
                  {columns.map((column) => {
                    const value = row[column.id as "name" | "empCode" | "dob" | "joiningDate" | "bloodGroup"];
                    return (
                      <TableCell key={column.id} align={column?.align}>
                        {column.format && typeof value === "number" ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
