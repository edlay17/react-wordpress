import AllPostsPage from "../../features/posts/components/all-posts-page";
import ocean from "../../include/images/ocean.jpg"

export const Homepage = (props) => {
    return (
        <AllPostsPage categoryName="без рубрики" pageName="Homepage" image={ocean}/>
    )}

export default Homepage;