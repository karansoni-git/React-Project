import { IoCloseCircle } from "react-icons/io5";
import { useContext } from "react";
import { PostListContext } from "../store/Post-list-store";
import { FcLike } from "react-icons/fc";
import { FaUser } from "react-icons/fa";

function Post({ post }) {
  const { deletePost } = useContext(PostListContext);

  return (
    <div className="card postCard" style={{ width: "50rem" }}>
      <div className="alert alert-light" role="alert">
        <FaUser className="userIcon" />
        {post.userId}
      </div>
      <div className="card-body">
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => {
            deletePost(post.id);
          }}
        >
          <IoCloseCircle id="closeId" />
        </span>
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary tag">
            {tag}
          </span>
        ))}
        <button type="button" className="btn btn-success">
          <FcLike className="icon" />
          <span className="badge text-bg-dark">{post.reactions.likes}</span>
        </button>
      </div>
    </div>
  );
}

export default Post;
