import PageTemplate from "../../ui/templates/page/page/page";
import Helmet from "react-helmet";

const links = [];
const title = "Page not found";

export const NotFoundPage = (props) => (
    <>
        <Helmet>
            <title>{title}</title>
        </Helmet>
       <PageTemplate
                breadcrumbsLinks={links}
                isFetching={false}
                pageTitle={title}
                pageContent={""}/>
    </>
)

export default NotFoundPage;