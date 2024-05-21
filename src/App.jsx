import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/SideBar';
import Customers from './views/Customers';
import Proveedores from './views/Proveedores';

const App = () => {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <Header />
        <div className="main-content flex-1 flex">
          <Sidebar />
          <main className="flex-1 p-4">
            <Routes>
              <Route path="/clientes" element={<Customers />} />
              <Route path="/proveedores" element={<Proveedores />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;

