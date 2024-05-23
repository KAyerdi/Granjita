import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const ProveedoresForm = ({ addProveedor }) => {
  const [proveedor, setProveedor] = useState({
    code: '',
    name: '',
    address: '',
    city: '',
    phone: '',
    cuit: '',
    balance: 0,
  });

  const handleChange = (e) => {
    setProveedor({ ...proveedor, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProveedor(proveedor);
    setProveedor({
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
      <TextField name="code" label="Código" value={proveedor.code} onChange={handleChange} required fullWidth />
      <TextField name="name" label="Nombre" value={proveedor.name} onChange={handleChange} required fullWidth />
      <TextField name="address" label="Dirección" value={proveedor.address} onChange={handleChange} required fullWidth />
      <TextField name="city" label="Localidad" value={proveedor.city} onChange={handleChange} required fullWidth />
      <TextField name="phone" label="Teléfono" value={proveedor.phone} onChange={handleChange} required fullWidth />
      <TextField name="cuit" label="CUIT" value={proveedor.cuit} onChange={handleChange} required fullWidth />
      <TextField name="balance" label="Saldo" type="number" value={proveedor.balance} onChange={handleChange} required fullWidth />
      <Button type="submit" variant="contained" color="primary" fullWidth>Agregar Proveedor</Button>
    </form>
  );
};

export default ProveedoresForm;
