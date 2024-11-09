import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const ExpenseSummary = ({ expenses }) => {
  const data = expenses.reduce((acc, expense) => {
    const found = acc.find((item) => item.name === expense.category);
    if (found) {
      found.value += expense.amount;
    } else {
      acc.push({ name: expense.category, value: expense.amount });
    }
    return acc;
  }, []);

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        outerRadius={100}
        fill="#8884d8"
      >
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={["#0088FE", "#00C49F", "#FFBB28", "#FF8042"][index % 4]}
          />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default ExpenseSummary;
