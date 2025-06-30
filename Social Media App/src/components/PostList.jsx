import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../store/Post-list-store";
import NoPostMsg from "./NoPostMsg";
import Loading from "./Loading";

function PostList() {
  const { postList, fetching } = useContext(PostListContext);

  return (
    <>
      {fetching && <Loading />}
      {!fetching && postList.length === 0 && <NoPostMsg />}
      {!fetching &&
        postList.map((post) => <Post key={post.id} post={post}></Post>)}
    </>
  );
}
export default PostList;
