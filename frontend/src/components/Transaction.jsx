import React, { useState,useEffect } from 'react';
import axios from "axios";

const TransactionTable = () => {
  const [transactionData, setTransactionData] = useState([]);

  useEffect(() => {
    const fetchtransaction =async() => {
      try {   
         const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/Transactions`);
         setTransactionData(response.data);
       } 
       catch (error) {
        console.error("Error fetching data:", error);
       }
      }
      fetchtransaction();
   },[]);

  const handleCancel = (productId) => {
    // Update the status of the transaction to "Cancelled"
    const updatedData = transactionData.map((transaction) =>
      transaction.productId === productId
        ? { ...transaction, status: 'Cancelled' }
        : transaction
    );
    setTransactionData(updatedData);
  };

  return (
    <div className="transaction-table">
      <h2>Transaction History</h2>
      <table>
        <thead>
          <tr>
            <th>Status</th>
            <th>Product ID</th>
            <th>User ID</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {transactionData.map((transaction) => (
            <tr key={transaction._Id}>
              <td>{transaction.status}</td>
              <td>{transaction._Id}</td>
              <td>{'email'}</td>
              <td>{`$${transaction.price}`}</td>
              <td>
                {transaction.status !== 'Cancelled' && (
                  <button onClick={() => handleCancel(transaction.productId)}>Cancel</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;

