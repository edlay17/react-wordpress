import PageTemplate from "../../ui/organisms/page";

const links = [
];

export const NotFoundPage = (props) => (
    <>
       <PageTemplate
                breadcrumbsLinks={links}
                isFetching={false}
                pageTitle={"Page not found"}
                pageContent={""}/>
    </>
)

export default NotFoundPage;