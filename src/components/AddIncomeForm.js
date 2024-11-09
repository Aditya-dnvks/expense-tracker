import React, { useState } from "react";

const AddIncomeForm = ({ onAddIncome }) => {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || amount <= 0) {
      alert("Please enter a valid amount");
      return;
    }
    onAddIncome(Number(amount));
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-income-form">
      <h3>Add Income to Wallet</h3>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
        min="0"
      />
      <button type="submit">Add Income</button>
    </form>
  );
};

export default AddIncomeForm;
