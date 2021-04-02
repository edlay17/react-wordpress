// libs
import {Redirect} from "react-router-dom";
import {useEffect, useState} from "react";
import Helmet from "react-helmet";
import {useDispatch, useSelector} from 'react-redux';

// ui
import PageTemplate from "../../../ui/templates/page/page/page";
import LoadingPageTemplate from "../../../ui/templates/page/loading-page/loading-page";

// models
import {getPage, resetPage} from "../model/page-reducer"

export const Page = (props) => {
    const currentPage = useSelector(state => state.page.currentPageData);
    const isFetching = useSelector(state => state.page.pageIsFetching);
    const dispatch = useDispatch();
    const [isEmpty, toggleIsEmpty] = useState(false);
    useEffect(() => {
        dispatch(getPage(props.slug));
        return function cleanup() {
            dispatch(resetPage());
        };
    }, [props.slug]);
    useEffect(() => {
        toggleIsEmpty(currentPage.isEmpty);
    }, [currentPage.isEmpty]);

    return (
        <>
            <Helmet>
                <title>{currentPage.title}</title>
            </Helmet>
            {!isFetching && isEmpty && <Redirect to="/404" />}
            {isFetching ?
                <LoadingPageTemplate
                    breadcrumbsLinks={props.links}
                    pageTitle={""}/> :
                <PageTemplate
                    breadcrumbsLinks={props.links}
                    pageTitle={currentPage.title}
                    pageContent={currentPage.content}/>
            }
        </>
    )}

export default Page;