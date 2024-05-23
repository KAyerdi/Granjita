import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const VentasForm = ({ addventa }) => {
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
    addventa(venta);
    setventa({
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
      <TextField name="code" label="Código" value={venta.code} onChange={handleChange} required fullWidth />
      <TextField name="name" label="Nombre" value={venta.name} onChange={handleChange} required fullWidth />
      <TextField name="address" label="Dirección" value={venta.address} onChange={handleChange} required fullWidth />
      <TextField name="city" label="Localidad" value={venta.city} onChange={handleChange} required fullWidth />
      <TextField name="phone" label="Teléfono" value={venta.phone} onChange={handleChange} required fullWidth />
      <TextField name="cuit" label="CUIT" value={venta.cuit} onChange={handleChange} required fullWidth />
      <TextField name="balance" label="Saldo" type="number" value={venta.balance} onChange={handleChange} required fullWidth />
      <Button type="submit" variant="contained" color="primary" fullWidth>Agregar venta</Button>
    </form>
  );
};

export default VentasForm;
