import React, { useState } from 'react';

const TransactionForm = ({ addTransaction }) => {
  const [transaction, setTransaction] = useState({
    type: 'Venta',
    date: '',
    amount: 0,
    description: '',
  });

  const handleChange = (e) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction(transaction);
    setTransaction({
      type: 'Venta',
      date: '',
      amount: 0,
      description: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <select name="type" value={transaction.type} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required>
        <option value="Venta">Venta</option>
        <option value="Compra">Compra</option>
        <option value="Pago">Pago</option>
        <option value="Transferencia">Transferencia</option>
      </select>
      <input type="date" name="date" value={transaction.date} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required />
      <input type="number" name="amount" value={transaction.amount} onChange={handleChange} placeholder="Importe" className="w-full p-2 border border-gray-300 rounded" required />
      <input type="text" name="description" value={transaction.description} onChange={handleChange} placeholder="Descripción" className="w-full p-2 border border-gray-300 rounded" required />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Agregar Movimiento</button>
    </form>
  );
};

export default TransactionForm;
