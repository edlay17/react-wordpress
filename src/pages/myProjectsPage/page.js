import CategoryPostsTemplate from "../../ui/organisms/categoryPosts";
import LoadingCategoryPosts from "../../ui/organisms/loadingCategoryPosts";

export const MyProjectsPage = (props) => {
    let isFetching = false;

    return (
        <>
            {console.log(props.posts)}
            {isFetching ?
                <LoadingCategoryPosts pageName={"My projects"}/> :
                <CategoryPostsTemplate postsData={props.posts} pageName={"My projects"}/>
            }
        </>
    )}

export default MyProjectsPage;