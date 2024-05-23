import Button from '@mui/material/Button';
import React, { useState } from 'react';
import VentasForm from '../components/Ventas/VentasForm';
import VentasTable from '../components/Ventas/VentasTable';

const Ventas = () => {
  const [ventas, setVentas] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // Función para agregar un nuevo venta
  const addVenta = (venta) => {
    setVentas([...Ventas, venta]);
    setShowForm(false); // Ocultar el formulario después de agregar un venta
  };

  // Función para eliminar un venta por su código
  const deleteVenta = (code) => {
    setVentas(Ventas.filter((venta) => venta.code !== code));
  };

  // Función para modificar los detalles de un venta
  const updateVenta = (updatedVenta) => {
    setVentas(Ventas.map((venta) =>
      venta.code === updatedventa.code ? updatedVenta : venta
    ));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Ventas</h2>
      {showForm && <VentasForm addventa={addVenta} />}
      <VentasTable  ventas={ventas} deleteVenta={deleteVenta} updateVenta={updateVenta} />
      <div className="mt-4 flex gap-4">
        <Button variant="contained" color="primary" onClick={() => setShowForm(true)}>Agregar</Button>
        <Button variant="contained" color="primary">Modificar</Button>
        <Button variant="contained" color="primary">Borrar</Button>
      </div>
    </div>
  );
};

export default Ventas;
