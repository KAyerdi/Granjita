import { Button } from '@mui/material';
import React, { useState } from 'react';
import StockModal from '../components/Stock/StockModal';
import StockTable from '../components/Stock/StockTable';


const Stock = () => {
  const [stocks, setStocks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);

  // Función para agregar un nuevo stock
  const addStock = (stock) => {
    setStocks([...stocks, stock]);
    setShowModal(false); // Ocultar el modal después de agregar un stock
  };

  // Función para eliminar un stock por su ID
  const deleteStock = (id) => {
    setStocks(stocks.filter((stock) => stock.id !== id));
  };

  // Función para modificar los detalles de un stock
  const updateStock = (updatedStock) => {
    setStocks(stocks.map((stock) =>
      stock.id === updatedStock.id ? updatedStock : stock
    ));
  };

  // Función para abrir el modal de edición con el stock seleccionado
  const handleEdit = (stock) => {
    setSelectedStock(stock);
    setShowModal(true);
  };

  // Función para cerrar el modal y resetear el stock seleccionado
  const handleCloseModal = () => {
    setSelectedStock(null);
    setShowModal(false);
  };

  return (
    <div className='p-4'>
      <h2 className='text-xl font-bold mb-4'>Stock</h2>

      <StockTable
        stocks={stocks}
        deleteStock={deleteStock}
        updateStock={updateStock}
        onEdit={handleEdit}
      />
      <StockModal
        isOpen={showModal}
        onClose={handleCloseModal}
        addStock={addStock}
        selectedStock={selectedStock}
        updateStock={updateStock}
      />
      <div className='mb-4'>
        <Button
          variant='contained'
          color='primary'
          onClick={() => setShowModal(true)}
        >
          Agregar Stock
        </Button>
      </div>
    </div>
  );
};

export default Stock;
