import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

import Menu from './components/pages/Menu';
import MenuLat from './components/pages/MenuLat';
import Inicio from './components/pages/Inicio';
import Conversor from './components/pages/Conversor';
import Inverso from './components/pages/Inverso';
import Tablero from './components/pages/Tablero';
import Toro from './components/pages/Toro';
import Calculadora from './components/pages/Calculadora';
import MiniWidget from './components/pages/MiniWidget';
import { getImagePath } from './components/funtions/funtions';
import { ThemeProvider, useTheme } from './context/ThemeContext';

function AppContent() {
  const location = useLocation();
  const esPaginaToro = location.pathname === '/toro';
  const esPaginaWidget = location.pathname === '/widget';
  const { theme } = useTheme();

  // Render de la barra de imagen decorativa prehispánica
  const BarraDecorativa = (
    <div
      style={{
        display: 'flex',
        width: '100%',
        margin: 0,
        padding: '5px 0',
        backgroundColor: theme === 'dark' ? '#121212' : '#ffffff',
        alignItems: 'center',
        justify: 'center',
        transition: 'background-color 0.3s ease'
      }}
    >
      <img
        src={getImagePath('prueba2.png')}
        alt="Barra decorativa prehispánica"
        style={{
          width: '100%',
          maxWidth: '2000px',
          minWidth: '100px',
          height: 'auto',
          objectFit: 'contain',
          objectPosition: 'center'
        }}
      />
    </div>
  );

  // Si se consulta en modo Widget puro / independiente
  if (esPaginaWidget) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          minHeight: '100vh',
          backgroundColor: theme === 'dark' ? '#0f172a' : '#f1f5f9',
          padding: '20px'
        }}
      >
        <MiniWidget />
      </div>
    );
  }

  return (
    <>
      {/* Menú lateral retráctil */}
      <MenuLat />

      {/* SI NO es la página de Toro, la barra decorativa aparece ARRIBA */}
      {!esPaginaToro && BarraDecorativa}

      {/* SI NO es la página de Toro, se muestra el menú superior */}
      {!esPaginaToro && <Menu />}

      {/* Contenedor principal de las vistas */}
      <div className={esPaginaToro ? 'layout-toro-container' : 'container py-3'}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/conversor" element={<Conversor />} />
          <Route path="/inverso" element={<Inverso />} />
          <Route path="/tablero" element={<Tablero />} />
          <Route path="/widget" element={<MiniWidget />} />
          <Route path="/toro" element={null} />
          <Route path="/calculadora" element={<Calculadora />} />
        </Routes>
      </div>

      {/* Toro pre-montado para renderizado 3D inmediato */}
      <div
        className="layout-toro-container"
        style={{ display: esPaginaToro ? 'block' : 'none' }}
      >
        <Toro />
      </div>

      {/* SI es la página de Toro, la barra decorativa aparece ABAJO */}
      {esPaginaToro && BarraDecorativa}

      <footer
        className="text-center mt-5 p-4"
        style={{
          borderTop: theme === 'dark' ? '1px solid #334155' : '1px solid #e2e8f0',
          color: theme === 'dark' ? '#94a3b8' : '#475569',
          fontSize: '0.9rem',
          transition: 'all 0.3s ease'
        }}
      >
        <p className="mb-0">
          Créditos. © 2026 TLACUATZIN CODEX LAB Investigación Transdisciplinaria de la Matemática en los Códices Prehispánicos de México. Todos los derechos reservados.
        </p>
      </footer>
    </>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
