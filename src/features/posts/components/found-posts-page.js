// libs
import {useEffect} from "react";
import Helmet from "react-helmet";
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from "react-router-dom";

// ui
import LoadingFoundPostsTemplate from "../../../ui/templates/found-posts/loading-found-posts/loading-found-posts";
import FoundPostsTemplate from "../../../ui/templates/found-posts/found-posts/found-posts";

// models
import {getFoundPosts, resetPosts} from "../model/posts-reducer"

export const FoundPostsPage = (props) => {
    let history = useHistory();

    const postsPerPage = useSelector(state => state.posts.postsPerPage);
    const posts = useSelector(state => state.posts.postsData);
    const isFetching = useSelector(state => state.posts.postsIsFetching);
    const pagesCount = useSelector(state => state.posts.postsPagesCount);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFoundPosts(props.searchRequest, props.pageNum));
        return function cleanup() {
            dispatch(resetPosts());
        };
    }, [props.searchRequest, props.pageNum]);

    const changePage = (pageNum) => {
        history.push(`/search/${props.searchRequest}/${pageNum}`);
    }

    return (
        <>
            <Helmet>
                <title>{props.pageName}</title>
            </Helmet>
            {isFetching
                ? <LoadingFoundPostsTemplate postsPerPage={postsPerPage} headerImage={props.image}/>
                : <FoundPostsTemplate headerImage={props.image} postsData={posts} pageName={props.pageName} pagesCount={pagesCount} currentPage={props.pageNum} changePage={changePage}/>
            }
        </>
    )}

export default FoundPostsPage;