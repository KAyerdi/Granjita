import Button from '@mui/material/Button';
import React, { useState } from 'react';
import CustomerForm from '../components/CustomerForm';
import CustomerTable from '../components/CustomerTable';

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // Función para agregar un nuevo cliente
  const addCustomer = (customer) => {
    setCustomers([...customers, customer]);
    setShowForm(false); // Ocultar el formulario después de agregar un cliente
  };

  // Función para eliminar un cliente por su código
  const deleteCustomer = (code) => {
    setCustomers(customers.filter((customer) => customer.code !== code));
  };

  // Función para modificar los detalles de un cliente
  const updateCustomer = (updatedCustomer) => {
    setCustomers(customers.map((customer) =>
      customer.code === updatedCustomer.code ? updatedCustomer : customer
    ));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Clientes</h2>
      {showForm && <CustomerForm addCustomer={addCustomer} />}
      <CustomerTable customers={customers} deleteCustomer={deleteCustomer} updateCustomer={updateCustomer} />
      <div className="mt-4 flex gap-4">
        <Button variant="contained" color="primary" onClick={() => setShowForm(true)}>Agregar</Button>
        <Button variant="contained" color="primary">Modificar</Button>
        <Button variant="contained" color="primary">Borrar</Button>
      </div>

    </div>
  );
};

export default Customers;
