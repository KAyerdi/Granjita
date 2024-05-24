import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React from 'react';

const MovimientosTable = ({ movimientos, deleteMovimiento, updateMovimiento }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Tipo</TableCell>
          <TableCell>Fecha</TableCell>
          <TableCell>Concepto</TableCell>
          <TableCell>Monto</TableCell>
          <TableCell>Stock</TableCell>
          <TableCell>Acciones</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {movimientos.map((movimiento) => (
          <TableRow key={movimiento.id}>
            <TableCell>{movimiento.tipo}</TableCell>
            <TableCell>{movimiento.fecha}</TableCell>
            <TableCell>{movimiento.concepto}</TableCell>
            <TableCell>{movimiento.monto}</TableCell>
            <TableCell>{movimiento.stock}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="primary"
                onClick={() => updateMovimiento(movimiento)}
              >
                Modificar
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => deleteMovimiento(movimiento.id)}
              >
                Borrar
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default MovimientosTable;
