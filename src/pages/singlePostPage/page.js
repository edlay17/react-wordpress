import PageTemplate from "../../ui/organisms/page";
import LoadingPageTemplate from "../../ui/organisms/loadingPage";


export const SinglePostPage = (props) => {

    const links = [
        {id: 2, linkAddress: "/posts", linkText: "Posts"},
    ];
    const text1 = "";
    return (
        <>
            {text1 === "" ?
                <PageTemplate
                        breadcrumbsLinks={links}
                        pageTitle={props.currentPost.title}
                        pageContent={props.currentPost.content}/> :
                <LoadingPageTemplate
                    breadcrumbsLinks={links}
                    pageTitle={""}/>}
        </>
)}

export default SinglePostPage;