import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ComprasForm from '../components/Compras/ComprasForm';
import ComprasTable from '../components/Compras/ComprasTable';

const Compras = () => {
  const [compras, setCompras] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };

  const addCompra = (compra) => {
    setCompras([...compras, compra]);
    setShowForm(false);
  };

  const deleteCompra = (code) => {
    setCompras(compras.filter((compra) => compra.code !== code));
  };

  const updateCompra = (updatedCompra) => {
    setCompras(compras.map((compra) =>
      compra.code === updatedCompra.code ? updatedCompra : compra
    ));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Compras</h2>
      {showForm ? (
        <ComprasForm addCompra={addCompra} />
      ) : (
        <ComprasTable compras={compras} deleteCompra={deleteCompra} updateCompra={updateCompra} />
      )}
      <div className="mt-4 flex gap-4">
        <Button variant="contained" color="primary" onClick={toggleFormVisibility}>
          {showForm ? "Cancelar" : "Agregar"}
        </Button>
        <Button variant="contained" color="primary">Modificar</Button>
        <Button variant="contained" color="primary">Borrar</Button>
      </div>
    </div>
  );
};

export default Compras;
