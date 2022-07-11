import About from "../../pages/About";
import Authorization from "../../pages/Authorization";
import Error from "../../pages/Error";
import PostIDPage from "../../pages/PostIDPage";
import Posts from "../../pages/Posts";

export const privateRoutes = [
    {path: '/about', component: About, exact: true},
    {path: '/posts', component: Posts, exact: true},
    {path: '/posts/:id', component: PostIDPage, exact: true},
    {path: '/error', component: Error, exact: true},
]

export const publicRoutes = [
    {path: '/authorization', component: Authorization, exact: true},
]