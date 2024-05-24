import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import React from 'react';
import StockTable from './StockTable';

const StockModal = ({ isOpen, onClose, stockItems, handleAdd, handleEdit, handleDelete }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Stock</DialogTitle>
      <DialogContent>
        <StockTable stockItems={stockItems} deleteStock={handleDelete} updateStock={handleEdit} />
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={handleAdd}>Agregar</Button>
        <Button variant="contained" onClick={handleEdit} disabled={!stockItems || !stockItems.length}>Modificar</Button>
        <Button variant="contained" onClick={handleDelete} disabled={!stockItems || !stockItems.length}>Borrar</Button>
        <Button variant="contained" onClick={onClose}>Salir</Button>
      </DialogActions>
    </Dialog>
  );
};

export default StockModal;

