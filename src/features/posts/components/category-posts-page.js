import CategoryPostsTemplate from "../../../ui/templates/category-posts/category-posts/category-posts";
import LoadingCategoryPostsTemplate from "../../../ui/templates/category-posts/loading-category-posts/loading-category-posts";
import {useEffect} from "react";
import Helmet from "react-helmet";
import {useDispatch, useSelector} from 'react-redux';
import {getPosts} from "../model/posts-reducer"

export const CategoryPostsPage = (props) => {
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
                <LoadingCategoryPostsTemplate
                    headerImage={props.image}
                    pageName={props.pageName}/> :
                <CategoryPostsTemplate
                    headerImage={props.image}
                    postsData={posts}
                    pageName={props.pageName}/>
            }
        </>
    )}

export default CategoryPostsPage;