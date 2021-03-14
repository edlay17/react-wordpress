import Page from "../../features/single-page/components";
import {useParams} from "react-router-dom";

export const SinglePage = (props) => {
    let {slug} = useParams();

    const links = [];

    return (
        <>
            <Page links={links} slug={slug}/>
        </>
    )}

export default SinglePage;