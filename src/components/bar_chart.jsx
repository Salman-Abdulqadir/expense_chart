import React from "react";

import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

import Summary from "./summary";

const ExpenseChart = ({ data }) => {
  return (
    <section className="info-section">
      <h2>Spending - Last 7</h2>
      <ResponsiveContainer className="chart" width="100%" aspect={3}>
        <BarChart
          width={500}
          height={300}
          data={data}
        >
          <XAxis dataKey="day" axisLine={false} tickLine={false}/>
          <Tooltip contentStyle={{ backgroundColor: "hsl(25, 47%, 15%)", color:"hsl(33, 100%, 98%)" }} />
          <Bar dataKey="amount" fill=" hsl(10, 79%, 65%)" />
        </BarChart>
      </ResponsiveContainer>
      <Summary/>
    </section>
  );
};

export default ExpenseChart;
