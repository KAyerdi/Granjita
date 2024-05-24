import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import PagosForm from './PagosForm';

const PagosModal = ({ isOpen, onClose, handleAdd, handleEdit, handleDelete, pagos }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Pagos</DialogTitle>
      <DialogContent>
        <PagosForm addPago={handleAdd} />
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={handleEdit}>MODIFICAR</Button>
        <Button variant="contained" onClick={handleDelete}>BORRAR</Button>
        <Button variant="contained" onClick={onClose}>SALIR</Button>
      </DialogActions>
    </Dialog>
  );
};

export default PagosModal;
