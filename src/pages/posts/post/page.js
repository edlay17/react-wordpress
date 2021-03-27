import Post from "../../../features/post/components";
import {useParams} from "react-router-dom";

export const SinglePostPage = (props) => {
    let {post_slug} = useParams();

    const links = [];

    return (
        <>
            <Post links={links} slug={post_slug}/>
        </>
)}

export default SinglePostPage;