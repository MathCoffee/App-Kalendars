export interface CalendarSign {
  id: number; // 0..19
  nahuatl: string;
  spanish: string;
  nusavi: string;
  imageName: string;
  element: string;
  direction: string;
}

export interface NumeralInfo {
  numeral: number; // 1..13
  nahuatl: string;
  nusavi: string;
  imageName: string;
}

export interface DayInfo {
  numeral: NumeralInfo;
  sign: CalendarSign;
  dayIndex260: number; // 1..260
  correlation: 'Caso' | 'Meza';
  yearName: string; // ej. "1-Tochtli"
  gregorianDate: string; // YYYY-MM-DD
}

// 20 Signos calendáricos del Tonalpohualli usando exactamente las imágenes del programa original Calendarios
export const SIGNS: CalendarSign[] = [
  { id: 0, nahuatl: 'Cipactli', spanish: 'Lagarto / Cocodrilo', nusavi: 'Quevui', imageName: 'lagarto.png', element: 'Tierra', direction: 'Oriente' },
  { id: 1, nahuatl: 'Ehécatl', spanish: 'Viento', nusavi: 'Chi', imageName: 'viento.png', element: 'Aire', direction: 'Norte' },
  { id: 2, nahuatl: 'Calli', spanish: 'Casa', nusavi: 'Cuau', imageName: 'casa.png', element: 'Tierra', direction: 'Poniente' },
  { id: 3, nahuatl: 'Cuetzpalin', spanish: 'Lagartija', nusavi: 'Q, Que', imageName: 'lagartija.png', element: 'Fuego', direction: 'Sur' },
  { id: 4, nahuatl: 'Coatl', spanish: 'Serpiente', nusavi: 'Yo', imageName: 'serpiente.png', element: 'Agua', direction: 'Oriente' },
  { id: 5, nahuatl: 'Miquiztli', spanish: 'Muerte', nusavi: 'Mahu', imageName: 'muerte.png', element: 'Tierra', direction: 'Norte' },
  { id: 6, nahuatl: 'Mazatl', spanish: 'Venado', nusavi: 'Cuaa', imageName: 'venado.png', element: 'Aire', direction: 'Poniente' },
  { id: 7, nahuatl: 'Tochtli', spanish: 'Conejo', nusavi: 'Sayu', imageName: 'conejo.png', element: 'Tierra', direction: 'Sur' },
  { id: 8, nahuatl: 'Atl', spanish: 'Agua', nusavi: 'Agua', imageName: 'agua.png', element: 'Agua', direction: 'Oriente' },
  { id: 9, nahuatl: 'Itzcuintli', spanish: 'Perro', nusavi: 'Hua', imageName: 'perro.png', element: 'Fuego', direction: 'Norte' },
  { id: 10, nahuatl: 'Ozomatli', spanish: 'Mono', nusavi: 'Ñuu', imageName: 'mono.png', element: 'Aire', direction: 'Poniente' },
  { id: 11, nahuatl: 'Malinalli', spanish: 'Hierba / Torcida', nusavi: 'Cuañe', imageName: 'hierba.png', element: 'Tierra', direction: 'Sur' },
  { id: 12, nahuatl: 'Acatl', spanish: 'Caña', nusavi: 'Huiyo', imageName: 'caña.png', element: 'Fuego', direction: 'Oriente' },
  { id: 13, nahuatl: 'Ocelotl', spanish: 'Jaguar', nusavi: 'Huidzu', imageName: 'jaguar.png', element: 'Tierra', direction: 'Norte' },
  { id: 14, nahuatl: 'Cuauhtli', spanish: 'Águila', nusavi: 'Sa', imageName: 'aguila.png', element: 'Aire', direction: 'Poniente' },
  { id: 15, nahuatl: 'Cozcacuauhtli', spanish: 'Zopilote Rey', nusavi: 'Cuii', imageName: 'zopilote.png', element: 'Tierra', direction: 'Sur' },
  { id: 16, nahuatl: 'Ollin', spanish: 'Movimiento', nusavi: 'Qhi', imageName: 'movimiento.png', element: 'Fuego', direction: 'Oriente' },
  { id: 17, nahuatl: 'Tecpatl', spanish: 'Pedernal / Cuchillo', nusavi: 'Cusi', imageName: 'pedernal.png', element: 'Tierra', direction: 'Norte' },
  { id: 18, nahuatl: 'Quiahuitl', spanish: 'Lluvia', nusavi: 'Co', imageName: 'lluvia.png', element: 'Agua', direction: 'Poniente' },
  { id: 19, nahuatl: 'Xochitl', spanish: 'Flor', nusavi: 'Huaco', imageName: 'flor.png', element: 'Tierra', direction: 'Sur' },
];

