import Button from '@mui/material/Button';
import React, { useState } from 'react';
import ProveedoresForm from '../components/Proveedores/ProveedoresForm';
import ProveedoresTable from '../components/Proveedores/ProveedoresTable';

const Proveedores = () => {
  const [proveedores, setProveedores] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // Función para agregar un nuevo proveedor
  const addProveedor = (proveedor) => {
    setProveedores([...proveedores, proveedor]);
    setShowForm(false); // Ocultar el formulario después de agregar un proveedor
  };

  // Función para eliminar un proveedor por su código
  const deleteProveedor = (code) => {
    setProveedores(proveedores.filter((proveedor) => proveedor.code !== code));
  };

  // Función para modificar los detalles de un proveedor
  const updateProveedor = (updatedProveedor) => {
    setProveedores(proveedores.map((proveedor) =>
      proveedor.code === updatedProveedor.code ? updatedProveedor : proveedor
    ));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Proveedores</h2>
      {showForm && <ProveedoresForm addProveedor={addProveedor} />}
      <ProveedoresTable proveedores={proveedores} deleteProveedor={deleteProveedor} updateProveedor={updateProveedor} />
      <div className="mt-4 flex gap-4">
        <Button variant="contained" color="primary" onClick={() => setShowForm(true)}>Agregar</Button>
        <Button variant="contained" color="primary">Modificar</Button>
        <Button variant="contained" color="primary">Borrar</Button>
      </div>
    </div>
  );
};

export default Proveedores;
