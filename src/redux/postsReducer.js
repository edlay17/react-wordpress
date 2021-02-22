const SET_POSTS = "setPosts";
export const setPosts = (posts) => ({
    type: SET_POSTS,
    posts
})

let InitialState = {
    isFetching: false,
    mes: 'testtesttest',
    postsData: [
        {id: 1, title: "123", excerpt: "excerpt", image: "image", author: "admin", date: "12.01.2010", tags: ["react","wordpress","material ui"]},
        {id: 2, title: "123", excerpt: "excerpt", image: "image", author: "admin", date: "12.01.2010", tags: ["react","wordpress","material ui"]},
        {id: 3, title: "123", excerpt: "excerpt", image: "image", author: "admin", date: "12.01.2010", tags: ["react","wordpress","material ui"]},
        {id: 3, title: "123", excerpt: "excerpt", image: "image", author: "admin", date: "12.01.2010", tags: ["react","wordpress","material ui"]},
        {id: 4, title: "123", excerpt: "excerpt", image: "image", author: "admin", date: "12.01.2010", tags: ["react","wordpress","material ui"]},
        {id: 4, title: "123", excerpt: "excerpt", image: "image", author: "admin", date: "12.01.2010", tags: ["react","wordpress","material ui"]}
    ],
    currentPostData: {
        id: 1,
        title: "Hello world",
        content: "15312 123512 32535235 5213 2135 1235 12355123 5213 215 351",
    }
};



const postsReducer = (state = InitialState, action) => {
    switch (action.type){
        case SET_POSTS:
            let stateCopy;
            //stateCopy = {...state, action.posts};
            return stateCopy;
            break;
        default:
            return state
            break;
    }
}

export default postsReducer;