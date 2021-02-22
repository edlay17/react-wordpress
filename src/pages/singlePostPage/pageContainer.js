import {connect} from "react-redux";
import SinglePostPage from "./page";

const mapStateToProps = (state) => {
    return{
        currentPost: state.posts.currentPostData
    }
}
export default connect(mapStateToProps, {})(SinglePostPage)