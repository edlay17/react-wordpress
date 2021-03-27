import CategoryPostsPage from "../../features/posts/components/category-posts-page";
import gory from "../../include/images/gory.png"
import {useParams} from "react-router-dom";

export const CategoryPage = (props) => {
    let {category_slug} = useParams();
    let {pageNum} = useParams();

    return (
        <CategoryPostsPage categorySlug={category_slug} pageNum={pageNum} image={gory}/>
    )}

export default CategoryPage;