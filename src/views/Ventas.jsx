// Ventas.jsx
import React, { useState } from 'react';
import VentasTable from '../components/VentasTable';
import VentasForm from '../components/VentasForm';
import VentasModal from '../components/VentasModal';
import { Container, Button } from '@mui/material';

const Ventas = () => {
  const [ventas, setVentas] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleAgregarVenta = (nuevaVenta) => {
    setVentas([...ventas, nuevaVenta]);
    setIsFormOpen(false);
  };

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <main>
        <Button variant="contained" onClick={handleOpenModal}>
          VENTAS
        </Button>
        {isModalOpen && (
          <VentasModal isOpen={isModalOpen} onClose={handleCloseModal}>
            <VentasTable ventas={ventas} />
            <div className="mt-4 flex gap-4">
              <Button variant="contained" color="primary" onClick={handleOpenForm}>AGREGAR</Button>
              <Button variant="contained" color="primary">BORRAR</Button>
              <Button variant="contained" color="primary" onClick={handleCloseModal}>SALIR</Button>
            </div>
          </VentasModal>
        )}
        {isFormOpen && (
          <VentasForm 
            isOpen={isFormOpen} 
            onClose={handleCloseForm} 
            onAgregarVenta={handleAgregarVenta} 
          />
        )}
      </main>
    </Container>
  );
};

export default Ventas;
