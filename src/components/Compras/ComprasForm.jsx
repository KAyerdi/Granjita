import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

const ComprasForm = ({ addCompra }) => {
  const [compra, setCompra] = useState({
    code: '',
    product: '',
    quantity: '',
    price: '',
  });

  const handleChange = (e) => {
    setCompra({ ...compra, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCompra(compra);
    setCompra({
      code: '',
      product: '',
      quantity: '',
      price: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <TextField name="code" label="Código" value={compra.code} onChange={handleChange} required fullWidth />
      <TextField name="product" label="Producto" value={compra.product} onChange={handleChange} required fullWidth />
      <TextField name="quantity" label="Cantidad" type="number" value={compra.quantity} onChange={handleChange} required fullWidth />
      <TextField name="price" label="Precio" type="number" value={compra.price} onChange={handleChange} required fullWidth />
      <Button type="submit" variant="contained" color="primary" fullWidth>Agregar compra</Button>
    </form>
  );
};

export default ComprasForm;
