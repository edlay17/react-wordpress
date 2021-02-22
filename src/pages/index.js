import SinglePostPageContainer from "./singlePostPage/pageContainer";
import {Homepage} from "./homePage/page";
import MyProjectsPageContainer from "./myProjectsPage/pageContainer";
import {NotFoundPage} from "./notFoundPage/page";

export const routes = [
    {
        path: "/",
        exact: true,
        component: Homepage,
    },
    {
        path: "/aboutProjects",
        exact: true,
        component: MyProjectsPageContainer
    },
    {
        path: "/post/:id",
        exact: true,
        component: SinglePostPageContainer
    },
    {
        path: "/404",
        exact: true,
        component: NotFoundPage
    },
    {
        component: Homepage
    },
];

export const links = [
    {id: 1, linkAddress: "/aboutProjects", linkText: "About projects"},
    {id: 2, linkAddress: "/two", linkText: "About me (CV)"},
    {id: 3, linkAddress: "/one", linkText: "Contacts"},
    {id: 4, linkAddress: "/post/333", linkText: "Setting"},
    {id: 5, linkAddress: "/404", linkText: "404"},
];
