import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React from 'react';

const StockTable = ({ stockItems, deleteStock, updateStock }) => {
  // Verificar si stockItems existe y es un array
  if (!stockItems || !Array.isArray(stockItems) || stockItems.length === 0) {
    return <div>No hay datos de stock disponibles.</div>;
  }
  
  const [selectedStock, setSelectedStock] = React.useState(null);

  const handleSelectStock = (stock) => {
    setSelectedStock(stock);
  };

  const handleUpdateStock = () => {
    if (selectedStock) {
      updateStock(selectedStock);
    }
  };

  const handleDeleteStock = (id) => {
    deleteStock(id);
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Nombre</TableCell>
          <TableCell>Descripción</TableCell>
          <TableCell>Cantidad</TableCell>
          <TableCell>Precio</TableCell>
          <TableCell>Acciones</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {stockItems.map((stock) => (
          <TableRow
            key={stock.id}
            onClick={() => handleSelectStock(stock)}
            selected={selectedStock && selectedStock.id === stock.id}
          >
            <TableCell>{stock.id}</TableCell>
            <TableCell>{stock.name}</TableCell>
            <TableCell>{stock.description}</TableCell>
            <TableCell>{stock.quantity}</TableCell>
            <TableCell>{stock.price}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="primary"
                onClick={(e) => {
                  e.stopPropagation();
                  handleUpdateStock();
                }}
                disabled={!selectedStock}
              >
                Modificar
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteStock(stock.id);
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

export default StockTable;
