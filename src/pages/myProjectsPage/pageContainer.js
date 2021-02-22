import {connect} from "react-redux";
import {setPosts} from "../../redux/postsReducer"
import MyProjectsPage from "./page";

const mapStateToProps = (state) => {
    return{
        posts: state.posts.postsData
    }
}
export default connect(mapStateToProps, {setPosts})(MyProjectsPage)