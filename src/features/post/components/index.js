import PostTemplate from "./post";
import LoadingPostTemplate from "../../../ui/templates/post/loading-post/loading-post";
import {Redirect} from "react-router-dom";
import {useEffect, useState} from "react";
import Helmet from "react-helmet";
import {useDispatch, useSelector} from 'react-redux';
import {getPost, resetPost} from "../model/post-reducer"

export const Post = (props) => {
    const currentPost = useSelector(state => state.post.currentPostData);
    const isFetching = useSelector(state => state.post.postIsFetching);
    const dispatch = useDispatch();
    const [isEmpty, toggleIsEmpty] = useState(false);
    useEffect(() => {
        toggleIsEmpty(currentPost.isEmpty);
    }, [currentPost.isEmpty]);
    useEffect(() => {
        dispatch(getPost(props.slug));
        return function cleanup() {
            dispatch(resetPost(props.slug));
        };
    }, [props.slug]);
    let lastLinksId;
    if(props.links.length>0)lastLinksId = props.links[props.links.length-1].id + 1;
    else lastLinksId = 0;
    const links = [...props.links, {id: lastLinksId, linkAddress: `/posts/${currentPost.categorySlug}`, linkText: `${currentPost.categoryName}`}];

    return (
        <>
            <Helmet>
                <title>{currentPost.title}</title>
            </Helmet>
            {!isFetching && isEmpty && <Redirect to="/404" />}
            {isFetching
                ? <LoadingPostTemplate
                    breadcrumbsLinks={links}
                    pageTitle={""}/>
                : <PostTemplate
                    comments={currentPost.comments}
                    breadcrumbsLinks={links}
                    pageTitle={currentPost.title}
                    pageContent={currentPost.content}/>
            }
        </>
    )}

export default Post;