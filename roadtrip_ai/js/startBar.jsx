import React from "react";
import PropTypes from "prop-types";

export default function PostLike({ like, handleLike, handleUnlike }) {
  return (
    <div>
      {like.numLikes === 1 ? <p>1 like</p> : <p>{like.numLikes} likes</p>}

      {like.lognameLikesThis === true ? (
        <button
          type="button"
          data-testid="like-unlike-button"
          onClick={handleUnlike}
        >
          Unlike
        </button>
      ) : (
        <button
          type="button"
          data-testid="like-unlike-button"
          onClick={handleLike}
        >
          Like
        </button>
      )}
    </div>
  );
}

PostLike.propTypes = {
  like: PropTypes.shape({
    numLikes: PropTypes.number.isRequired,
    lognameLikesThis: PropTypes.bool.isRequired,
  }).isRequired,
  handleLike: PropTypes.func.isRequired,
  handleUnlike: PropTypes.func.isRequired,
};
