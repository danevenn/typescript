export interface RespuestaAPI<T> {
    data: T | null;
    status: number;
    message: string;
}

export class ApiClient {
    /**
     * Método genérico para simular la obtención de un recurso desde una API.
     * Devuelve una Promesa fuertemente tipada mediante RespuestaAPI<T>.
     */
    public obtenerRecurso<T>(endpoint: string): Promise<RespuestaAPI<T>> {
        return new Promise((resolve) => {
            // Simulamos el retraso de una llamada a base de datos / red
            setTimeout(() => {
                const simulacionRespuesta: RespuestaAPI<T> = {
                    data: null as unknown as T, // Simulación de los datos del tipo T
                    status: 200,
                    message: `Éxito al consultar el endpoint: ${endpoint}`
                };
                
                resolve(simulacionRespuesta);
            }, 1000);
        });
    }
}

// Exportamos una instancia genérica para uso en la aplicación
export const apiClient = new ApiClient();
