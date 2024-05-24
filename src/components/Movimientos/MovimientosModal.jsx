import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import MovimientosForm from './MovimientosForm';

const MovimientosModal = ({ isOpen, onClose, addMovimiento }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Movimientos</DialogTitle>
      <DialogContent>
        <MovimientosForm addMovimiento={addMovimiento} />
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={onClose}>Cancelar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default MovimientosModal;
