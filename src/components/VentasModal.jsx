// VentasModal.jsx
import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import VentasTable from './VentasTable';

const VentasModal = ({ isOpen, onClose, ventas, onAgregarVenta }) => {
  const [filterDate, setFilterDate] = useState('');

  const handleFilterChange = (e) => {
    setFilterDate(e.target.value);
  };

  const filteredVentas = ventas.filter(venta => 
    filterDate === '' || venta.fecha.includes(filterDate)
  );

  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Movimientos de Vtas</DialogTitle>
      <DialogContent>
        <TextField
          label="Filtrar por Fecha"
          type="date"
          value={filterDate}
          onChange={handleFilterChange}
          fullWidth
          margin="normal"
        />
        <VentasTable ventas={filteredVentas} />
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={onAgregarVenta}>AGREGAR</Button>
        <Button variant="contained" onClick={() => {}}>BORRAR</Button>
        <Button variant="contained" onClick={onClose}>SALIR</Button>
      </DialogActions>
    </Dialog>
  );
};

export default VentasModal;
