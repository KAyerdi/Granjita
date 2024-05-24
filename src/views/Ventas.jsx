import Button from '@mui/material/Button';
import React, { useState } from 'react';
import VentasForm from '../components/Ventas/VentasForm';
import VentasTable from '../components/Ventas/VentasTable';

const Ventas = () => {
  const [ventas, setVentas] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };

  const addVenta = (venta) => {
    setVentas([...ventas, venta]);
    setShowForm(false);
  };

  const deleteVenta = (code) => {
    setVentas(ventas.filter((venta) => venta.code !== code));
  };

  const updateVenta = (updatedVenta) => {
    setVentas(ventas.map((venta) =>
      venta.code === updatedVenta.code ? updatedVenta : venta
    ));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Ventas</h2>
      {showForm ? (
        <VentasForm addVenta={addVenta} />
      ) : (
        <VentasTable ventas={ventas} deleteVenta={deleteVenta} updateVenta={updateVenta} />
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

export default Ventas;
