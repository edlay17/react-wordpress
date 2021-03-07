import SinglePostPage from "./posts/post/page";
import {Homepage} from "./index/page";
import MyProjectsPage from "./posts/page";
import {NotFoundPage} from "./404/page";

export const routes = [
    {
        path: "/",
        exact: true,
        component: Homepage,
    },
    {
        path: "/posts",
        exact: true,
        component: MyProjectsPage
    },
    {
        path: "/posts/:slug",
        exact: true,
        component: SinglePostPage
    },
    {
        path: "/404",
        exact: true,
        component: NotFoundPage
    },
    {
        component: NotFoundPage
    },
];

export const links = [
    {id: 1, linkAddress: "/posts", linkText: "About projects"},
    {id: 2, linkAddress: "/two", linkText: "About me (CV)"},
    {id: 3, linkAddress: "/one", linkText: "Contacts"},
    {id: 4, linkAddress: "/post/333", linkText: "Setting"},
    {id: 5, linkAddress: "/404", linkText: "404"},
];
