import React from "react";

function Comment({ data }) {
  return (
    <div className="post-comment">
      <img
        className="comment-avatar"
        src={data.author.avatar}
        alt={`avatar-comment-${data.id}`}
      />
      <div className="comment-box">
        <p className="comment-content">
          <span className="comment-author">{data.author.name} </span>
          {data.content}
        </p>
      </div>
    </div>
  );
}

export default Comment;
