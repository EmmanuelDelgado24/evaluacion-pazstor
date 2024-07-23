export let ResponsabilidadesComponent: {
    new (): {
        responsabilidades: ({
            titulo: string;
            descripcion: string;
            medidor: string;
        } | {
            titulo: string;
            descripcion: string;
            medidor: string[];
        })[];
    };
};
