// AgregarVentaModal.jsx
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';

const AgregarVentaModal = ({ isOpen, onClose, onAgregarVenta }) => {
  const [venta, setVenta] = useState({
    numeroVenta: Date.now().toString(),
    nombre: '',
    fecha: new Date().toISOString().substring(0, 10),
    concepto: '',
    cantidadMaples: '',
    cantidadDocenas: '',
    precioUnitario: '',
    importe: '',
  });

  const handleChange = (e) => {
    setVenta({ ...venta, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAgregarVenta(venta);
  };

  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>AGREGAR MOVIMIENTO DE VENTA</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <TextField name="numeroVenta" label="Número de Venta" value={venta.numeroVenta} disabled fullWidth />
          <TextField name="nombre" label="Apellido y Nombre" value={venta.nombre} onChange={handleChange} required fullWidth />
          <TextField name="fecha" label="Fecha" value={venta.fecha} disabled fullWidth />
          <TextField name="concepto" label="Concepto" value={venta.concepto} onChange={handleChange} required fullWidth />
          <TextField name="cantidadMaples" label="Cantidad de Maples" type="number" value={venta.cantidadMaples} onChange={handleChange} required fullWidth />
          <TextField name="cantidadDocenas" label="Cantidad de Docenas" type="number" value={venta.cantidadDocenas} onChange={handleChange} required fullWidth />
          <TextField name="precioUnitario" label="Precio Unitario" type="number" value={venta.precioUnitario} onChange={handleChange} required fullWidth />
          <TextField name="importe" label="Importe" type="number" value={venta.importe} onChange={handleChange} required fullWidth />
        </form>
      </DialogContent>
      <DialogActions>
        <Button type="submit" variant="contained" onClick={handleSubmit}>ACEPTAR</Button>
        <Button variant="contained" onClick={onClose}>CANCELAR</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AgregarVentaModal;
