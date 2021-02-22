import {combineReducers, createStore} from 'redux';
import postsReducer from "../redux/postsReducer";

let reducers = combineReducers({
    posts: postsReducer,
});

let store = createStore(reducers);
export default store;