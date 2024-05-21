import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import React from 'react';
import ProveedoresTable from './ProveedoresTable'; // Asume que ya tienes un componente ProveedoresTable

const ProveedoresModal = ({ isOpen, onClose, proveedores, handleAdd, handleEdit, handleDelete }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Proveedores</DialogTitle>
      <DialogContent>
        <ProveedoresTable proveedores={proveedores} />
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

export default ProveedoresModal;
