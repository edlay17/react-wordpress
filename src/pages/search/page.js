import FoundPostsPage from "../../features/posts/components/found-posts-page";
import forest from "../../include/images/forest.jpeg"
import NotFoundPage from "../404/page";
import {useParams} from "react-router-dom";

export const SearchPostsPage = (props) => {
    let {request} = useParams();
    let {pageNum} = useParams();

    return (
        <>
            {request.length > 0
                    ? <FoundPostsPage pageName={"Search for: " + request} searchRequest={request} pageNum={pageNum} image={forest}/>
                    : <NotFoundPage/>
            }
        </>
    )}

export default SearchPostsPage;