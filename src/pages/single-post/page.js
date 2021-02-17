import {useEffect} from "react";
import { PostAPI } from "../../api/posts";


export const SinglePostPage = (props) => {
    useEffect(()=> {
        alert('hello');
        PostAPI.getPosts().then(data=>{
            console.log(data);
        })
    },[]);

    return (
        <div>
            123
        </div>
)}

export default SinglePostPage;