import CategoryPostsTemplate from "../../../ui/templates/category-posts/category-posts/category-posts";
import LoadingCategoryPosts from "../../../ui/templates/category-posts/loading-category-posts/loading-category-posts";
import {useEffect} from "react";
import Helmet from "react-helmet";
import {useDispatch, useSelector} from 'react-redux';
import {getPosts} from "../model/posts-reducer"

export const PostsPage = (props) => {
    useEffect(() => {
        dispatch(getPosts(props.categoryName));
    }, []);
    const posts = useSelector(state => state.posts.postsData);
    const isFetching = useSelector(state => state.posts.postsIsFetching);
    const dispatch = useDispatch();

    return (
        <>
            <Helmet>
                <title>{props.pageName}</title>
            </Helmet>
            {isFetching ?
                <LoadingCategoryPosts
                    headerImage={"https://static.wikia.nocookie.net/vedmak/images/7/7c/%D0%93%D1%80%D0%B0%D0%B4%D0%BE%D0%B2%D0%B0%D0%93%D0%BE%D1%80%D0%B0%D0%923.png/revision/latest?cb=20190815124541"}
                    pageName={props.pageName}/> :
                <CategoryPostsTemplate
                    headerImage={"https://static.wikia.nocookie.net/vedmak/images/7/7c/%D0%93%D1%80%D0%B0%D0%B4%D0%BE%D0%B2%D0%B0%D0%93%D0%BE%D1%80%D0%B0%D0%923.png/revision/latest?cb=20190815124541"}
                    postsData={posts}
                    pageName={props.pageName}/>
            }
        </>
    )}

export default PostsPage;