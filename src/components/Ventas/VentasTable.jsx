import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React from 'react';

const VentasTable = ({ ventas, deleteVenta, updateVenta }) => {
  const [selectedVenta, setSelectedVenta] = React.useState(null);

  const handleSelectVenta = (venta) => {
    setSelectedVenta(venta);
  };

  const handleUpdateVenta = () => {
    // Lógica para manejar la acción de modificar la venta seleccionada
    if (selectedVenta) {
      updateVenta(selectedVenta);
    }
  };

  const handleDeleteVenta = (code) => {
    // Lógica para manejar la acción de borrar una venta
    deleteVenta(code);
  };

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
        {ventas.map((venta) => (
          <TableRow
            key={venta.code}
            onClick={() => handleSelectVenta(venta)}
            selected={selectedVenta && selectedVenta.code === venta.code}
          >
            <TableCell>{venta.code}</TableCell>
            <TableCell>{venta.name}</TableCell>
            <TableCell>{venta.address}</TableCell>
            <TableCell>{venta.city}</TableCell>
            <TableCell>{venta.phone}</TableCell>
            <TableCell>{venta.cuit}</TableCell>
            <TableCell>{venta.balance}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleUpdateVenta()}
                disabled={!selectedVenta}
              >
                Modificar
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteVenta(venta.code);
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

export default VentasTable;
