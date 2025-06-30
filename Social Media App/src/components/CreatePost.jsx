import { useContext, useRef } from "react";
import { PostListContext } from "../store/Post-list-store";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const { addPost } = useContext(PostListContext);
  const navigate = useNavigate();

  const userId = useRef("");
  const title = useRef("");
  const body = useRef("");
  const reactions = useRef("");
  const tags = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const userIdData = userId.current.value;
    const titleData = title.current.value;
    const bodyData = body.current.value;
    const reactionsData = reactions.current.value;
    const tagsData = tags.current.value.split(/\s+/);

    userId.current.value = "";
    title.current.value = "";
    body.current.value = "";
    reactions.current.value = "";
    tags.current.value = "";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: userIdData,
        title: titleData,
        body: bodyData,
        reactions: reactionsData,
        tags: tagsData,
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        addPost(post);
        navigate("/");
      });
  };
  return (
    <form className="createPost" onSubmit={handleSubmit} autoComplete="off">
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          User Name
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="Enter your user name"
          ref={userId}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="titleInput" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={title}
          className="form-control"
          id="titleInput"
          placeholder="Enter the post title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          style={{ resize: "none" }}
          type="text"
          rows="4"
          ref={body}
          className="form-control"
          id="description"
          placeholder="Enter the description of post"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tags
        </label>
        <input
          type="text"
          ref={tags}
          className="form-control"
          id="tags"
          placeholder="Enter the tags for post"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Reactions
        </label>
        <input
          type="text"
          ref={reactions}
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to your post"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
}

export default CreatePost;
