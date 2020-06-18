import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
  const { removeTransaction, findTransactionItem } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <div>
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.text}{" "}
        <span>
          {sign}${Math.abs(transaction.amount)}
        </span>
        <button
          onClick={() => removeTransaction(transaction.id)}
          className="delete-btn"
        >
          x
        </button>
        <button
          onClick={() => findTransactionItem(transaction.id)}
          className="edit-btn"
        >
          <i className="fa fa-pencil" />
        </button>
        <button
          onClick={() => findTransactionItem(transaction.id)}
          className={
            transaction.amount < 0
              ? "btn xbtn btn-outline-danger btn-sm"
              : "btn ibtn btn-outline-success btn-sm"
          }
        >
          Edit
        </button>
        <button
          onClick={() => removeTransaction(transaction.id)}
          className={
            transaction.amount < 0
              ? "btn xbtn btn-outline-danger btn-sm"
              : "btn ibtn btn-outline-success btn-sm"
          }
        >
          Delete
        </button>
      </li>
    </div>
  );
};
