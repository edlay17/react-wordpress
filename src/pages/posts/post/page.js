import PostPage from "../../../features/post/components";

export const SinglePostPage = (props) => {
    const links = [
        {id: 2, linkAddress: "/posts", linkText: "Posts"},
    ];

    return (
        <>
            <PostPage links={links}/>
        </>
)}

export default SinglePostPage;