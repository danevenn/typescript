# Documentación de Arquitectura y Modelo de Datos

## Modelo de Dominio

### Elección de Interfaces frente a Types
En TypeScript, tanto `interface` como `type` permiten definir estructuras de objetos, pero se han elegido **interfaces** para entidades principales como `Estudiante` y `Asignatura` por los siguientes motivos:
- **Extensibilidad:** Las interfaces soportan "declaration merging", lo que significa que pueden ser reabiertas y ampliadas en diferentes partes de la aplicación (muy útil si un módulo futuro añade más propiedades al `Estudiante`).
- **Claridad e Intención:** Por convención en Programación Orientada a Objetos, las interfaces funcionan como contratos rígidos ideales para entidades del dominio de datos.

Se reservó el uso de `type` principalmente para definir nuestra **Unión Discriminada** (`EstadoMatricula`), ya que las `interfaces` no pueden expresar directamente este patrón de exclusión mutua de varias formas a partir de una propiedad clave textual (en este caso el atributo `tipo`).

### Unión Discriminada (`EstadoMatricula`)
Utilizamos una técnica avanzada de tipado estricto uniendo varias interfaces (`MatriculaActiva`, `MatriculaSuspendida`, `MatriculaFinalizada`) bajo una clave común llamada `tipo` (el discriminador). 
- Permite que el compilador infiera automáticamente el contexto exacto (ej. saber que `notaMedia` solo existe si el tipo es `"FINALIZADA"`).
- Otorga máxima seguridad en sentencias como el `switch`, forzando a que las comprobaciones de estado gestionen exactamente y sin lugar a fallos todos los dominios esperados (comprobación exhaustiva usando iteración `never`).

## Lógica del Servicio ApiClient

### Uso de Genéricos `<T>`
El método `obtenerRecurso<T>(endpoint: string)` emplea un genérico que se pasa también a la interfaz `RespuestaAPI<T>`. Las razones detrás de este diseño son:
- **Abstracción Total:** Permite reusar una única función de red para consultar cualquier entidad de negocio sin conocer su forma interior de antemano. Podría ser `obtenerRecurso<Estudiante>` o `obtenerRecurso<Asignatura[]>`.
- **Estandarización:** Al envolver `T` en la respuesta `RespuestaAPI<T>`, forzamos a que **toda** petición devuelva una estructura predictible con los campos de apoyo comunes (`data`, `status`, `message`).
- **Detección temprana en diseño:** Quien consuma la promesa gozará de auto-completado y comprobación de tipos inteligente durante la misma compilación, eliminando posibles errores en tiempo de ejecución.
