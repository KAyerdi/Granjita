import { Button } from '@mui/material';
import React, { useState } from 'react';
import MovimientosModal from '../components/Movimientos/MovimientosModal'; // Asumiendo que tienes un componente Modal para los Movimientos
import MovimientosTable from '../components/Movimientos/MovimientosTable';

const Movimientos = () => {
  const [movimientos, setMovimientos] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Función para agregar un nuevo movimiento
  const addMovimiento = (movimiento) => {
    setMovimientos([...movimientos, movimiento]);
    setShowModal(false); // Ocultar el modal después de agregar un movimiento
  };

  // Función para eliminar un movimiento por su ID
  const deleteMovimiento = (id) => {
    setMovimientos(movimientos.filter((movimiento) => movimiento.id !== id));
  };

  // Función para modificar los detalles de un movimiento
  const updateMovimiento = (updatedMovimiento) => {
    setMovimientos(movimientos.map((movimiento) =>
      movimiento.id === updatedMovimiento.id ? updatedMovimiento : movimiento
    ));
  };

  return (
    <div className='p-4'>
      <h2 className='text-xl font-bold mb-4'>Movimientos</h2>
      <div className='mb-4'></div>
      <MovimientosTable
        movimientos={movimientos}
        deleteMovimiento={deleteMovimiento}
        updateMovimiento={updateMovimiento}
      />
      <MovimientosModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        addMovimiento={addMovimiento}
      />
      <Button
        variant='contained'
        color='primary'
        onClick={() => setShowModal(true)}
      >
        Agregar Movimiento
      </Button>
    </div>
  );
};

export default Movimientos;
