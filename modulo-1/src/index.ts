import { calcularMedia, calcularMediana, filtrarAtipicos } from './math-utils.js';

const dataset = [10, 12, 11, 15, 9, 100, 13, 11];
const limite = 50;

console.log("--- Análisis estadístico de datos ---");
console.log(`Datos originales: [${dataset.join(", ")}]`);

// Filtrar atípicos
const datosLimpios = filtrarAtipicos(dataset, limite);
console.log(`Datos limpios (límite ${limite}): [${datosLimpios.join(", ")}]`);

// Media
const media = calcularMedia(datosLimpios);
console.log(`Media: ${media !== null ? media.toFixed(2) : "N/A"}`);

// Mediana
const mediana = calcularMediana(datosLimpios);
console.log(`Mediana: ${mediana}`);

// Casos límite
console.log("\n--- Prueba de casos límite (array vacío) ---");
const emptyArray: number[] = [];
console.log(`Media (vacío): ${calcularMedia(emptyArray)}`);
console.log(`Mediana (vacío): ${calcularMediana(emptyArray)}`);
console.log(`Filtrar atípicos (vacío): [${filtrarAtipicos(emptyArray, 10).join(", ")}]`);
