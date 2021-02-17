import {SinglePostPage} from "./single-post/page";
import {Error404} from "./error404/page";

const routes = [
    {
        path: "/",
        exact: true,
        component: SinglePostPage,
    },
    {
        path: "/one",
        exact: true,
        component: SinglePostPage
    },
    {
        path: "/two",
        exact: true,
        component: SinglePostPage
    },
    {
        component: Error404
    },
];

export default routes;