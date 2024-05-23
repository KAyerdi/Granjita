// VentasModal.jsx
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import React from 'react';

const VentasModal = ({ isOpen, onClose, children }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Movimientos de Vtas</DialogTitle>
      <DialogContent>
        {children}
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={onClose}>SALIR</Button>
      </DialogActions>
    </Dialog>
  );
};

export default VentasModal;
``
