import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import React from 'react';
import CustomerTable from './CustomerTable'; // Asume que ya tienes un componente CustomerTable

const CustomerModal = ({ isOpen, onClose, customers }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Clientes</DialogTitle>
      <DialogContent>
        <CustomerTable customers={customers} />
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

export default CustomerModal;
