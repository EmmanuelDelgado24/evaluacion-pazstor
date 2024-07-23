declare const datos: {
    key: string;
    value: string[];
}[];
declare const responsabilidades: ({
    titulo: string;
    descripcion: string;
    medidor: string;
} | {
    titulo: string;
    descripcion: string;
    medidor: string[];
})[];
declare const perfil: {
    key: string;
    value: string[];
}[];
declare const competencias: {
    numero: string;
    competencia: string;
    valor: {
        key: string;
        value: string[];
    };
}[];
declare const competenciasComportamentales: {
    numero: string;
    comportamentales: string;
    valor: {
        key: string;
        value: string[];
    };
}[];
declare const autoridades: {
    autoridad: string;
}[];
declare const controlDocumento: {
    key: string;
    value: string[];
}[];
declare const controlCambios: {
    fecha: string;
    revision: string;
    descripcion: string;
}[];
export { datos, responsabilidades, perfil, competencias, autoridades, controlDocumento, controlCambios, competenciasComportamentales };
