import React from 'react';

const CustomerTable = ({ customers }) => {
  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          {['Código', 'Nombre', 'Dirección', 'Localidad', 'Código Postal', 'Provincia', 'Teléfono', 'CUIT', 'Situación Fiscal', 'Saldo'].map((heading) => (
            <th key={heading} className="py-2 px-4 bg-gray-200 border-b border-gray-200">{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {customers.map((customer, index) => (
          <tr key={index} className="hover:bg-gray-100">
            <td className="py-2 px-4 border-b border-gray-200">{customer.code}</td>
            <td className="py-2 px-4 border-b border-gray-200">{customer.name}</td>
            <td className="py-2 px-4 border-b border-gray-200">{customer.address}</td>
            <td className="py-2 px-4 border-b border-gray-200">{customer.city}</td>
            <td className="py-2 px-4 border-b border-gray-200">{customer.postalCode}</td>
            <td className="py-2 px-4 border-b border-gray-200">{customer.province}</td>
            <td className="py-2 px-4 border-b border-gray-200">{customer.phone}</td>
            <td className="py-2 px-4 border-b border-gray-200">{customer.cuit}</td>
            <td className="py-2 px-4 border-b border-gray-200">{customer.fiscalStatus}</td>
            <td className="py-2 px-4 border-b border-gray-200">{customer.balance}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomerTable;


