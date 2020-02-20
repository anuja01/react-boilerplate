import { Login } from "../components/Login";
import { Home } from "../components/Home";
import { Landing } from "../components/Landing";

export const routes = [
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/",
        component: Landing,
    }
];

export const protectedRoutes = [
    {
        path: "/home",
        component: Home,
    }
]