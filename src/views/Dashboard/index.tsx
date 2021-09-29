import React from "react";
import { Line, Bar } from "react-chartjs-2";
import ChartCard from "./ChartCard";
import TaskTable from "./TaskTable";
import EmployeesTable from "./EmployeesTable";
import { chart1DataSet, chart2DataSet, chart3DataSet, chart4DataSet } from "./ChartData";
import "./Dashboard.scss";

function Dashboard(): JSX.Element {
  return (
    <section className="Dashboard">
      <article className="Dashboard__sales-chart-container Dashboard__border">
        <ChartCard mainHeading="Total Sales" subHeading="Monthly">
          {/* @ts-expect-error: this type error is associated with react-chartjs-2*/}
          <Line type="line" data={chart1DataSet.data} options={chart1DataSet.options} />
        </ChartCard>
      </article>
      <article className="Dashboard__income-chart-container Dashboard__border">
        <ChartCard mainHeading="Total Income" subHeading="Monthly">
          {/* @ts-expect-error: this type error is associated with react-chartjs-2*/}
          <Line data={chart2DataSet.data} options={chart2DataSet.options} />
        </ChartCard>
      </article>
      <article className="Dashboard__expense-chart-container Dashboard__border">
        <ChartCard mainHeading="Total Expense" subHeading="Monthly">
          {/* @ts-expect-error: this type error is associated with react-chartjs-2*/}
          <Bar data={chart3DataSet.data} options={chart3DataSet.options} />
        </ChartCard>
      </article>
      <article className="Dashboard__profit-chart-container Dashboard__border">
        <ChartCard mainHeading="Profit" subHeading="Monthly">
          {/* @ts-expect-error: this type error is associated with react-chartjs-2*/}
          <Line data={chart4DataSet.data} options={chart4DataSet.options} />
        </ChartCard>
      </article>

      <article className="Dashboard__task-table-container Dashboard__border">
        <TaskTable />
      </article>
      <article className="Dashboard__employees-table-container Dashboard__border">
        <EmployeesTable />
      </article>
    </section>
  );
}

export default Dashboard;
