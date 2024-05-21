import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import UserAvatar from './UserAvatar';

const Sidebar = () => {
  return (
    <nav className="bg-gray-100 p-4">
      <UserAvatar />
      <ul className="space-y-2">
        <li>
          <Link to="/usuario" className="text-blue-500 hover:underline">Usuario</Link>
        </li>
        <li>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Datos</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li>
                  <Link to="/clientes" className="text-blue-500 hover:underline">Clientes</Link>
                </li>
                <li>
                  <Link to="/proveedores" className="text-blue-500 hover:underline">Proveedores</Link>
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>
        </li>
        <li>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Movimientos</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li>
                  <Link to="/ventas" className="text-blue-500 hover:underline">Ventas</Link>
                </li>
                <li>
                  <Link to="/compras" className="text-blue-500 hover:underline">Compras</Link>
                </li>
                <li>
                  <Link to="/pagos" className="text-blue-500 hover:underline">Pagos</Link>
                </li>
                <li>
                  <Link to="/resumen-movimientos" className="text-blue-500 hover:underline">Resumen de Movimientos</Link>
                </li>
                <li>
                  <Link to="/stock" className="text-blue-500 hover:underline">Stock</Link>
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>
        </li>
        <li>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography>Consultas</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li>
                  <Link to="/ventas-consultas" className="text-blue-500 hover:underline">Ventas</Link>
                </li>
                <li>
                  <Link to="/compras-consultas" className="text-blue-500 hover:underline">Compras</Link>
                </li>
                <li>
                  <Link to="/stock-consultas" className="text-blue-500 hover:underline">Stock</Link>
                </li>
                <li>
                  <Link to="/saldos-consultas" className="text-blue-500 hover:underline">Saldos</Link>
                </li>
                <li>
                  <Link to="/ctas-ctes-consultas" className="text-blue-500 hover:underline">Ctas Ctes</Link>
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>
        </li>
        <li>
          <Link to="/sistema" className="text-blue-500 hover:underline">Sistema</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
