import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

const MovimientosForm = ({ addMovimiento }) => {
  const [movimiento, setMovimiento] = useState({
    numero: '',
    fecha: '',
    codigoIdentificacion: '',
    concepto: '',
    debe: '',
    haber: '',
    aPagar: '',
    aCobrar: ''
  });

  const handleChange = (e) => {
    setMovimiento({ ...movimiento, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovimiento(movimiento);
    setMovimiento({
      numero: '',
      fecha: '',
      codigoIdentificacion: '',
      concepto: '',
      debe: '',
      haber: '',
      aPagar: '',
      aCobrar: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <TextField name="numero" label="Número" value={movimiento.numero} onChange={handleChange} required fullWidth />
      <TextField name="fecha" label="Fecha" type="date" value={movimiento.fecha} onChange={handleChange} required fullWidth />
      <TextField name="codigoIdentificacion" label="Código de Identificación" value={movimiento.codigoIdentificacion} onChange={handleChange} required fullWidth />
      <TextField name="concepto" label="Concepto" value={movimiento.concepto} onChange={handleChange} required fullWidth />
      <TextField name="debe" label="Debe" type="number" value={movimiento.debe} onChange={handleChange} required fullWidth />
      <TextField name="haber" label="Haber" type="number" value={movimiento.haber} onChange={handleChange} required fullWidth />
      <TextField name="aPagar" label="A Pagar" type="number" value={movimiento.aPagar} onChange={handleChange} required fullWidth />
      <TextField name="aCobrar" label="A Cobrar" type="number" value={movimiento.aCobrar} onChange={handleChange} required fullWidth />
      <Button type="submit" variant="contained" color="primary" fullWidth>Agregar Movimiento</Button>
    </form>
  );
};

export default MovimientosForm;
