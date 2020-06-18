import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
// import uuid from "uuid";

export const AddTransaction = () => {
  const { addTransaction, updateTransaction, editTransaction } = useContext(
    GlobalContext
  );

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = e => {
    e.preventDefault();

    if (!editTransaction) {
      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount
      };
      addTransaction(newTransaction);
      setText("");
      setAmount(0);
    } else {
      updateTransaction(text, amount, editTransaction.id);
    }
    // const newTransaction = {
    //   id: Math.floor(Math.random() * 100000000),
    //   text,
    //   amount: +amount
    // };

    // addTransaction(newTransaction);
  };

  useEffect(() => {
    if (editTransaction) {
      setText(editTransaction.text);
      setAmount(parseFloat(editTransaction.amount));
      console.log(editTransaction);
    } else {
      setText("");
      setAmount(0);
    }
  }, [editTransaction]);

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            negative - expense(-100), positive - income(100)
          </label>
          <input
            type="number"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className={editTransaction ? `ebtn` : `abtn`}>
          {editTransaction ? "Edit & Save Transaction" : "Add Transaction"}
        </button>
      </form>
    </>
  );
};
