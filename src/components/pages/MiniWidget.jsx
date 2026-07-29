import React, { useState, useEffect } from 'react';
import { convertirTonalli, convertirTonalliMeza } from '../funtions/funtions';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Estilos.css';

export const MiniWidget = ({ onExpand, isStandalone = false }) => {
  const [now, setNow] = useState(new Date());
  const [cuentaMode, setCuentaMode] = useState('Meza');

  // Actualización en tiempo real del reloj
  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Formateador de fecha/hora legible
  const formattedDate = now.toLocaleDateString('es-ES', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  const formattedTime = now.toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });

  // Cálculos calendáricos en tiempo real
  const tonalliCaso = convertirTonalli(now);
  const tonalliMeza = convertirTonalliMeza(now);

  // Selección de datos según la cuenta activa
  const activeNumeral = cuentaMode === 'Meza' ? tonalliMeza?.numeroT : tonalliCaso?.numero;
  const activeSimbolo = cuentaMode === 'Meza' ? tonalliMeza?.signoT : tonalliCaso?.simbolo;
  const activeNumberImg = cuentaMode === 'Meza' ? tonalliMeza?.numberTonalImage : tonalliCaso?.numberImage;
  const activeSymbolImg = cuentaMode === 'Meza' ? tonalliMeza?.signTonalImage : tonalliCaso?.symbolImage;

  return (
    <div
      className="card shadow-lg border-0 text-center"
      style={{
        width: '320px',
        backgroundColor: '#1b2230',
        color: '#f8f9fa',
        borderRadius: '16px',
        border: '1px solid rgba(212, 175, 55, 0.35)',
        padding: '16px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6)',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}
    >
      {/* Encabezado del Widget */}
      <div className="d-flex justify-content-between align-items-center mb-2 pb-2 border-bottom border-secondary">
        <div className="text-start">
          <span className="badge bg-warning text-dark fw-bold px-2 py-1" style={{ fontSize: '0.7rem' }}>
            WIDGET EN VIVO
          </span>
          <div className="fw-bold text-capitalize mt-1" style={{ fontSize: '0.8rem', color: '#cbd5e1' }}>
            {formattedDate}
          </div>
        </div>
        <div className="text-end">
          <div className="fw-bold text-warning" style={{ fontSize: '0.95rem' }}>
            {formattedTime}
          </div>
        </div>
      </div>

      {/* Selector de Cuenta */}
      <div className="d-flex justify-content-center align-items-center gap-2 mb-3">
        <button
          onClick={() => setCuentaMode('Meza')}
          className={`btn btn-sm ${cuentaMode === 'Meza' ? 'btn-warning fw-bold' : 'btn-outline-secondary text-light'}`}
          style={{ fontSize: '0.75rem', borderRadius: '12px' }}
        >
          Cuenta Meza
        </button>
        <span style={{ color: '#d4af37' }}>⇄</span>
        <button
          onClick={() => setCuentaMode('Caso')}
          className={`btn btn-sm ${cuentaMode === 'Caso' ? 'btn-warning fw-bold' : 'btn-outline-secondary text-light'}`}
          style={{ fontSize: '0.75rem', borderRadius: '12px' }}
        >
          Cuenta Caso
        </button>
      </div>

      {/* Glifos de Numeral y Signo */}
      <div
        className="p-3 my-2 rounded-3 d-flex justify-content-center align-items-center gap-3"
        style={{
          background: 'radial-gradient(circle, rgba(30,41,59,0.9) 0%, rgba(15,23,42,0.95) 100%)',
          border: '1px solid rgba(212, 175, 55, 0.2)'
        }}
      >
        {activeNumberImg && (
          <div className="text-center">
            <img
              src={activeNumberImg}
              alt={activeNumeral?.español || ''}
              style={{ maxHeight: '75px', maxWidth: '75px', objectFit: 'contain' }}
            />
            <div className="fw-bold mt-1 text-warning" style={{ fontSize: '0.85rem' }}>
              {activeNumeral?.español} ({activeNumeral?.nahuatl})
            </div>
            <small style={{ fontSize: '0.65rem', color: '#94a3b8' }}>
              Nusavi: {activeNumeral?.nusavi}
            </small>
          </div>
        )}

        <div style={{ fontSize: '1.2rem', color: '#d4af37' }}>•</div>

        {activeSymbolImg && (
          <div className="text-center">
            <img
              src={activeSymbolImg}
              alt={activeSimbolo?.español || ''}
              style={{ maxHeight: '75px', maxWidth: '75px', objectFit: 'contain' }}
            />
            <div className="fw-bold mt-1 text-warning" style={{ fontSize: '0.85rem' }}>
              {activeSimbolo?.español} ({activeSimbolo?.nahuatl})
            </div>
            <small style={{ fontSize: '0.65rem', color: '#94a3b8' }}>
              Nusavi: {activeSimbolo?.nusavi}
            </small>
          </div>
        )}
      </div>

      {/* Información Resumida */}
      <div className="mt-2" style={{ fontSize: '0.75rem', color: '#cbd5e1' }}>
        <div>
          Signo Tonal: <strong className="text-light">{activeNumeral?.nahuatl} {activeSimbolo?.nahuatl}</strong>
        </div>
        {cuentaMode === 'Meza' && tonalliMeza?.startTime && (
          <small className="d-block text-secondary mt-1" style={{ fontSize: '0.65rem' }}>
            Inicio del día: {tonalliMeza.startTime}
          </small>
        )}
      </div>

      {/* Botón de Expansión (si está incrustado en la app principal) */}
      {onExpand && !isStandalone && (
        <button
          onClick={onExpand}
          className="btn btn-sm btn-outline-warning w-100 mt-3"
          style={{ fontSize: '0.75rem', borderRadius: '10px' }}
        >
          ← Abrir Aplicación Completa
        </button>
      )}
    </div>
  );
};

export default MiniWidget;
