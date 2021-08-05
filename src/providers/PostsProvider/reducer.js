import types from './types';

export default (currentState, action) => {
  switch (action.type) {
    case types.CREATE_POST:
      // eslint-disable-next-line no-case-declarations
      const copyPosts = [...currentState.posts];
      copyPosts.push(action.payload);

      return {
        ...currentState,
        posts: copyPosts,
      };

    default:
      return currentState;
  }
};
