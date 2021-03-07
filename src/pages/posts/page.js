import CategoryPostsPage from "../../features/posts/components/category-posts-page";
import gory from "../../include/images/gory.png"

export const MyProjectsPage = (props) => {

    return (
        <CategoryPostsPage categoryName="без рубрики" pageName="About projects" image={gory}/>
    )}

export default MyProjectsPage;