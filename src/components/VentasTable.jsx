// VentasTable.jsx
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const VentasTable = ({ ventas }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Fecha</TableCell>
          <TableCell>Número de Venta</TableCell>
          <TableCell>Código</TableCell>
          <TableCell>Apellido y Nombre</TableCell>
          <TableCell>Cantidad de Maples</TableCell>
          <TableCell>Cantidad de Docenas</TableCell>
          <TableCell>Precio Unitario</TableCell>
          <TableCell>Importe</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {ventas.map((venta, index) => (
          <TableRow key={index}>
            <TableCell>{venta.fecha}</TableCell>
            <TableCell>{venta.numeroVenta}</TableCell>
            <TableCell>{venta.codigo}</TableCell>
            <TableCell>{venta.nombre}</TableCell>
            <TableCell>{venta.cantidadMaples}</TableCell>
            <TableCell>{venta.cantidadDocenas}</TableCell>
            <TableCell>{venta.precioUnitario}</TableCell>
            <TableCell>{venta.importe}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default VentasTable;
