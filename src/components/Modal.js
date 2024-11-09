import React from "react";
import Modal from "react-modal";

const ExpenseModal = ({ isOpen, onRequestClose, onSave, expense }) => {
  const [title, setTitle] = useState(expense ? expense.title : "");
  const [amount, setAmount] = useState(expense ? expense.amount : "");
  const [category, setCategory] = useState(expense ? expense.category : "");
  const [date, setDate] = useState(expense ? expense.date : "");

  const handleSave = () => {
    if (title && amount && category && date) {
      onSave({ title, amount, category, date });
      onRequestClose();
    } else {
      alert("All fields are required");
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h3>Edit Expense</h3>
      <form>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <div>
          <button type="button" onClick={handleSave}>
            Save
          </button>
          <button type="button" onClick={onRequestClose}>
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default ExpenseModal;
