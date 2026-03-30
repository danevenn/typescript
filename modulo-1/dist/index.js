"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math_utils_js_1 = require("./math-utils.js");
const dataset = [10, 12, 11, 15, 9, 100, 13, 11];
const limite = 50;
console.log("--- Análisis estadístico de datos ---");
console.log(`Datos originales: [${dataset.join(", ")}]`);
// Filtrar atípicos
const datosLimpios = (0, math_utils_js_1.filtrarAtipicos)(dataset, limite);
console.log(`Datos limpios (límite ${limite}): [${datosLimpios.join(", ")}]`);
// Media
const media = (0, math_utils_js_1.calcularMedia)(datosLimpios);
console.log(`Media: ${media !== null ? media.toFixed(2) : "N/A"}`);
// Mediana
const mediana = (0, math_utils_js_1.calcularMediana)(datosLimpios);
console.log(`Mediana: ${mediana}`);
// Casos límite
console.log("\n--- Prueba de casos límite (array vacío) ---");
const emptyArray = [];
console.log(`Media (vacío): ${(0, math_utils_js_1.calcularMedia)(emptyArray)}`);
console.log(`Mediana (vacío): ${(0, math_utils_js_1.calcularMediana)(emptyArray)}`);
console.log(`Filtrar atípicos (vacío): [${(0, math_utils_js_1.filtrarAtipicos)(emptyArray, 10).join(", ")}]`);
