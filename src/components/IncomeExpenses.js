import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  let income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  income = parseFloat(income).toFixed(2);

  let expense =
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;
  expense = parseFloat(expense).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">{expense}</p>
      </div>
    </div>
  );
};
