import { Button } from '@mui/material';
import React, { useState } from 'react';
import PagosForm from '../components/Pagos/PagosForm';
import PagosModal from '../components/Pagos/PagosModal';
import PagosTable from '../components/Pagos/PagosTable';

const Pagos = () => {
  const [pagos, setPagos] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedPago, setSelectedPago] = useState(null);

  const handleAddPago = (nuevoPago) => {
    setPagos([...pagos, nuevoPago]);
    setShowForm(false);
  };

  const handleDeletePago = (id) => {
    setPagos(pagos.filter((pago) => pago.id !== id));
  };

  const handleEditPago = (pagoActualizado) => {
    setPagos(pagos.map((pago) =>
      pago.id === pagoActualizado.id ? pagoActualizado : pago
    ));
  };

  const handleSelectPago = (pago) => {
    setSelectedPago(pago);
  };

  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Pagos</h2>
      {showForm ? (
        <PagosForm addPago={handleAddPago} />
      ) : (
        <PagosTable
          pagos={pagos}
          handleSelectPago={handleSelectPago}
          handleDeletePago={handleDeletePago}
          handleEditPago={handleEditPago}
        />
      )}
      <div className="mt-4 flex gap-4">
        <Button
          variant="contained"
          color="primary"
          onClick={toggleFormVisibility}
        >
          {showForm ? "Cancelar" : "Agregar"}
        </Button>
        <Button variant="contained" color="primary">Modificar</Button>
        <Button variant="contained" color="primary">Borrar</Button>
      </div>
      <PagosModal
        isOpen={!!selectedPago}
        onClose={() => setSelectedPago(null)}
        pagos={pagos}
        handleAdd={handleAddPago}
        handleEdit={handleEditPago}
        handleDelete={handleDeletePago}
      />
    </div>
  );
};

export default Pagos;
