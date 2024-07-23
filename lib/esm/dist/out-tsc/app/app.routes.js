export var routes = [
    {
        path: '',
        loadComponent: function () { return import('./pages/home/home.component'); },
        children: [
            {
                path: 'ingenieria',
                title: 'GERENTE DE INGENIERÍA',
                loadComponent: function () { return import('./pages/ingenieria/ingenieria.component'); },
            },
            {
                path: 'ingenieria',
                title: 'GERENTE DE PRODUCCIÓN',
                loadComponent: function () { return import('./pages/produccion/produccion.component'); },
            },
            {
                path: 'ingenieria',
                title: 'GERENTE DE COMPRAS',
                loadComponent: function () { return import('./pages/compras/compras.component'); },
            },
            {
                path: 'ingenieria',
                title: 'GERENTE DE CALIDAD',
                loadComponent: function () { return import('./pages/calidad/calidad.component'); },
            },
            {
                path: 'ingenieria',
                title: 'GERENTE DE DOH',
                loadComponent: function () { return import('./pages/doh/doh.component'); },
            }
        ]
    },
    {
        path: 'login',
        title: 'login',
        loadComponent: function () { return import('./pages/login/login.component'); },
    }
];
//# sourceMappingURL=app.routes.js.map
//# sourceMappingURL=app.routes.js.map