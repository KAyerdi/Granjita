import { Button, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';

const StockForm = ({ addStock, selectedStock, updateStock, onClose }) => {
  const [stock, setStock] = useState({
    id: '',
    name: '',
    description: '',
    quantity: 0,
    price: 0,
  });

  useEffect(() => {
    if (selectedStock) {
      setStock(selectedStock);
    }
  }, [selectedStock]);

  const handleChange = (e) => {
    setStock({ ...stock, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedStock) {
      updateStock(stock);
    } else {
      addStock(stock);
    }
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <TextField name="id" label="ID" value={stock.id} onChange={handleChange} required fullWidth />
      <TextField name="name" label="Nombre" value={stock.name} onChange={handleChange} required fullWidth />
      <TextField name="description" label="Descripción" value={stock.description} onChange={handleChange} required fullWidth />
      <TextField name="quantity" label="Cantidad" type="number" value={stock.quantity} onChange={handleChange} required fullWidth />
      <TextField name="price" label="Precio" type="number" value={stock.price} onChange={handleChange} required fullWidth />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        {selectedStock ? 'Modificar Stock' : 'Agregar Stock'}
      </Button>
    </form>
  );
};

export default StockForm;
