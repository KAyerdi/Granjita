import { Button } from '@mui/material';
import React, { useState } from 'react';
import VentasForm from './VentasForm';

const VentasTable = ({ ventas, addVenta }) => {
  const [showForm, setShowForm] = useState(false);

  const handleOpenForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleAgregarVenta = (nuevaVenta) => {
    addVenta(nuevaVenta);
    setShowForm(false);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Número de Venta</th>
            <th>Código</th>
            <th>Apellido y Nombre</th>
            <th>Cantidad de Maples</th>
            <th>Cantidad de Docenas</th>
            <th>Precio Unitario</th>
            <th>Importe</th>
          </tr>
        </thead>
        <tbody>
          {ventas.map((venta, index) => (
            <tr key={index}>
              <td>{venta.fecha}</td>
              <td>{venta.numeroVenta}</td>
              <td>{venta.codigo}</td>
              <td>{venta.nombre}</td>
              <td>{venta.cantidadMaples}</td>
              <td>{venta.cantidadDocenas}</td>
              <td>{venta.precioUnitario}</td>
              <td>{venta.importe}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button variant="contained" onClick={handleOpenForm}>AGREGAR</Button>
      {showForm && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '5px',
        }}>
          <VentasForm addVenta={handleAgregarVenta} />
          <Button variant="contained" onClick={handleCloseForm}>CANCELAR</Button>
        </div>
      )}
    </div>
  );
};

export default VentasTable;
