import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import React from 'react';
import VentasTable from './VentasTable';

const VentasModal = ({ isOpen, onClose, ventas, handleAdd, handleEdit, handleDelete }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Ventas</DialogTitle>
      <DialogContent>
        <VentasTable ventas={ventas} />
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={handleAdd}>AGREGAR</Button>
        <Button variant="contained" onClick={handleEdit}>MODIFICAR</Button>
        <Button variant="contained" onClick={handleDelete}>BORRAR</Button>
        <Button variant="contained" onClick={onClose}>SALIR</Button>
      </DialogActions>
    </Dialog>
  );
};

export default VentasModal;

