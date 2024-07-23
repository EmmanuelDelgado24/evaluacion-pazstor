export const routes: ({
    path: string;
    loadComponent: () => Promise<typeof import("./pages/home/home.component")>;
    children: {
        path: string;
        title: string;
        loadComponent: () => Promise<typeof import("./pages/ingenieria/ingenieria.component")>;
    }[];
    title?: undefined;
} | {
    path: string;
    title: string;
    loadComponent: () => Promise<typeof import("./pages/login/login.component")>;
    children?: undefined;
})[];
