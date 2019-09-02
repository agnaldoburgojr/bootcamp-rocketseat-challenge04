import React from "react";
import Comment from "./Comment";

function Post({ data }) {
  return (
    <div className="post">
      <div className="post-header">
        <img className="post-avatar" src={data.author.avatar} />
        <div className="post-header-text">
          <p className="post-header-author">{data.author.name}</p>
          <p className="post-header-date">{data.date}</p>
        </div>
      </div>
      <div className="post-content">
        <p className="post-content-text">{data.content}</p>
        <hr />
      </div>
      <div className="post-comments">
        {data.comments.map(comment => (
          <Comment key={comment.id} data={comment} />
        ))}
      </div>
    </div>
  );
}

export default Post;
