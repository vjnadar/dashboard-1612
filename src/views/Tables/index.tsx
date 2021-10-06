import SimpleTable from "./SimpleTable";
import DataTable from "./DataTable";
import "./Tables.scss";

function Tables(): JSX.Element {
  return (
    <section className="Tables">
      <article className="Tables__simple-table">
        <h4>Simple Table</h4>
        <SimpleTable />
      </article>
      <article className="Tables__data-table">
        <h4>Data Table</h4>
        <DataTable />
      </article>
    </section>
  );
}
export default Tables;
