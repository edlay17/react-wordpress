import SinglePostPage from "./posts/post/page";
import Homepage from "./index/page";
import CategoryPage from "./posts/page";
import NotFoundPage from "./404/page";
import SearchPostsPage from "./search/page"
import SinglePage from "./page/page";

export const routes = [
    {
        path: "/404",
        exact: true,
        component: NotFoundPage
    },
    {
        path: "/",
        exact: true,
        component: Homepage,
    },
    {
        path: "/page/:slug",
        exact: true,
        component: SinglePage
    },
    {
        path: "/posts/:category_slug",
        exact: true,
        component: CategoryPage
    },
    {
        path: "/post/:post_slug",
        exact: true,
        component: SinglePostPage
    },
    {
        path: "/search/:request",
        exact: true,
        component: SearchPostsPage
    },
    {
        component: NotFoundPage
    },
];

// header menu links
export const links = [
    {id: 1, linkAddress: "/posts/about-projects", linkText: "About projects"},
    {id: 2, linkAddress: "/page/about-me", linkText: "About me (CV)"},
    {id: 3, linkAddress: "/post/react-wordpress-blog", linkText: "Contacts"},
    {id: 4, linkAddress: "/post/333", linkText: "Setting"},
    {id: 5, linkAddress: "/404", linkText: "404"},
];
