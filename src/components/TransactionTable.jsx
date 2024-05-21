import React from 'react';

const TransactionTable = ({ transactions }) => {
  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          {['Tipo', 'Fecha', 'Importe', 'Descripción'].map((heading) => (
            <th key={heading} className="py-2 px-4 bg-gray-200 border-b border-gray-200">{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => (
          <tr key={index} className="hover:bg-gray-100">
            <td className="py-2 px-4 border-b border-gray-200">{transaction.type}</td>
            <td className="py-2 px-4 border-b border-gray-200">{transaction.date}</td>
            <td className="py-2 px-4 border-b border-gray-200">{transaction.amount}</td>
            <td className="py-2 px-4 border-b border-gray-200">{transaction.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;
