import React, { useState, useEffect } from "react";

const WalletBalance = ({ balance, onAddIncome }) => {
  const [walletBalance, setWalletBalance] = useState(balance);

  useEffect(() => {
    const savedBalance = localStorage.getItem("walletBalance");
    if (savedBalance) setWalletBalance(Number(savedBalance));
  }, []);

  useEffect(() => {
    localStorage.setItem("walletBalance", walletBalance);
  }, [walletBalance]);

  const handleAddIncome = (amount) => {
    const newBalance = walletBalance + amount;
    setWalletBalance(newBalance);
    onAddIncome(newBalance);
  };

  return (
    <div className="wallet-balance">
      <h2>Wallet Balance: ₹{walletBalance}</h2>
      <button onClick={() => handleAddIncome(1000)}>Add ₹1000</button>
    </div>
  );
};

export default WalletBalance;
