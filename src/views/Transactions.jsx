import React, { useState } from 'react';
import TransactionForm from '../components/TransactionForm';
import TransactionTable from '../components/TransactionTable';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Movimientos</h2>
      <TransactionForm addTransaction={addTransaction} />
      <TransactionTable transactions={transactions} />
    </div>
  );
};

export default Transactions;
