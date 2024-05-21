import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React from 'react';

const ProveedoreTable = ({ proveedores, deleteProveedor, updateProveedor }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Código</TableCell>
          <TableCell>Nombre</TableCell>
          <TableCell>Dirección</TableCell>
          <TableCell>Localidad</TableCell>
          <TableCell>Teléfono</TableCell>
          <TableCell>CUIT</TableCell>
          <TableCell>Saldo</TableCell>
          <TableCell>Acciones</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {proveedores.map((proveedor) => (
          <TableRow key={proveedor.code}>
            <TableCell>{proveedor.code}</TableCell>
            <TableCell>{proveedor.name}</TableCell>
            <TableCell>{proveedor.address}</TableCell>
            <TableCell>{proveedor.city}</TableCell>
            <TableCell>{proveedor.phone}</TableCell>
            <TableCell>{proveedor.cuit}</TableCell>
            <TableCell>{proveedor.balance}</TableCell>
            <TableCell>
              <Button variant="contained" color="primary" onClick={() => updateProveedor(proveedor)}>Modificar</Button>
              <Button variant="contained" color="secondary" onClick={() => deleteProveedor(proveedor.code)}>Borrar</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ProveedoreTable;
