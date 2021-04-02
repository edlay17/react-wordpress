// libs
import {useEffect, useState} from "react";
import Helmet from "react-helmet";
import {useDispatch, useSelector} from 'react-redux';
import {Redirect, useHistory} from "react-router-dom";

// ui
import LoadingHomepagePostsTemplate from "../../../ui/templates/homepage-posts/loading-homepage-posts/loading-homepage-posts";
import HomepagePostsTemplate from "../../../ui/templates/homepage-posts/homepage-posts/homepage-posts";

// models
import {getAllPosts, resetPosts} from "../model/posts-reducer"

export const AllPostsPage = (props) => {
    let history = useHistory();
    const [isNotFound, toggleIsNotFound] = useState(false);

    const postsPerPage = useSelector(state => state.posts.postsPerPage);
    const isCategoryFound = useSelector(state => state.posts.isCategoryFound);
    const posts = useSelector(state => state.posts.postsData);
    const isFetching = useSelector(state => state.posts.postsIsFetching);
    const pagesCount = useSelector(state => state.posts.postsPagesCount);
    const currentPage = useSelector(state => state.posts.postsPage);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPosts(props.pageNum));
        return function cleanup() {
            dispatch(resetPosts());
        };
    }, [props.pageNum]);
    useEffect(() => {
        toggleIsNotFound(!isCategoryFound);
    }, [isCategoryFound]);

    const changePage = (pageNum) => {
        history.push(`/${pageNum}`);
    }
    {console.log("FEATURE --- " + currentPage)}

    return (
        <>
            <Helmet>
                <title>{props.pageName}</title>
            </Helmet>
            {isNotFound && <Redirect to="/404" />}
            {isFetching
                ? <LoadingHomepagePostsTemplate headerImage={props.image} postsPerPage={postsPerPage}/>
                : <HomepagePostsTemplate headerImage={props.image} postsData={posts} pageName={props.pageName} pagesCount={pagesCount} currentPage={props.pageNum} changePage={changePage}/>
            }
        </>
    )}

export default AllPostsPage;