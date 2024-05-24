import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/SideBar';
import Compras from './views/Compras';
import Customers from './views/Customers';
import Main from './views/Main';
import Movimientos from './views/Movimientos';
import Pagos from './views/Pagos';
import Proveedores from './views/Proveedores';
import Stock from './views/Stock';
import Ventas from './views/Ventas';


const App = () => {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <Header />
        <div className="main-content flex-1 flex">
          <Sidebar />
          <main className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/clientes" element={<Customers />} />
              <Route path="/proveedores" element={<Proveedores />} />
              <Route path="/ventas" element={<Ventas />} />
              <Route path="/compras" element={<Compras />} />
              <Route path="/pagos" element={<Pagos />} />
              <Route path="/movimientos" element={<Movimientos />} />
              <Route path="/stock" element={<Stock />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;

