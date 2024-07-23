export const datos: {
    key: string;
    value: string[];
}[];
export const responsabilidades: ({
    titulo: string;
    descripcion: string;
    medidor: string;
} | {
    titulo: string;
    descripcion: string;
    medidor: string[];
})[];
export const perfil: {
    key: string;
    value: string[];
}[];
export const competencias: {
    numero: string;
    competencia: string;
    valor: {
        key: string;
        value: string[];
    };
}[];
export const autoridades: string[];
export const controlDocumento: {
    key: string;
    value: string[];
}[];
export const controlCambios: {
    fecha: string;
    revision: string;
    descripcion: string;
}[];
export const competenciasComportamentales: {
    numero: string;
    comportamentales: string;
    valor: {
        key: string;
        value: string[];
    };
}[];
