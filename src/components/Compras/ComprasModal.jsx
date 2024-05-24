import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import React from 'react';
import ComprasTable from './ComprasTable';

const ComprasModal = ({ isOpen, onClose, compras, handleAdd, handleEdit, handleDelete }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Compras</DialogTitle>
      <DialogContent>
        <ComprasTable compras={compras} />
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={handleAdd}>Agregar</Button>
        <Button variant="contained" onClick={handleEdit}>Modificar</Button>
        <Button variant="contained" onClick={handleDelete}>Borrar</Button>
        <Button variant="contained" onClick={onClose}>Salir</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ComprasModal;
