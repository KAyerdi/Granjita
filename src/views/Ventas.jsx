import { Button, Container } from '@mui/material';
import React, { useState } from 'react';
import VentasForm from '../components/VentasForm';
import VentasModal from '../components/VentasModal';
import VentasTable from '../components/VentasTable';

const Ventas = () => {
  const [ventas, setVentas] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAgregarVenta = (nuevaVenta) => {
    setVentas([...ventas, nuevaVenta]);
    setShowForm(false); // Ocultar el formulario después de agregar una venta
  };

  const deleteVenta = (numeroVenta) => {
    setVentas(ventas.filter((venta) => venta.numeroVenta !== numeroVenta));
  };

  const updateVenta = (updatedVenta) => {
    setVentas(ventas.map((venta) =>
      venta.numeroVenta === updatedVenta.numeroVenta ? updatedVenta : venta
    ));
  };

  const handleOpenForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Ventas</h2>
        {showForm && <VentasForm addVenta={handleAgregarVenta} />}
        <VentasTable ventas={ventas} deleteVenta={deleteVenta} updateVenta={updateVenta} />
        <div className="mt-4 flex gap-4">
          <Button variant="contained" color="primary" onClick={handleOpenForm}>Agregar</Button>
          <Button variant="contained" color="primary" onClick={handleOpenModal}>Modificar</Button>
          <Button variant="contained" color="primary">Borrar</Button>
        </div>
      </div>
      {isModalOpen && (
        <VentasModal isOpen={isModalOpen} onClose={handleCloseModal}>
          <VentasTable ventas={ventas} deleteVenta={deleteVenta} updateVenta={updateVenta} />
          <div className="mt-4 flex gap-4">
            <Button variant="contained" color="primary" onClick={handleOpenForm}>Agregar</Button>
            <Button variant="contained" color="primary" onClick={handleCloseModal}>Cerrar</Button>
          </div>
        </VentasModal>
      )}
    </Container>
  );
};

export default Ventas;
