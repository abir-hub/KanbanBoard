import { lazy } from "react";

const Content = lazy(() => import('./scenes/content/Content'));
const Home = lazy(() => import('./scenes/home/Home'));


const routes = [
    {
        path: '/',
        element: Home,
    },
    {
        path: '/tasks',
        element: Content,
    }
];

export default routes;