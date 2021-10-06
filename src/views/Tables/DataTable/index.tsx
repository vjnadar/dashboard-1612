import { DataGrid } from "@mui/x-data-grid";
import * as tableData from "./tableData";
import "./DataTable.scss";

function DataTable(): JSX.Element {
  return (
    <div className="DataTable">
      <DataGrid
        className="DataTable__grid"
        rows={tableData.rows}
        columns={tableData.columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}

export default DataTable;
