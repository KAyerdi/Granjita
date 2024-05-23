import React, { useState } from 'react';

const CustomerForm = ({ addCustomer }) => {
  const [customer, setCustomer] = useState({
    code: '',
    name: '',
    address: '',
    city: '',
    postalCode: '',
    province: '',
    phone: '',
    cuit: '',
    fiscalStatus: '',
    balance: 0,
  });

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCustomer(customer);
    setCustomer({
      code: '',
      name: '',
      address: '',
      city: '',
      postalCode: '',
      province: '',
      phone: '',
      cuit: '',
      fiscalStatus: '',
      balance: 0,
    });
  };

    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="code" value={customer.code} onChange={handleChange} placeholder="Código" className="w-full p-2 border border-gray-300 rounded" required />
        <input type="text" name="name" value={customer.name} onChange={handleChange} placeholder="Nombre" className="w-full p-2 border border-gray-300 rounded" required />
        <input type="text" name="address" value={customer.address} onChange={handleChange} placeholder="Dirección" className="w-full p-2 border border-gray-300 rounded" required />
        <input type="text" name="city" value={customer.city} onChange={handleChange} placeholder="Localidad" className="w-full p-2 border border-gray-300 rounded" required />
        <input type="text" name="postalCode" value={customer.postalCode} onChange={handleChange} placeholder="Código Postal" className="w-full p-2 border border-gray-300 rounded" required />
        <input type="text" name="province" value={customer.province} onChange={handleChange} placeholder="Provincia" className="w-full p-2 border border-gray-300 rounded" required />
        <input type="text" name="phone" value={customer.phone} onChange={handleChange} placeholder="Teléfono" className="w-full p-2 border border-gray-300 rounded" required />
        <input type="text" name="cuit" value={customer.cuit} onChange={handleChange} placeholder="CUIT" className="w-full p-2 border border-gray-300 rounded" required />
        <select name="fiscalStatus" value={customer.fiscalStatus} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required>
          <option value="">Situación Fiscal</option>
          <option value="Responsable Inscripto">Responsable Inscripto</option>
          <option value="Responsable no Inscripto">Responsable no Inscripto</option>
          <option value="Exento">Exento</option>
          <option value="No Responsable">No Responsable</option>
          <option value="Consumidor Final">Consumidor Final</option>
        </select>
        <input type="number" name="balance" value={customer.balance} onChange={handleChange} placeholder="Saldo" className="w-full p-2 border border-gray-300 rounded" required />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Agregar Cliente</button>
      </form>
  );
};

export default CustomerForm;
