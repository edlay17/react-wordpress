import FoundPostsPage from "../../features/posts/components/found-posts-page";
import forest from "../../include/images/forest.svg"
import {useSelector} from "react-redux";
import NotFoundPage from "../404/page";

export const SearchPostsPage = (props) => {
    const searchText = useSelector(state => state.search.searchText);

    return (
        <>
        {searchText.length > 0
                ? <FoundPostsPage pageName={"Search for: " + searchText} searchRequest={searchText} image={forest}/>
                : <NotFoundPage/>
        }
        </>
    )}

export default SearchPostsPage;