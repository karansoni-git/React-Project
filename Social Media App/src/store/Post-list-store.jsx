import { createContext, useEffect, useReducer, useState } from "react";

const postReducer = (currentPost, action) => {
  let newPostList = currentPost;
  if (action.type === "ADD_POST") {
    newPostList = [action.playload.post, ...currentPost];
  } else if (action.type === "GET_POSTS") {
    newPostList = action.playload.posts;
  } else if (action.type === "DELETE_POST") {
    newPostList = currentPost.filter(
      (post) => post.id !== action.playload.postId
    );
  }
  return newPostList;
};

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  fetching: false,
  deletePost: () => {},
});

function PostListContextProvider({ children }) {
  const [postList, dispatchPost] = useReducer(postReducer, []);
  const [fetching, setFetching] = useState(false);

  const addPost = (post) => {
    const addPostAction = {
      type: "ADD_POST",
      playload: {
        post,
      },
    };
    dispatchPost(addPostAction);
  };

  const getPosts = (posts) => {
    const getPostsAction = {
      type: "GET_POSTS",
      playload: {
        posts,
      },
    };
    dispatchPost(getPostsAction);
  };

  const deletePost = (postId) => {
    const deletePostAction = {
      type: "DELETE_POST",
      playload: {
        postId,
      },
    };
    dispatchPost(deletePostAction);
  };

  useEffect(() => {
    setFetching(true);

    //this is for aborting the fething process while user on other tab.
    const control = new AbortController();
    const Signal = control.signal;

    fetch("https://dummyjson.com/posts", { Signal })
      .then((res) => res.json())
      .then((data) => {
        getPosts(data.posts);
        setFetching(false);
      });

    return () => {
      //call the abort method while user on other tab.
      control.abort();
    };
  }, []);

  return (
    <PostListContext.Provider
      value={{
        postList,
        addPost,
        fetching,
        deletePost,
      }}
    >
      {children}
    </PostListContext.Provider>
  );
}

export default PostListContextProvider;
