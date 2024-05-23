// Ventas.jsx
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import VentasModal from '../components/VentasModal';
import AgregarVentaModal from '../components/AgregarVentaModal';

const Ventas = () => {
  const [ventas, setVentas] = useState([]);
  const [isVentasModalOpen, setIsVentasModalOpen] = useState(false);
  const [isAgregarVentaModalOpen, setIsAgregarVentaModalOpen] = useState(false);

  const handleAgregarVenta = (nuevaVenta) => {
    setVentas([...ventas, nuevaVenta]);
    setIsAgregarVentaModalOpen(false);
  };

  const handleOpenVentasModal = () => {
    setIsVentasModalOpen(true);
  };

  const handleCloseVentasModal = () => {
    setIsVentasModalOpen(false);
  };

  const handleOpenAgregarVentaModal = () => {
    setIsAgregarVentaModalOpen(true);
  };

  const handleCloseAgregarVentaModal = () => {
    setIsAgregarVentaModalOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpenVentasModal}>
        VENTAS
      </Button>
      <VentasModal
        isOpen={isVentasModalOpen}
        onClose={handleCloseVentasModal}
        ventas={ventas}
        onAgregarVenta={handleOpenAgregarVentaModal}
      />
      <AgregarVentaModal
        isOpen={isAgregarVentaModalOpen}
        onClose={handleCloseAgregarVentaModal}
        onAgregarVenta={handleAgregarVenta}
      />
    </div>
  );
};

export default Ventas;
