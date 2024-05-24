import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const VentasForm = ({ addVenta }) => {
  const [venta, setVenta] = useState({
    code: '',
    name: '',
    address: '',
    city: '',
    phone: '',
    cuit: '',
    balance: 0,
  });

  const handleChange = (e) => {
    setVenta({ ...venta, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addVenta(venta); // Llamada a la función addVenta con la nueva venta
    // Restablecer el estado del formulario después de agregar la venta
    setVenta({
      code: '',
      name: '',
      address: '',
      city: '',
      phone: '',
      cuit: '',
      balance: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Campos de entrada para los datos de la venta */}
      <TextField name="code" label="Código" value={venta.code} onChange={handleChange} required fullWidth />
      <TextField name="name" label="Nombre" value={venta.name} onChange={handleChange} required fullWidth />
      <TextField name="address" label="Dirección" value={venta.address} onChange={handleChange} required fullWidth />
      <TextField name="city" label="Localidad" value={venta.city} onChange={handleChange} required fullWidth />
      <TextField name="phone" label="Teléfono" value={venta.phone} onChange={handleChange} required fullWidth />
      <TextField name="cuit" label="CUIT" value={venta.cuit} onChange={handleChange} required fullWidth />
      <TextField name="balance" label="Saldo" type="number" value={venta.balance} onChange={handleChange} required fullWidth />
      {/* Botón para enviar el formulario */}
      <Button type="submit" variant="contained" color="primary" fullWidth>Agregar venta</Button>
    </form>
  );
};

export default VentasForm;

