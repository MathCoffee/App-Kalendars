import React, { useState } from 'react';
import { getCalendarDay, getImageUrl } from '../core/calendarEngine';
import { Calendar, Layers } from 'lucide-react';

interface WidgetProps {
  initialDate?: string;
  onExpand?: () => void;
}

export const Widget: React.FC<WidgetProps> = ({ initialDate, onExpand }) => {
  const [correlation, setCorrelation] = useState<'Caso' | 'Meza'>('Meza');
  const todayStr = new Date().toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState<string>(initialDate || todayStr);

  const dayInfo = getCalendarDay(selectedDate, correlation);

  return (
    <div style={{
      width: '340px',
      padding: '20px',
      margin: '0 auto',
      userSelect: 'none'
    }} className="glass-card">
      {/* Header Decorativo */}
      <div style={{
        display: 'flex',
        justify: 'space-between',
        alignItems: 'center',
        marginBottom: '12px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Calendar size={18} color="#d4af37" />
          <span style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '1px', color: '#d4af37', textTransform: 'uppercase' }}>
            Kalendars Widget
          </span>
        </div>
        {onExpand && (
          <button 
            onClick={onExpand}
            title="Abrir App Completa"
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Layers size={16} />
          </button>
        )}
      </div>

      {/* Selector de Fecha y Correlación */}
      <div style={{ textAlign: 'center', marginBottom: '16px' }}>
        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
          {selectedDate === todayStr ? 'HOY' : selectedDate} ({dayInfo.yearName})
        </div>
        
        {/* Conmutador Meza / Caso */}
        <div className="toggle-container">
          <div 
            className={`toggle-option ${correlation === 'Meza' ? 'active' : ''}`}
            onClick={() => setCorrelation('Meza')}
          >
            Cuenta Meza
          </div>
          <div 
            className={`toggle-option ${correlation === 'Caso' ? 'active' : ''}`}
            onClick={() => setCorrelation('Caso')}
          >
            Cuenta Caso
          </div>
        </div>
      </div>

      {/* Tarjeta Principal con Imágenes Originales de Códices */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'rgba(10, 14, 23, 0.7)',
        borderRadius: '16px',
        padding: '16px',
        border: '1px solid rgba(212, 175, 55, 0.25)',
        position: 'relative'
      }}>
        {/* Badge Día 260 */}
        <div style={{
          fontSize: '0.75rem',
          background: 'rgba(0, 229, 255, 0.15)',
          color: 'var(--teal-accent)',
          border: '1px solid rgba(0, 229, 255, 0.3)',
          padding: '2px 10px',
          borderRadius: '12px',
          fontWeight: 700,
          marginBottom: '12px'
        }}>
          Día {dayInfo.dayIndex260} de 260 (Tonalpohualli)
        </div>

        {/* Par de Imágenes: Numeral PNG + Signo PNG (sin el signo '+') */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justify: 'center',
          gap: '24px',
          margin: '10px 0'
        }}>
          {/* Imagen del Numeral en Códice */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <img 
              src={getImageUrl(dayInfo.numeral.imageName)} 
              alt={dayInfo.numeral.nahuatl}
              style={{ height: '80px', width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.5))' }}
            />
            <span style={{ fontSize: '0.75rem', color: '#d4af37', fontWeight: 700, marginTop: '6px' }}>
              {dayInfo.numeral.numeral} ({dayInfo.numeral.nahuatl})
            </span>
          </div>

          {/* Imagen del Signo en Códice */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <img 
              src={getImageUrl(dayInfo.sign.imageName)} 
              alt={dayInfo.sign.nahuatl}
              style={{ height: '80px', width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.5))' }}
            />
            <span style={{ fontSize: '0.75rem', color: '#d4af37', fontWeight: 700, marginTop: '6px' }}>
              {dayInfo.sign.nahuatl}
            </span>
          </div>
        </div>

        {/* Título en Nahuatl y Español */}
        <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '8px', letterSpacing: '0.5px' }}>
          {dayInfo.numeral.numeral} - {dayInfo.sign.nahuatl}
        </div>
        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          {dayInfo.sign.spanish} (Nusavi: {dayInfo.sign.nusavi})
        </div>
      </div>

      {/* Footer Info */}
      <div style={{ 
        display: 'flex', 
        justify: 'space-between', 
        marginTop: '16px',
        fontSize: '0.75rem',
        color: 'var(--text-muted)',
        padding: '0 4px'
      }}>
        <span>Rumbo: <strong style={{ color: 'var(--text-main)' }}>{dayInfo.sign.direction}</strong></span>
        <span>Elemento: <strong style={{ color: 'var(--text-main)' }}>{dayInfo.sign.element}</strong></span>
      </div>
    </div>
  );
};
