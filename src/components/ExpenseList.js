import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

const ExpenseList = ({ expenses, onDelete, onEdit }) => {
  return (
    <div className="expense-list">
      <h3>Expense List</h3>
      {expenses.length === 0 ? (
        <p>No expenses added yet.</p>
      ) : (
        <ul>
          {expenses.map((expense, index) => (
            <li key={index} className="expense-item">
              <div>
                <strong>{expense.title}</strong>
                <p>
                  {expense.category} - ₹{expense.amount} on {expense.date}
                </p>
              </div>
              <div className="expense-actions">
                <button onClick={() => onEdit(expense)}>
                  <FaEdit /> Edit
                </button>
                <button onClick={() => onDelete(index)}>
                  <FaTrash /> Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseList;
