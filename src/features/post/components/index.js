import PageTemplate from "../../../ui/templates/page/page/page";
import LoadingPageTemplate from "../../../ui/templates/page/loading-page/loading-page";
import {Redirect, useParams} from "react-router-dom";
import {useEffect} from "react";
import Helmet from "react-helmet";
import {useDispatch, useSelector} from 'react-redux';
import {getPost} from "../model/post-reducer"

export const PostPage = (props) => {
    let {slug} = useParams();
    useEffect(() => {
        dispatch(getPost(slug));
    }, []);
    const currentPost = useSelector(state => state.post.currentPostData);
    const isFetching = useSelector(state => state.post.postIsFetching);
    const dispatch = useDispatch();

    return (
        <>
            <Helmet>
                <title>{currentPost.title}</title>
            </Helmet>
            {!isFetching && currentPost.isEmpty && <Redirect to="/404" />}
            {isFetching ?
                <LoadingPageTemplate
                    breadcrumbsLinks={props.links}
                    pageTitle={""}/> :
                <PageTemplate
                    breadcrumbsLinks={props.links}
                    pageTitle={currentPost.title}
                    pageContent={currentPost.content}/>
            }
        </>
    )}

export default PostPage;