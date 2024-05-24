import React from 'react';
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const PagosTable = ({ pagos, handleSelectPago }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Fecha</TableCell>
          <TableCell>Cliente/Proveedor</TableCell>
          <TableCell>Concepto</TableCell>
          <TableCell>Importe</TableCell>
          <TableCell>Acciones</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {pagos.map((pago) => (
          <TableRow key={pago.id} onClick={() => handleSelectPago(pago)}>
            <TableCell>{pago.id}</TableCell>
            <TableCell>{pago.fecha}</TableCell>
            <TableCell>{pago.clienteProveedor}</TableCell>
            <TableCell>{pago.concepto}</TableCell>
            <TableCell>{pago.importe}</TableCell>
            <TableCell>
              <Button variant="contained" color="primary">Modificar</Button>
              <Button variant="contained" color="secondary">Borrar</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PagosTable;
