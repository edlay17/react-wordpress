import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter as Router
} from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import {Provider} from "react-redux";
import {
    applyMiddleware,
    combineReducers,
    createStore
} from 'redux';
import thunk from "redux-thunk";
import postsReducer from "./features/posts/model/posts-reducer";
import postReducer from "./features/post/model/post-reducer";
import pageReducer from "./features/single-page/model/page-reducer";
import globalReducer from "./features/globalSettings/model/global-reducer";

let reducers = combineReducers({
    posts: postsReducer,
    post: postReducer,
    page: pageReducer,
    global: globalReducer,
});
let store = createStore(
    reducers,
    applyMiddleware(thunk)
);

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <CssBaseline />
          <Provider store={store}>
              <App state={store.getState()}/>
          </Provider>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
