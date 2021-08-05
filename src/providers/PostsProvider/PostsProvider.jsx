import React, { createContext, useCallback, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import types from './types';
import postRedcuer from './reducer';

const PostsContext = createContext({
  posts: [],
  createPost: () => null,
});

const initialState = {
  posts: [],
};

export const usePosts = () => {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error(`You can't use usePosts outside a PostsProvider`);
  }

  return context;
};

const PostsProvider = ({ children }) => {
  const [state, distpatch] = useReducer(postRedcuer, initialState);

  const createPost = useCallback(
    (post) => {
      const createPostAction = {
        type: types.CREATE_POST,
        payload: post,
      };
      distpatch(createPostAction);
    },
    [state]
  );

  return (
    <PostsContext.Provider value={{ posts: state.posts, createPost }}>
      {children}
    </PostsContext.Provider>
  );
};

PostsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PostsProvider;
