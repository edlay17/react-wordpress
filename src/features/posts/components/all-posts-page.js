import LoadingHomepagePostsTemplate
    from "../../../ui/templates/homepage-posts/loading-homepage-posts/loading-homepage-posts";
import HomepagePostsTemplate from "../../../ui/templates/homepage-posts/homepage-posts/homepage-posts";
import {useEffect} from "react";
import Helmet from "react-helmet";
import {useDispatch, useSelector} from 'react-redux';
import {getAllPosts} from "../model/posts-reducer"

export const AllPostsPage = (props) => {
    useEffect(() => {
        dispatch(getAllPosts());
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
                <LoadingHomepagePostsTemplate
                    headerImage={props.image}
                    pageName={props.pageName}/> :
                <HomepagePostsTemplate
                    headerImage={props.image}
                    postsData={posts}
                    pageName={props.pageName}/>
            }
        </>
    )}

export default AllPostsPage;