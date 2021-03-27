import CategoryPostsTemplate from "../../../ui/templates/category-posts/category-posts/category-posts";
import LoadingCategoryPostsTemplate from "../../../ui/templates/category-posts/loading-category-posts/loading-category-posts";
import {useEffect, useState} from "react";
import Helmet from "react-helmet";
import {useDispatch, useSelector} from 'react-redux';
import {getPosts, resetPosts} from "../model/posts-reducer"
import {Redirect, useHistory} from "react-router-dom";

export const CategoryPostsPage = (props) => {
    let history = useHistory();
    const [isNotFound, toggleIsNotFound] = useState(false);

    const posts = useSelector(state => state.posts.postsData);
    const isFetching = useSelector(state => state.posts.postsIsFetching);
    const pageName = useSelector(state => state.posts.categoryName);
    const pagesCount = useSelector(state => state.posts.postsPagesCount);
    const currentPage = useSelector(state => state.posts.postsPage);
    const isCategoryFound = useSelector(state => state.posts.isCategoryFound);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts(props.categorySlug, props.pageNum));
        return function cleanup() {
            dispatch(resetPosts());
        };
    }, [props.categorySlug, props.pageNum]);
    useEffect(() => {
        toggleIsNotFound(!isCategoryFound);
    }, [isCategoryFound]);

    const changePage = (pageNum) => {
        history.push(`/posts/${props.categorySlug}/${pageNum}`);
    }

    return (
        <>
            <Helmet>
                <title>{pageName}</title>
            </Helmet>
            {isNotFound && <Redirect to="/404" />}
            {isFetching
                ? <LoadingCategoryPostsTemplate headerImage={props.image}/>
                : <CategoryPostsTemplate headerImage={props.image} postsData={posts} pageName={pageName} pagesCount={pagesCount} currentPage={currentPage} changePage={changePage}/>
            }
        </>
    )}

export default CategoryPostsPage;