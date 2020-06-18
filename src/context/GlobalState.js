import React, { createContext, useState, useEffect } from "react";
// import uuid from "uuid";
// import AppReducer from "./AppReducer";

// Initial state
// const initialState = {
//   transactions: JSON.parse(localStorage.getItem("transactions")) || []
// };

// Create context
export const GlobalContext = createContext();

// Provider component
export const GlobalProvider = props => {
  const initialState = JSON.parse(localStorage.getItem("transactions")) || [];
  const [transactions, setTransactions] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const [editTransaction, setEditTransaction] = useState(null);

  // Add transaction
  const addTransaction = newTransaction => {
    setTransactions([newTransaction, ...transactions]);
  };

  // Remove transaction
  const removeTransaction = id => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };

  // Find transaction item
  const findTransactionItem = id => {
    const transactionItem = transactions.find(
      transaction => transaction.id === id
    );

    setEditTransaction(transactionItem);
  };

  // Edit transaction
  const updateTransaction = (text, amount, id) => {
    const newTransactions = transactions.map(transaction =>
      transaction.id === id ? { text, amount: +amount, id } : transaction
    );

    console.log(newTransactions);

    setTransactions(newTransactions);
    setEditTransaction(null);
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions,
        addTransaction,
        removeTransaction,
        updateTransaction,
        findTransactionItem,
        editTransaction
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
