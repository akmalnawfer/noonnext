import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";


import { useState, useEffect } from "react";


const PostItem = ({ post, toggleLike }) => {

  return (
    <div className="post-card">
      <div className="user-wrapper d-flex align-items-center">
        <div className="user-image">
          <img src={post.userProfile} alt={post.user + "'s username"} />
        </div>
        <h3 className="username">{post.user}</h3>
      </div>
      <div className="image-container">
        <img className="post-image" src={post.postImage} alt="" />
        <div className="post-meta">
          <div className="post-description">
            <p className="post-title">{post.title}</p>
            <p className="post-price">{post.price}</p>
          </div>
          <button className={post.isFavorite ? 'post-like favorite' : 'post-like'} onClick={() => toggleLike(post.id)}>
            <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
          </button>
        </div>
      </div>
      <div className="post-stats">
        <div className="post-likes">
          <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon> {post.likeCount} likes
        </div>
        <div className="post-caption mb-0">
          <p>{post.description}</p>
        </div>
        <div className="post-hashtags">
          {post.hashTags.map((tag) => (
            <span>{"#" + tag}</span>
          ))}
        </div>
        <div className="actions">
          <button>{"View " + post.commentsCount + " comments"}</button>
        </div>
      </div>
    </div>
  )
}

export default PostItem


export const toggleLike = post => {
  post.isFavorite = !post.isFavorite;
}

