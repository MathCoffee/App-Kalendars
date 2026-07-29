import React from 'react';
import { Link } from 'react-router-dom';
import MiniWidget from './MiniWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Estilos.css';
import { getImagePath } from '../funtions/funtions';

const Inicio = () => {
  return (
    <div className="container py-4">
      {/* Encabezado Principal Integrado (Inspiración App-kalendars + Identidad Visual Calendarios) */}
      <div className="d-flex align-items-center justify-content-center gap-4 mb-5 text-center flex-wrap">
        <img
          src={getImagePath('logo-tlacua.png')}
          alt="Logo Tlacuatzin"
          style={{ height: '70px', width: 'auto', objectFit: 'contain' }}
        />
        <div className="text-start">
          <h1 className="display-5 fw-bold text-warning mb-1" style={{ letterSpacing: '0.5px' }}>
            App-kalendars
          </h1>
          <p className="lead text-secondary mb-0" style={{ fontSize: '1.1rem' }}>
            Correlaciones Calendáricas Precoloniales | Autómata Multiplataforma
          </p>
        </div>
      </div>

      <div className="row g-4 align-items-center mb-5">
        {/* Columna Izquierda: Widget en Tiempo Real */}
        <div className="col-lg-5 d-flex justify-content-center">
          <div>
            <div className="text-center mb-2">
              <span className="badge bg-warning text-dark fw-bold px-3 py-2" style={{ fontSize: '0.85rem' }}>
                ⚡ FECHA Y HORA ACTUAL EN VIVO
              </span>
            </div>
            <MiniWidget />
          </div>
        </div>

        {/* Columna Derecha: Tarjetas de Acceso Clickables (Súper Discretas) */}
        <div className="col-lg-7">
          <div className="row g-3">

            {/* Tarjeta 1: Conversor */}
            <div className="col-md-6">
              <Link to="/conversor" className="text-decoration-none">
                <div 
                  className="card h-100 border-0 shadow-sm custom-hover-card" 
                  style={{ 
                    backgroundColor: '#1e293b', 
                    color: '#f8fafc', 
                    borderRadius: '14px', 
                    border: '1px solid rgba(212, 175, 55, 0.25)',
                    cursor: 'pointer'
                  }}
                >
                  <div className="card-body p-4 d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="card-title text-warning fw-bold mb-2">
                        <i className="bi bi-arrow-repeat me-2"></i> Conversor
                      </h5>
                      <p className="card-text text-secondary" style={{ fontSize: '0.85rem', lineHeight: '1.4' }}>
                        Convierte cualquier fecha y hora del calendario civil a su nombre Tonalli y Xihuitl según las cuentas Caso y Meza.
                      </p>
                    </div>
                    <div className="text-end mt-2">
                      <span className="text-warning fw-bold" style={{ fontSize: '0.85rem' }}>
                        Acceder →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Tarjeta 2: Inverso */}
            <div className="col-md-6">
              <Link to="/inverso" className="text-decoration-none">
                <div 
                  className="card h-100 border-0 shadow-sm custom-hover-card" 
                  style={{ 
                    backgroundColor: '#1e293b', 
                    color: '#f8fafc', 
                    borderRadius: '14px', 
                    border: '1px solid rgba(212, 175, 55, 0.25)',
                    cursor: 'pointer'
                  }}
                >
                  <div className="card-body p-4 d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="card-title text-warning fw-bold mb-2">
                        <i className="bi bi-search me-2"></i> Inverso
                      </h5>
                      <p className="card-text text-secondary" style={{ fontSize: '0.85rem', lineHeight: '1.4' }}>
                        Encuentra todas las fechas históricas o futuras que coinciden con un numeral y signo Tonalli o año Xihuitl específico.
                      </p>
                    </div>
                    <div className="text-end mt-2">
                      <span className="text-warning fw-bold" style={{ fontSize: '0.85rem' }}>
                        Acceder →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Tarjeta 3: Tablero */}
            <div className="col-md-6">
              <Link to="/tablero" className="text-decoration-none">
                <div 
                  className="card h-100 border-0 shadow-sm custom-hover-card" 
                  style={{ 
                    backgroundColor: '#1e293b', 
                    color: '#f8fafc', 
                    borderRadius: '14px', 
                    border: '1px solid rgba(212, 175, 55, 0.25)',
                    cursor: 'pointer'
                  }}
                >
                  <div className="card-body p-4 d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="card-title text-warning fw-bold mb-2">
                        <i className="bi bi-grid-3x3-gap-fill me-2"></i> Tablero de Glifos
                      </h5>
                      <p className="card-text text-secondary" style={{ fontSize: '0.85rem', lineHeight: '1.4' }}>
                        Explora la matriz gráfica completa de los 20 signos calendáricos, numerales e imágenes de códices prehispánicos.
                      </p>
                    </div>
                    <div className="text-end mt-2">
                      <span className="text-warning fw-bold" style={{ fontSize: '0.85rem' }}>
                        Acceder →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Tarjeta 4: Calculadora */}
            <div className="col-md-6">
              <Link to="/calculadora" className="text-decoration-none">
                <div 
                  className="card h-100 border-0 shadow-sm custom-hover-card" 
                  style={{ 
                    backgroundColor: '#1e293b', 
                    color: '#f8fafc', 
                    borderRadius: '14px', 
                    border: '1px solid rgba(212, 175, 55, 0.25)',
                    cursor: 'pointer'
                  }}
                >
                  <div className="card-body p-4 d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="card-title text-warning fw-bold mb-2">
                        <i className="bi bi-calculator me-2"></i> Calculadora
                      </h5>
                      <p className="card-text text-secondary" style={{ fontSize: '0.85rem', lineHeight: '1.4' }}>
                        Calcula la suma y resta de días, trecenas y ciclos del Tonalpohualli y Xiuhpohualli de forma inmediata.
                      </p>
                    </div>
                    <div className="text-end mt-2">
                      <span className="text-warning fw-bold" style={{ fontSize: '0.85rem' }}>
                        Acceder →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;