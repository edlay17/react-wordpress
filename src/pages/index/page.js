import AllPostsPage from "../../features/posts/components/all-posts-page";
import ocean from "../../include/images/ocean.jpg"
import {useParams} from "react-router-dom";

export const Homepage = (props) => {
    let {pageNum} = useParams();

    return (
        <AllPostsPage categoryName="без рубрики" pageName="Homepage" image={ocean} pageNum={pageNum}/>
    )}

export default Homepage;