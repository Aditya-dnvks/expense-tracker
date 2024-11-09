import React, { useState } from "react";
import WalletBalance from "./components/WalletBalance";
import AddExpenseForm from "./components/AddExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseSummary from "./components/ExpenseSummary";
import "./App.css";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [balance, setBalance] = useState(5000);

  const handleAddExpense = (expense) => {
    if (expense.amount > balance) {
      alert("Not enough balance.");
      return;
    }
    setExpenses([...expenses, expense]);
    setBalance(balance - expense.amount);
    localStorage.setItem("expenses", JSON.stringify([...expenses, expense]));
  };

  const handleAddIncome = (amount) => {
    setBalance(amount);
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <WalletBalance balance={balance} onAddIncome={handleAddIncome} />
      <AddExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseList expenses={expenses} />
      <ExpenseSummary expenses={expenses} />
    </div>
  );
};

export default App;
