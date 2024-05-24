import React from 'react';
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const ComprasTable = ({ compras, deleteCompra, updateCompra }) => {
  const [selectedCompra, setSelectedCompra] = React.useState(null);

  const handleSelectCompra = (compra) => {
    setSelectedCompra(compra);
  };

  const handleUpdateCompra = () => {
    if (selectedCompra) {
      updateCompra(selectedCompra);
    }
  };

  const handleDeleteCompra = (code) => {
    deleteCompra(code);
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Código</TableCell>
          <TableCell>Producto</TableCell>
          <TableCell>Cantidad</TableCell>
          <TableCell>Precio</TableCell>
          <TableCell>Acciones</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {compras.map((compra) => (
          <TableRow
            key={compra.code}
            onClick={() => handleSelectCompra(compra)}
            selected={selectedCompra && selectedCompra.code === compra.code}
          >
            <TableCell>{compra.code}</TableCell>
            <TableCell>{compra.product}</TableCell>
            <TableCell>{compra.quantity}</TableCell>
            <TableCell>{compra.price}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleUpdateCompra()}
                disabled={!selectedCompra}
              >
                Modificar
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteCompra(compra.code);
                }}
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

export default ComprasTable;
