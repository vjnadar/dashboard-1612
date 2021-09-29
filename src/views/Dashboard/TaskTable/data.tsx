import EditIcon from "@material-ui/icons/Edit";
import { SimpleTableDataSet } from "./types";
const tableData: SimpleTableDataSet[] = [
  {
    checkbox: <input type="checkbox" />,
    message: (
      <>
        <b>Meet the Senator</b>
        <br />
        <small>Augsburger Straße 95, Castrop-Rauxel, Nordrhein-Westfalen 8:47 AM</small>
      </>
    ),
    editBtn: <EditIcon />
  },
  {
    checkbox: <input type="checkbox" />,
    message: (
      <>
        <b>Lunch with the CEO of Macrosoft</b>
        <br />
        <small>Alsterkrugchaussee 123, Marxheim, Freistaat Bayern 1:00 PM</small>
      </>
    ),
    editBtn: <EditIcon />
  },
  {
    checkbox: <input type="checkbox" />,
    message: (
      <>
        <b>Company board meeting</b>
        <br />
        <small>Braun, Elmshorn, Schleswig-Holstein 3:07 PM</small>
      </>
    ),
    editBtn: <EditIcon />
  },
  {
    checkbox: <input type="checkbox" />,
    message: (
      <>
        <b>Visit client's place at Roes</b>
        <br />
        <small>Gotzkowskystrasse 38, Roes, Rheinland-Pfalz 4:47 PM</small>
      </>
    ),
    editBtn: <EditIcon />
  },
  {
    checkbox: <input type="checkbox" />,
    message: (
      <>
        <b>Team status update</b>
        <br />
        <small>Braun, Elmshorn, Schleswig-Holstein 6:00 PM</small>
      </>
    ),
    editBtn: <EditIcon />
  },
  {
    checkbox: <input type="checkbox" />,
    message: (
      <>
        <b>End the day at Mcdonalds</b>
        <br />
        <small>Mcdonalds, Elmshorn, Schleswig-Holstein 7:07 PM</small>
      </>
    ),
    editBtn: <EditIcon />
  }
];
export default tableData;
