import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

const PagosForm = ({ addPago }) => {
  const [pago, setPago] = useState({
    cliente: '',
    codigo: '',
    fecha: '',
    concepto: '',
    importe: 0,
  });

  const handleChange = (e) => {
    setPago({ ...pago, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPago(pago); // Llamada a la función addPago con el nuevo pago
    // Restablecer el estado del formulario después de agregar el pago
    setPago({
      cliente: '',
      codigo: '',
      fecha: '',
      concepto: '',
      importe: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Campos de entrada para los datos del pago */}
      <TextField name="cliente" label="Cliente" value={pago.cliente} onChange={handleChange} required fullWidth />
      <TextField name="codigo" label="Código" value={pago.codigo} onChange={handleChange} required fullWidth />
      <TextField name="fecha" label="Fecha" type="date" value={pago.fecha} onChange={handleChange} required fullWidth />
      <TextField name="concepto" label="Concepto" value={pago.concepto} onChange={handleChange} required fullWidth />
      <TextField name="importe" label="Importe" type="number" value={pago.importe} onChange={handleChange} required fullWidth />
      {/* Botón para enviar el formulario */}
      <Button type="submit" variant="contained" color="primary" fullWidth>Agregar pago</Button>
    </form>
  );
};

export default PagosForm;
