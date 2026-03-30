/**
 * Calcula la media aritmética de un array de números.
 * @param array Array de números.
 * @returns La media o null si el array está vacío.
 */
export function calcularMedia(array: number[]): number | null {
  if (array.length === 0) return null;
  const suma = array.reduce((acc, val) => acc + val, 0);
  return suma / array.length;
}

/**
 * Calcula la mediana de un array de números.
 * @param array Array de números.
 * @returns La mediana o null si el array está vacío.
 */
export function calcularMediana(array: number[]): number | null {
  if (array.length === 0) return null;
  const sorted = [...array].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  
  if (sorted.length % 2 === 0) {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  }
  
  return sorted[mid];
}

/**
 * Filtra los valores que superan un límite determinado (en valor absoluto).
 * @param array Array de números.
 * @param limite Valor máximo permitido (en valor absoluto).
 * @returns Nuevo array sin los valores atípicos.
 */
export function filtrarAtipicos(array: number[], limite: number): number[] {
  return array.filter((num) => Math.abs(num) <= limite);
}
