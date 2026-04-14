export interface Asignatura {
    readonly id: string;
    nombre: string;
    creditos: number;
}

export interface Estudiante {
    readonly id: string;
    nombre: string;
    apellidos: string;
    edad: number;
    email: string;
}

export interface MatriculaActiva {
    tipo: "ACTIVA";
    asignaturas: Asignatura[];
}

export interface MatriculaSuspendida {
    tipo: "SUSPENDIDA";
    motivo: string;
}

export interface MatriculaFinalizada {
    tipo: "FINALIZADA";
    notaMedia: number;
}

export type EstadoMatricula = MatriculaActiva | MatriculaSuspendida | MatriculaFinalizada;

export function generarReporte(estado: EstadoMatricula): string {
    switch (estado.tipo) {
        case "ACTIVA":
            return `Matrícula Activa: El estudiante cursa ${estado.asignaturas.length} asignaturas.`;
        case "SUSPENDIDA":
            return `Matrícula Suspendida. Motivo: ${estado.motivo}.`;
        case "FINALIZADA":
            return `Matrícula Finalizada con una nota media de ${estado.notaMedia.toFixed(2)}.`;
        default:
            const _exhaustiveCheck: never = estado;
            return `Estado de matrícula desconocido.`;
    }
}
