import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component'),
        children:[
            {
                path: 'ingenieria',
                title: 'GERENTE DE INGENIERÍA',
                loadComponent: () => import ('./pages/ingenieria/ingenieria.component'),
            },

            {
                path: 'ingenieria',
                title: 'GERENTE DE PRODUCCIÓN',
                loadComponent: () => import ('./pages/produccion/produccion.component'),
            },

            {
                path: 'ingenieria',
                title: 'GERENTE DE COMPRAS',
                loadComponent: () => import ('./pages/compras/compras.component'),
            },

            {
                path: 'ingenieria',
                title: 'GERENTE DE CALIDAD',
                loadComponent: () => import ('./pages/calidad/calidad.component'),
            },
            
            {
                path: 'ingenieria',
                title: 'GERENTE DE DOH',
                loadComponent: () => import ('./pages/doh/doh.component'),
            }
        ]
    },

    {
        path: 'login',
        title: 'login',
        loadComponent: () => import('./pages/login/login.component'),
    }
];