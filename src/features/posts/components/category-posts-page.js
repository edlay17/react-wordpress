import CategoryPostsTemplate from "../../../ui/templates/category-posts/category-posts/category-posts";
import LoadingCategoryPostsTemplate from "../../../ui/templates/category-posts/loading-category-posts/loading-category-posts";
import {useEffect, useState} from "react";
import Helmet from "react-helmet";
import {useDispatch, useSelector} from 'react-redux';
import {getPosts} from "../model/posts-reducer"
import {Redirect} from "react-router-dom";

export const CategoryPostsPage = (props) => {
    const posts = useSelector(state => state.posts.postsData);
    const isFetching = useSelector(state => state.posts.postsIsFetching);
    const pageName = useSelector(state => state.posts.categoryName);
    const isCategoryFound = useSelector(state => state.posts.isCategoryFound);
    const dispatch = useDispatch();
    const [isNotFound, toggleIsNotFound] = useState(false);
    useEffect(() => {
        dispatch(getPosts(props.categorySlug));
    }, [props.categorySlug]);
    useEffect(() => {
        toggleIsNotFound(!isCategoryFound);
    }, [isCategoryFound]);

    return (
        <>
            <Helmet>
                <title>{pageName}</title>
            </Helmet>
            {!isFetching && isNotFound && <Redirect to="/404" />}
            {isFetching
                ? <LoadingCategoryPostsTemplate headerImage={props.image} pageName={pageName}/>
                : <CategoryPostsTemplate headerImage={props.image} postsData={posts} pageName={pageName}/>
            }
        </>
    )}

export default CategoryPostsPage;