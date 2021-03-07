import CategoryPostsTemplate from "../../../ui/templates/category-posts/category-posts/category-posts";
import LoadingCategoryPosts from "../../../ui/templates/category-posts/loading-category-posts/loading-category-posts";
import {useEffect} from "react";
import Helmet from "react-helmet";
import {useDispatch, useSelector} from 'react-redux';
import {getFoundPosts} from "../model/posts-reducer"

export const FoundPostsPage = (props) => {
    useEffect(() => {
        dispatch(getFoundPosts());
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
                    headerImage={props.image}
                    pageName={props.pageName}/> :
                <CategoryPostsTemplate
                    headerImage={props.image}
                    postsData={posts}
                    pageName={props.pageName}/>
            }
        </>
    )}

export default FoundPostsPage;