// 13 Numerales usando las imágenes 1.png - 13.png
export const NUMERALS: NumeralInfo[] = [
  { numeral: 1, nahuatl: 'Ce', nusavi: 'Ca, co', imageName: '1.png' },
  { numeral: 2, nahuatl: 'Ome', nusavi: 'Ca, co', imageName: '2.png' },
  { numeral: 3, nahuatl: 'Yei', nusavi: 'Co', imageName: '3.png' },
  { numeral: 4, nahuatl: 'Nahui', nusavi: 'Qui', imageName: '4.png' },
  { numeral: 5, nahuatl: 'Macuilli', nusavi: 'Q, qhu', imageName: '5.png' },
  { numeral: 6, nahuatl: 'Chicuace', nusavi: 'Ñu', imageName: '6.png' },
  { numeral: 7, nahuatl: 'Chicome', nusavi: 'Sa', imageName: '7.png' },
  { numeral: 8, nahuatl: 'Chicueyi', nusavi: 'Na', imageName: '8.png' },
  { numeral: 9, nahuatl: 'Chicnahui', nusavi: 'Q, qhu', imageName: '9.png' },
  { numeral: 10, nahuatl: 'Matlacti', nusavi: 'Si', imageName: '10.png' },
  { numeral: 11, nahuatl: 'Matlacti ihuan ce', nusavi: 'Si, sii', imageName: '11.png' },
  { numeral: 12, nahuatl: 'Matlacti ihuan ome', nusavi: 'Ca', imageName: '12.png' },
  { numeral: 13, nahuatl: 'Matlacti ihuan yei', nusavi: 'Si', imageName: '13.png' },
];

// Helper para obtener la URL de imágenes procesadas por Vite
export const getImageUrl = (imageName: string): string => {
  return new URL(`../assets/images/${imageName}`, import.meta.url).href;
};

// Helper para diferencia de días UTC entre dos fechas YYYY-MM-DD
export function daysBetween(dateStr1: string, dateStr2: string): number {
  const d1 = new Date(dateStr1 + 'T00:00:00Z');
  const d2 = new Date(dateStr2 + 'T00:00:00Z');
  const diffTime = d2.getTime() - d1.getTime();
  return Math.round(diffTime / (1000 * 3600 * 24));
}

// Calcular la posición exacta en el Tonalpohualli (1 a 260)
export function getDayIndex260(numeralVal: number, signIndex: number): number {
  for (let p = 1; p <= 260; p++) {
    const numP = ((p - 1) % 13) + 1;
    const signP = (p - 1) % 20;
    if (numP === numeralVal && signP === signIndex) {
      return p;
    }
  }
  return 1;
}

/**
 * Calcula la información calendárica utilizando las correlaciones exactas de Caso y Meza.
 */
export function getCalendarDay(targetDateStr: string, correlation: 'Caso' | 'Meza'): DayInfo {
  const targetYear = parseInt(targetDateStr.split('-')[0], 10);

  if (correlation === 'Caso') {
    const baseDate = '1521-08-13';
    const baseNumeralVal = 1;
    const baseSignIndex = 4; // Coatl (Serpiente)
    const diff = daysBetween(baseDate, targetDateStr);

    const numeralVal = (((baseNumeralVal - 1 + diff) % 13 + 13) % 13) + 1;
    const signIndex = ((baseSignIndex + diff) % 20 + 20) % 20;
    const sign = SIGNS[signIndex];
    const numeral = NUMERALS[numeralVal - 1];
    const dayIndex260 = getDayIndex260(numeralVal, signIndex);

    // Cálculo del año en la Rueda de 52 años: 1521 = 3-Calli. Para 2026 = 1-Tochtli
    const baseYear = 1521;
    const yearsDiff = targetYear - baseYear;
    const baseYearNum = 3; // 3-Calli
    const yearNumeral = (((baseYearNum - 1 + yearsDiff) % 13 + 13) % 13) + 1;
    const yearCargadores = ['Calli', 'Tochtli', 'Acatl', 'Tecpatl'];
    const cargador = yearCargadores[((yearsDiff % 4) + 4) % 4];

    return {
      numeral,
      sign,
      dayIndex260,
      correlation: 'Caso',
      yearName: `${yearNumeral}-${cargador}`,
      gregorianDate: targetDateStr,
    };
  } else {
    // Cuenta de Meza
    const baseDate = '2026-03-12';
    const baseNumeralVal = 1;
    const baseSignIndex = 0; // Cipactli (Lagarto)
    const diff = daysBetween(baseDate, targetDateStr);

    const numeralVal = (((baseNumeralVal - 1 + diff) % 13 + 13) % 13) + 1;
    const signIndex = ((baseSignIndex + diff) % 20 + 20) % 20;
    const sign = SIGNS[signIndex];
    const numeral = NUMERALS[numeralVal - 1];
    const dayIndex260 = getDayIndex260(numeralVal, signIndex);

    const baseYear = 2026;
    const yearsDiff = targetYear - baseYear;
    const baseYearNum = 1; // 1-Tochtli
    const yearNumeral = (((baseYearNum - 1 + yearsDiff) % 13 + 13) % 13) + 1;
    const yearCargadores = ['Tochtli', 'Acatl', 'Tecpatl', 'Calli'];
    const cargador = yearCargadores[((yearsDiff % 4) + 4) % 4];

    return {
      numeral,
      sign,
      dayIndex260,
      correlation: 'Meza',
      yearName: `${yearNumeral}-${cargador}`,
      gregorianDate: targetDateStr,
    };
  }
}
