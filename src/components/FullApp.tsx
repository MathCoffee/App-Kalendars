import React, { useState } from 'react';
import { getCalendarDay, SIGNS, getImageUrl, DayInfo } from '../core/calendarEngine';
import { Calendar as CalendarIcon, ArrowLeftRight, Grid, Info } from 'lucide-react';

interface FullAppProps {
  onMinimizeToWidget?: () => void;
}

export const FullApp: React.FC<FullAppProps> = ({ onMinimizeToWidget }) => {
  const todayStr = new Date().toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState<string>(todayStr);
  const [activeTab, setActiveTab] = useState<'comparison' | 'grid' | 'info'>('comparison');

  const mezaInfo = getCalendarDay(selectedDate, 'Meza');
  const casoInfo = getCalendarDay(selectedDate, 'Caso');

  return (
    <div style={{ maxWidth: '1150px', margin: '0 auto', padding: '0 16px 32px 16px' }}>
      
      {/* Barra Decorativa Superior del Programa Calendarios Original (prueba2.png) */}
      <div style={{
        display: 'flex',
        width: '100%',
        margin: '0 0 20px 0',
        padding: '10px 0',
        backgroundColor: '#121212',
        alignItems: 'center',
        justify: 'center',
        borderBottom: '1px solid var(--border-card)'
      }}>
        <img
          src={getImageUrl('prueba2.png')}
          alt="Barra decorativa prehispánica"
          style={{
            width: '100%',
            maxWidth: '2000px',
            maxHeight: '75px',
            objectFit: 'contain',
            objectPosition: 'center'
          }}
        />
      </div>

      {/* Bar de Encabezado Principal */}
      <header style={{
        display: 'flex',
        justify: 'space-between',
        alignItems: 'center',
        marginBottom: '28px',
        paddingBottom: '16px',
        borderBottom: '1px solid rgba(212, 175, 55, 0.2)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <img
            src={getImageUrl('logo-tlacua.png')}
            alt="Logo Tlacuatzin"
            style={{ height: '48px', width: 'auto', objectFit: 'contain' }}
          />
          <div>
            <h1 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '0.5px' }}>
              App-kalendars
            </h1>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Correlaciones Calendáricas Precoloniales | Autómata Multiplataforma
            </p>
          </div>
        </div>

        {/* Date Selector & Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Fecha:</span>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              style={{
                background: 'rgba(18, 25, 40, 0.9)',
                border: '1px solid var(--border-card)',
                color: 'var(--text-main)',
                padding: '8px 14px',
                borderRadius: '10px',
                fontFamily: 'inherit',
                fontSize: '0.9rem',
                outline: 'none',
                colorScheme: 'dark'
              }}
            />
          </div>

          <button
            onClick={() => setSelectedDate(todayStr)}
            className="btn-gold"
            style={{ padding: '8px 16px', fontSize: '0.85rem' }}
          >
            Hoy
          </button>

          {onMinimizeToWidget && (
            <button
              onClick={onMinimizeToWidget}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-card)',
                color: 'var(--text-muted)',
                padding: '8px 14px',
                borderRadius: '10px',
                cursor: 'pointer',
                fontSize: '0.85rem'
              }}
            >
              Modo Widget
            </button>
          )}
        </div>
      </header>

      {/* Pestañas de Navegación */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
        <button
          onClick={() => setActiveTab('comparison')}
          className="glass-card"
          style={{
            padding: '10px 20px',
            borderRadius: '12px',
            border: activeTab === 'comparison' ? '1px solid var(--border-gold)' : '1px solid transparent',
            background: activeTab === 'comparison' ? 'rgba(212, 175, 55, 0.15)' : 'rgba(18, 25, 40, 0.5)',
            color: activeTab === 'comparison' ? 'var(--text-main)' : 'var(--text-muted)',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <ArrowLeftRight size={18} /> Comparación Meza vs. Caso
        </button>

        <button
          onClick={() => setActiveTab('grid')}
          className="glass-card"
          style={{
            padding: '10px 20px',
            borderRadius: '12px',
            border: activeTab === 'grid' ? '1px solid var(--border-gold)' : '1px solid transparent',
            background: activeTab === 'grid' ? 'rgba(212, 175, 55, 0.15)' : 'rgba(18, 25, 40, 0.5)',
            color: activeTab === 'grid' ? 'var(--text-main)' : 'var(--text-muted)',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <Grid size={18} /> Matriz Tonalpohualli (260 días)
        </button>

        <button
          onClick={() => setActiveTab('info')}
          className="glass-card"
          style={{
            padding: '10px 20px',
            borderRadius: '12px',
            border: activeTab === 'info' ? '1px solid var(--border-gold)' : '1px solid transparent',
            background: activeTab === 'info' ? 'rgba(212, 175, 55, 0.15)' : 'rgba(18, 25, 40, 0.5)',
            color: activeTab === 'info' ? 'var(--text-main)' : 'var(--text-muted)',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <Info size={18} /> Fundamentos Históricos
        </button>
      </div>

      {/* Pestaña 1: Comparación Lado a Lado */}
      {activeTab === 'comparison' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          {/* Tarjeta Cuenta de Meza */}
          <CorrelationCard
            dayInfo={mezaInfo}
            title="Cuenta de Meza"
            subtitle="Fecha base: 12 de Marzo de 2026 (1-Cipactli, 1-Tochtli)"
            accentColor="#00e5ff"
          />

          {/* Tarjeta Cuenta de Caso */}
          <CorrelationCard
            dayInfo={casoInfo}
            title="Cuenta de Caso"
            subtitle="Fecha base: 13 de Agosto de 1521 (1-Coatl, 3-Calli)"
            accentColor="#d4af37"
          />
        </div>
      )}

      {/* Pestaña 2: Matriz Tonalpohualli */}
      {activeTab === 'grid' && (
        <div className="glass-card" style={{ padding: '24px' }}>
          <h3 style={{ marginBottom: '16px', color: '#d4af37', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            Los 20 Signos del Tonalpohualli (Imágenes Originales de Códices)
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', gap: '16px' }}>
            {SIGNS.map((sign) => {
              const isCurrentMeza = mezaInfo.sign.id === sign.id;
              const isCurrentCaso = casoInfo.sign.id === sign.id;

              return (
                <div
                  key={sign.id}
                  style={{
                    background: 'rgba(10, 14, 23, 0.7)',
                    borderRadius: '12px',
                    padding: '16px',
                    border: isCurrentMeza || isCurrentCaso ? '1px solid #d4af37' : '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'relative'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>#{sign.id + 1}</span>
                    <div style={{ display: 'flex', gap: '4px' }}>
                      {isCurrentMeza && <span style={{ fontSize: '0.65rem', background: 'rgba(0,229,255,0.2)', color: '#00e5ff', padding: '2px 6px', borderRadius: '4px' }}>Meza</span>}
                      {isCurrentCaso && <span style={{ fontSize: '0.65rem', background: 'rgba(212,175,55,0.2)', color: '#d4af37', padding: '2px 6px', borderRadius: '4px' }}>Caso</span>}
                    </div>
                  </div>

                  {/* PNG Original */}
                  <img
                    src={getImageUrl(sign.imageName)}
                    alt={sign.nahuatl}
                    style={{ height: '64px', width: 'auto', objectFit: 'contain', margin: '8px 0' }}
                  />

                  <div style={{ fontWeight: 700, textAlign: 'center', fontSize: '0.95rem', color: 'var(--text-main)' }}>{sign.nahuatl}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center' }}>{sign.spanish}</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--border-gold)', marginTop: '4px' }}>Nusavi: {sign.nusavi}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Pestaña 3: Información Histórica */}
      {activeTab === 'info' && (
        <div className="glass-card" style={{ padding: '32px' }}>
          <h2 style={{ color: '#d4af37', marginBottom: '16px' }}>Fundamentos y Correlaciones Calendáricas</h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '20px' }}>
            <div style={{ background: 'rgba(10, 14, 23, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #00e5ff' }}>
              <h3 style={{ color: '#00e5ff', marginBottom: '8px' }}>Cuenta de Meza</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                Basada en las investigaciones de Alicia Meza y Gustavo Vargas. Correlaciona el <strong>12 de marzo de 2026</strong> como el punto inicial <strong>1-Cipactli</strong> y año cargador <strong>1-Tochtli</strong>.
              </p>
            </div>

            <div style={{ background: 'rgba(10, 14, 23, 0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #d4af37' }}>
              <h3 style={{ color: '#d4af37', marginBottom: '8px' }}>Cuenta de Caso</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                Formulada por el Dr. Alfonso Caso. Correlaciona la caída de Tenochtitlan el <strong>13 de agosto de 1521</strong> con el día <strong>1-Coatl</strong> y el año <strong>3-Calli</strong>.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Pie de página similar al programa Calendarios original */}
      <footer style={{
        marginTop: '40px',
        textAlign: 'center',
        padding: '20px',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        color: 'var(--text-muted)',
        fontSize: '0.85rem'
      }}>
        <p>© 2026 TLACUATZIN CODEX LAB | Investigación Transdisciplinaria de la Matemática en los Códices Prehispánicos de México.</p>
      </footer>
    </div>
  );
};

// Tarjeta de representación de cada Correlación usando imágenes PNG (sin el signo '+')
const CorrelationCard: React.FC<{ dayInfo: DayInfo; title: string; subtitle: string; accentColor: string }> = ({ dayInfo, title, subtitle, accentColor }) => {
  return (
    <div className="glass-card" style={{ padding: '28px', borderTop: `4px solid ${accentColor}` }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
        <div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)' }}>{title}</h3>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{subtitle}</p>
        </div>
        <span style={{
          fontSize: '0.75rem',
          background: `${accentColor}20`,
          color: accentColor,
          border: `1px solid ${accentColor}40`,
          padding: '4px 10px',
          borderRadius: '12px',
          fontWeight: 700
        }}>
          Año: {dayInfo.yearName}
        </span>
      </div>

      {/* Render de Numeral PNG y Signo PNG (sin el signo '+') */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justify: 'center',
        gap: '32px',
        background: 'rgba(10, 14, 23, 0.7)',
        borderRadius: '16px',
        padding: '24px',
        margin: '20px 0',
        border: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        {/* Numeral PNG */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img
            src={getImageUrl(dayInfo.numeral.imageName)}
            alt={dayInfo.numeral.nahuatl}
            style={{ height: '95px', width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.6))' }}
          />
          <div style={{ fontSize: '0.85rem', color: accentColor, fontWeight: 800, marginTop: '8px' }}>
            Numeral {dayInfo.numeral.numeral} ({dayInfo.numeral.nahuatl})
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            Nusavi: {dayInfo.numeral.nusavi}
          </div>
        </div>

        {/* Signo PNG */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img
            src={getImageUrl(dayInfo.sign.imageName)}
            alt={dayInfo.sign.nahuatl}
            style={{ height: '95px', width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.6))' }}
          />
          <div style={{ fontSize: '0.85rem', color: accentColor, fontWeight: 800, marginTop: '8px' }}>
            Signo: {dayInfo.sign.nahuatl}
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            Nusavi: {dayInfo.sign.nusavi}
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '16px' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)' }}>
          {dayInfo.numeral.numeral} - {dayInfo.sign.nahuatl} ({dayInfo.sign.spanish})
        </div>
        <div style={{ fontSize: '0.85rem', color: accentColor, marginTop: '4px', fontWeight: 600 }}>
          Día {dayInfo.dayIndex260} de 260 en la cuenta del Tonalpohualli
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '0.85rem' }}>
        <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '10px 14px', borderRadius: '8px' }}>
          <span style={{ color: 'var(--text-muted)' }}>Rumbo:</span> <strong>{dayInfo.sign.direction}</strong>
        </div>
        <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '10px 14px', borderRadius: '8px' }}>
          <span style={{ color: 'var(--text-muted)' }}>Elemento:</span> <strong>{dayInfo.sign.element}</strong>
        </div>
      </div>
    </div>
  );
};
