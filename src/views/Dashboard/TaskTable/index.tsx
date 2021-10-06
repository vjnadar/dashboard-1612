import { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import tableData from "./data";
import { TableProps } from "../../../generalTypes/generics";
import "./TaskTable.scss";

export default function TaskTable(): JSX.Element {
  const tableProps: TableProps = {
    component: Paper,
    size: "small"
  };
  return (
    <>
      <TableContainer className="Table__paper" {...tableProps}>
        <Table className="Table" role="table" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="Table__Cell-Header">
                {
                  <>
                    <b>Tasks(5)</b>
                    <br />
                    <small>Today</small>
                  </>
                }
              </TableCell>
              <TableCell className="Table__Cell-Header"></TableCell>
              <TableCell className="Table__Cell-Header"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((data, index) => (
              <TableRow key={`Cell ${index + 1}`}>
                <TableCell component="th" scope="row" className="Table__Cell">
                  {data.checkbox}
                </TableCell>
                <TableCell className="Table__Cell">{data.message}</TableCell>
                <TableCell className="Table__Cell">{data.editBtn}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
