export interface DataItem {
  key: string;
  value: string[];
}

export type DATA = DataItem[];

const datos: DATA = [
    {
      key: 'Puesto supervisados directamente',
      value: [
              'CHIEF EXECUTIVE OFFICER - CEO',
              'CHIEF OPERANTING OFFICER - COO',
              'CHIEF FINANCIAL OFFICE - CFO',
              'BUSSINES MANAGER',
              'SHOE FACTORY MANAGER',
              'LÍDER DESARROLLO TÉCNICO',
              'LÍDER MODELADO Y PATRONAJE',
              'LÍDER CECOM',
              'LÍDER CEDIS',
              'LÍDER INGENIERÍA',
              'LÍDER PRODUCCIÓN',
              'LÍDER RECURSOS HUMANOS',
              'LÍDER CALIDAD',
              'LÍDER HARDWARE Y SEGURIDAD PATRIMONIAL',
              'EJECUTIVO DE CLIENTE COPPEL-ANDREA',
              'EJECUTIVO DE CLIENTE VARIOS',
              'EJECUTIVO DE CLIENTE STEVE MADDEN',
              'COORD. MODELISTAS',
              'MODELISTA',
              'COORD. MODELISTAS',
              'MODELISTA',
              'COOR. COSTOS Y ESPECIFIACIONES DE PRODUCCIÓN',
              'COOR. DISEÑO CONCEPTUAL',
              'COOR. DE MONTADO',
              'DISEÑADORA',
              'SUP. DE ALMACEN',
              'SUP. CEDIS',
              'ING. IMPLEMENTACIÓN Y PROCESOS',
              'ING. PROGRAMACIÓN Y NOMINA',
              'ING DE PROCESOS',
              'MECANICO',
              'SUPERVISOR DE CORTE-COORDINADO',
              'SUPERVISOR DE PESPUNTE',
              'SUP. KANBAN',
              'SUPERVISOR DE AVIOS',
              'SUPERVISOR DE MONTADO-ADORNO',
              'DOCTOR',
              'PRACTICANTE',
              'AUXILIAR DE DESARROLLO DE MATERIALES',
              'AUXILIAR FABRICACIÓN MUESTRAS',
              'AUX.CARDEX CECOM',
              'CHOFER CEDIS',
              'AUX. EMBARQUE CEDIS',
              'TÉCNICO IMPLEMENTADOR',
              'AUXILIAR DE RH',
              'AUX. DE PESPUNTE',
              'AUXILIAR DE KANBAN',
              'AUXILIAR EMBARQUE FABRICA',
              'AUX RH',
              'RECEPCIONISTA FABRICA',
              'VIGILANTE',
              'INSPECTOR DE CALIDAD',
              'OP. EMBARQUE CEDIS',
              'OP. MUESTRAS',
              'OP. CECOM',
              'CHOFER',
              'OP. ASEO',
              'OP. COMODÍN'
      ],
    },
  ];
  
  const responsabilidades = [
    {
      titulo: '3.1 LIBERACIÓN DE LA FACTIBILIDAD',
      descripcion:
        'Recibir del GERENTE DE ADMINISTRACIÓN DE PEDIDOS Y SERVICIO AL CLIENTE los compromisos pactados con los clientes, analizar la factibilidad, establecer los recursos necesarios para la producción como, cantidad de personal necesario, herramentales para la producción, maquinaria, equipos e instalaciones.',
      medidor:
        'Estudio de la factibilidad para la fabricación, documentado y firmado por todas las partes involucradas.Factibilidad en números %',
    },
    {
      titulo: '3.2 PAQUETE TÉCNICO',
      descripcion:
        'Recibir del proceso INGENIERIA DE DESARROLLO el paquete técnico completo para iniciar la producción de los nuevos modelos.',
      medidor:
        'Validación y firma del check list del paquete técnico disponible para iniciar la producción. Paquete entregado conforme a fecha programada.',
    },
    {
      titulo: '3.3 PRODUCTOS LIBERADOS PDP',
      descripcion:
        'Validar, planear que los tiempos del proceso de implementación en el PDP se cumplan en tiempo con el objetivo de hacer factibles los nuevos proyectos en calidad, en tiempo, forma y la definición de los procesos, conforme requiere el GERENTE DE ADMINISTRACIÓN DE PEDIDOS Y SERVICIO AL CLIENTE fechas de entregas pactadas con los clientes.',
      medidor:
        'Indicador de puntualidad de PDP implementación Versus Análisis de Factibilidad. Indicador de puntualidad PDP.',
    },
    {
      titulo: '3.4 PROGRAMACIÓN DE LA SEMANA',
      descripcion:
        'Actuar sobre el proceso de SEMANA DE PROGRAMACIÓN para que se elabore la programación de las fábricas, contemplando todos los documentos de seguimiento de la producción, abastecimiento de los materiales, herramentales, maquinaria, fecha de entrega, Etc.',
      medidor:
        'Cumplimiento de los programas semanales y cierre de pedidos = < 3 programas abiertos. Pares producidos Versus pares programados',
    },
    {
      titulo: '3.5 EFICIENCIA',
      descripcion:
        'Medir diariamente el desempeño (eficiencias) de los procesos, asegurar y controlar los resultados de esta medición para generar el presupuesto compatible con los sueldos a pagar. Supervisar y validar la correcta asignación de salarios de acuerdo con las categorías establecidas por la empresa y la gestión de las plantillas de producción. (ESTRUCTURA DE PUESTOS Y FUNCIONES OPERATIVAS)',
      medidor:
        'Medir y gestionar las deviaciones en la nómina conforme a la política establecida. Pares producidos Versus Eficiencia lograda %',
    },
    {
      titulo: '3.6 RUTINAS DEL SUPERVISOR',
      descripcion:
        'Auditar los procesos de fabricación en conjunto con el líder del área Rutina del Supervisor y corroborar, en el documento de Rutinas del Supervisor que los procesos sean de acuerdo con lo implementado, conforme a las especificaciones de proceso y la muestra física.',
        medidor: [
          'Aseguramiento de los procesos de fabricación y registro en el documento Rutinas del Supervisor. Cumplimiento de los % Establecidos',
          '1) Calidad 40%',
          '2) Meta de Producción 30%',
          '3) Programas abiertos =< 3 20%',
          '4) Orden y Limpieza 10%'
        ]
    },
  
    {
      titulo: '3.7 MEJORA CONTINUA',
      descripcion:
        'Actuar continuamente como interlocutor para las acciones correctivas conforme sean necesarias para mejorar la satisfacción del cliente en todo lo que se refiere al proceso y mejora de la calidad, costos y productividad.',
      medidor:
        'Gestionar los procesos de mejora y nuevos proyectos para mejorar la satisfacción del cliente. Acciones correctivas cerradas, Círculos de Calidad cerrados.',
    },
  ];
  
  const perfil = [
    {key: 'NIVEL ACADEMICO', value: [
      'Maestría', 'Licenciatura/Ingeniería', 'TSU', 'Preparatoria/ Técnico',
      'Secundaria','Preferentemente Primaria'
    ]},
    
    {key: 'EXPERIENCIA', value: [
      'Más de 5 años',
      '2 a 5 años',
      '1 a 2 años',
      '6 meses a 1 año',
      'Hasta 6 meses',
      'Sin experiencia'
    ]},
      
    {key: 'IDIOMAS', value: [
      'Inglés Fluido',
      'Inglés Conversacional',
      'Inglés Técnico',
      'Italiano',
      'Alemán',
      'Chino Mandarín',
      'Francés',
    ]},
  
    {key: 'LICENCIA', value: [
               'Tipo A',
               'Tipo B',
               'Tipo C'
               
    ]},
  ];
  
  const competencias = [
    { numero: '1', competencia: 'Planeación, programación y control de la producción',
      valor: {key: 'Puntuacion', value: [
      '1',
      '3',
      '5',
    ]}, },
  
    { numero: '2', competencia: 'Administracion de proyectos PDP',
      valor: {key: 'Puntuacion', value: [
      '1',
      '3',
      '5',
    ]}, },
  
    { numero: '3', competencia: 'Cálculo de consumos de los materiales directos e indirectos',
      valor: {key: 'Puntuacion', value: [
      '1',
      '3',
      '5',
    ]}, },
  
    { numero: '4', competencia: 'Cálculo de costos de la mano de obra',
      valor: {key: 'Puntuacion', value: [
      '1',
      '3',
      '5',
    ]}, },
  
    { numero: '5', competencia: 'Cálculo de cotso de la materia prima',
      valor: {key: 'Puntuacion', value: [
      '1',
      '3',
      '5',
    ]}, },
  
    { numero: '6', competencia: 'Eliminación de los 7 desperdicios de la manufactura',
      valor: {key: 'Puntuacion', value: [
      '1',
      '3',
      '5',
    ]}, },
  
    { numero: '7', competencia: 'Sistema de gestión de la calidad',
      valor: {key: 'Puntuacion', value: [
      '1',
      '3',
      '5',
    ]}, },
  
    { numero: '8', competencia: 'Implementación de nuevos productos en la producción',
      valor: {key: 'Puntuacion', value: [
      '1',
      '3',
      '5',
    ]}, },
  
    { numero: '9', competencia: 'Lay out - proyectos de distribución física en la planta',
      valor: {key: 'Puntuacion', value: [
      '1',
      '3',
      '5',
    ]}, },
  
    { numero: '10', competencia: 'Lean Manufacturing',
      valor: {key: 'Puntuacion', value: [
      '1',
      '3',
      '5',
    ]}, },
  
    { numero: '11', competencia: 'MASP - Metodología para Análisis y Solución de Problemas',
      valor: {key: 'Puntuacion', value: [
      '1',
      '3',
      '5',
    ]}, },
  
    { numero: '12', competencia: 'Balanceo de líneas de producción',
      valor: {key: 'Puntuacion', value: [
      '1',
      '3',
      '5',
    ]}, },
  ];
  
  const competenciasComportamentales = [
    { numero: '1', comportamentales: 'Liderazgo', valor: { key: 'Puntuacion', value: ['1', '3', '5'] } },
    { numero: '1', comportamentales: 'Organización y planeación', valor: { key: 'Puntuacion', value: ['1', '3', '5'] } },
    { numero: '2', comportamentales: 'Comunicación', valor: { key: 'Puntuacion', value: ['1', '3', '5'] } },
    { numero: '3', comportamentales: 'Toma de decisiones', valor: { key: 'Puntuacion', value: ['1', '3', '5'] } },
    { numero: '4', comportamentales: 'Administración del tiempo', valor: { key: 'Puntuacion', value: ['1', '3', '5'] } },
    { numero: '5', comportamentales: 'Lograr resultados', valor: { key: 'Puntuacion', value: ['1', '3', '5'] } }
  ];
  
  const autoridades = [
     '1. MODIFICAR METAS DE PRODUCCIÓN.',
     '2. MODIFICAR TIEMPOS DE OPERACIONES Y COSTOS.',
     '3. REACOMODAR PERSONAL OPERATIVO.',
     '4. AUTORIZAR CAMBIOS DE CATEGORÍA DE SUELDOS.',
     '5. ACEPTAR O RECHAZAR CANDIDATOS A PUESTOS DE INGENIERÍA.',
     '6. DETENER PROCESOS DE FABRICACIÓN FUERA DE ESPECIFICACIÓN.'
  ];
  
  
  const controlDocumento = [
    { key: 'elaboro', value: [         
      'CHIEF EXECUTIVE OFFICER - CEO',
      'CHIEF OPERANTING OFFICER - COO',
      'CHIEF FINANCIAL OFFICE - CFO',
      'BUSSINES MANAGER',
      'SHOE FACTORY MANAGER',
      'LÍDER DESARROLLO TÉCNICO',
      'LÍDER MODELADO Y PATRONAJE',
      'LÍDER CECOM',
      'LÍDER CEDIS',
      'LÍDER INGENIERÍA',
      'LÍDER PRODUCCIÓN',
      'LÍDER RECURSOS HUMANOS',
      'LÍDER CALIDAD',
      'LÍDER HARDWARE Y SEGURIDAD PATRIMONIAL',
      'EJECUTIVO DE CLIENTE COPPEL-ANDREA',
      'EJECUTIVO DE CLIENTE VARIOS',
      'EJECUTIVO DE CLIENTE STEVE MADDEN',
      'COORD. MODELISTAS',
      'MODELISTA',
      'COORD. MODELISTAS',
      'MODELISTA',
      'COOR. COSTOS Y ESPECIFIACIONES DE PRODUCCIÓN',
      'COOR. DISEÑO CONCEPTUAL',
      'COOR. DE MONTADO',
      'DISEÑADORA',
      'SUP. DE ALMACEN',
      'SUP. CEDIS',
      'ING. IMPLEMENTACIÓN Y PROCESOS',
      'ING. PROGRAMACIÓN Y NOMINA',
      'ING DE PROCESOS',
      'MECANICO',
      'SUPERVISOR DE CORTE-COORDINADO',
      'SUPERVISOR DE PESPUNTE',
      'SUP. KANBAN',
      'SUPERVISOR DE AVIOS',
      'SUPERVISOR DE MONTADO-ADORNO',
      'DOCTOR',
      'PRACTICANTE',
      'AUXILIAR DE DESARROLLO DE MATERIALES',
      'AUXILIAR FABRICACIÓN MUESTRAS',
      'AUX.CARDEX CECOM',
      'CHOFER CEDIS',
      'AUX. EMBARQUE CEDIS',
      'TÉCNICO IMPLEMENTADOR',
      'AUXILIAR DE RH',
      'AUX. DE PESPUNTE',
      'AUXILIAR DE KANBAN',
      'AUXILIAR EMBARQUE FABRICA',
      'AUX RH',
      'RECEPCIONISTA FABRICA',
      'VIGILANTE',
      'INSPECTOR DE CALIDAD',
      'OP. EMBARQUE CEDIS',
      'OP. MUESTRAS',
      'OP. CECOM',
      'CHOFER',
      'OP. ASEO',
      'OP. COMODÍN',
      'PROJECT CONSULT'] },
  
      { key: 'reviso', value: [         
        'CHIEF EXECUTIVE OFFICER - CEO',
        'CHIEF OPERANTING OFFICER - COO',
        'CHIEF FINANCIAL OFFICE - CFO',
        'BUSSINES MANAGER',
        'SHOE FACTORY MANAGER',
        'LÍDER DESARROLLO TÉCNICO',
        'LÍDER MODELADO Y PATRONAJE',
        'LÍDER CECOM',
        'LÍDER CEDIS',
        'LÍDER INGENIERÍA',
        'LÍDER PRODUCCIÓN',
        'LÍDER RECURSOS HUMANOS',
        'LÍDER CALIDAD',
        'LÍDER HARDWARE Y SEGURIDAD PATRIMONIAL',
        'EJECUTIVO DE CLIENTE COPPEL-ANDREA',
        'EJECUTIVO DE CLIENTE VARIOS',
        'EJECUTIVO DE CLIENTE STEVE MADDEN',
        'COORD. MODELISTAS',
        'MODELISTA',
        'COORD. MODELISTAS',
        'MODELISTA',
        'COOR. COSTOS Y ESPECIFIACIONES DE PRODUCCIÓN',
        'COOR. DISEÑO CONCEPTUAL',
        'COOR. DE MONTADO',
        'DISEÑADORA',
        'SUP. DE ALMACEN',
        'SUP. CEDIS',
        'ING. IMPLEMENTACIÓN Y PROCESOS',
        'ING. PROGRAMACIÓN Y NOMINA',
        'ING DE PROCESOS',
        'MECANICO',
        'SUPERVISOR DE CORTE-COORDINADO',
        'SUPERVISOR DE PESPUNTE',
        'SUP. KANBAN',
        'SUPERVISOR DE AVIOS',
        'SUPERVISOR DE MONTADO-ADORNO',
        'DOCTOR',
        'PRACTICANTE',
        'AUXILIAR DE DESARROLLO DE MATERIALES',
        'AUXILIAR FABRICACIÓN MUESTRAS',
        'AUX.CARDEX CECOM',
        'CHOFER CEDIS',
        'AUX. EMBARQUE CEDIS',
        'TÉCNICO IMPLEMENTADOR',
        'AUXILIAR DE RH',
        'AUX. DE PESPUNTE',
        'AUXILIAR DE KANBAN',
        'AUXILIAR EMBARQUE FABRICA',
        'AUX RH',
        'RECEPCIONISTA FABRICA',
        'VIGILANTE',
        'INSPECTOR DE CALIDAD',
        'OP. EMBARQUE CEDIS',
        'OP. MUESTRAS',
        'OP. CECOM',
        'CHOFER',
        'OP. ASEO',
        'OP. COMODÍN'] },
  
        { key: 'aprobo', value: [         
          'CHIEF EXECUTIVE OFFICER - CEO',
          'CHIEF OPERANTING OFFICER - COO',
          'CHIEF FINANCIAL OFFICE - CFO',
          'BUSSINES MANAGER',
          'SHOE FACTORY MANAGER',
          'LÍDER DESARROLLO TÉCNICO',
          'LÍDER MODELADO Y PATRONAJE',
          'LÍDER CECOM',
          'LÍDER CEDIS',
          'LÍDER INGENIERÍA',
          'LÍDER PRODUCCIÓN',
          'LÍDER RECURSOS HUMANOS',
          'LÍDER CALIDAD',
          'LÍDER HARDWARE Y SEGURIDAD PATRIMONIAL',
          'EJECUTIVO DE CLIENTE COPPEL-ANDREA',
          'EJECUTIVO DE CLIENTE VARIOS',
          'EJECUTIVO DE CLIENTE STEVE MADDEN',
          'COORD. MODELISTAS',
          'MODELISTA',
          'COORD. MODELISTAS',
          'MODELISTA',
          'COOR. COSTOS Y ESPECIFIACIONES DE PRODUCCIÓN',
          'COOR. DISEÑO CONCEPTUAL',
          'COOR. DE MONTADO',
          'DISEÑADORA',
          'SUP. DE ALMACEN',
          'SUP. CEDIS',
          'ING. IMPLEMENTACIÓN Y PROCESOS',
          'ING. PROGRAMACIÓN Y NOMINA',
          'ING DE PROCESOS',
          'MECANICO',
          'SUPERVISOR DE CORTE-COORDINADO',
          'SUPERVISOR DE PESPUNTE',
          'SUP. KANBAN',
          'SUPERVISOR DE AVIOS',
          'SUPERVISOR DE MONTADO-ADORNO',
          'DOCTOR',
          'PRACTICANTE',
          'AUXILIAR DE DESARROLLO DE MATERIALES',
          'AUXILIAR FABRICACIÓN MUESTRAS',
          'AUX.CARDEX CECOM',
          'CHOFER CEDIS',
          'AUX. EMBARQUE CEDIS',
          'TÉCNICO IMPLEMENTADOR',
          'AUXILIAR DE RH',
          'AUX. DE PESPUNTE',
          'AUXILIAR DE KANBAN',
          'AUXILIAR EMBARQUE FABRICA',
          'AUX RH',
          'RECEPCIONISTA FABRICA',
          'VIGILANTE',
          'INSPECTOR DE CALIDAD',
          'OP. EMBARQUE CEDIS',
          'OP. MUESTRAS',
          'OP. CECOM',
          'CHOFER',
          'OP. ASEO',
          'OP. COMODÍN'] },
  ];
  
  const controlCambios = [
    {
      fecha: '05/07/2024',
      revision: '01',
      descripcion:
        'Emisión y nueva estructura, ajustes en competencias y responsabilidades.',
    },
  ];
  
  export {
    datos,
    responsabilidades,
    perfil,
    competencias,
    autoridades,
    controlDocumento,
    controlCambios,
    competenciasComportamentales
  };
  
  
  
  