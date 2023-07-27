import React, { useState, useEffect } from "react";
import Popup from "./Popup";
import {
  faTrashCan,
  faCommentDots,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [buttonDeleteComment, setButtonDeleteComment] = useState(false);
  const [buttonNewPost, setButtonNewPost] = useState(false);
  const [buttonNewComment, setButtonNewComment] = useState(false);
  const [buttonEditPost, setButtonEditPost] = useState(false);
  const [buttonDeletePost, setButtonDeletePost] = useState(false);
  const user = JSON.parse(localStorage.getItem("ourUser"));

  useEffect(() => {
    fetch(`http://localhost:3000/posts/?userId=${user.id}`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        localStorage.setItem("posts", JSON.stringify(data));
      });
  }, []);

  const deleteComment = async (id) => {
    await fetch(`http://localhost:3000/comments/${id}`, {
      method: "DELETE",
    });
    const newComments = comments.filter((cmnts) => cmnts.id !== id);
    setComments(newComments);
  };

  const saveNewPost = async () => {
    const newPostTitle = document.getElementById("postTitle").value;
    const newPostBody = document.getElementById("postBody").value;
    const newPost = {
      title: newPostTitle,
      body: newPostBody,
      userId: user.id,
    };
    await fetch(`http://localhost:3000/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    });
    // Update the local state and todos in the UI
    setPosts((prevPosts) => [newPost, ...prevPosts]);
    setButtonNewPost(false);
  };

  const saveNewComment = async () => {
    const newCommentName = document.getElementById("commentName").value;
    const newCommentEmail = document.getElementById("commentEmail").value;
    const newCommentBody = document.getElementById("commentBody").value;
    const newComment = {
      name: newCommentName,
      email: newCommentEmail,
      body: newCommentBody,
      postId: selectedPost.id,
    };
    console.log(newComment);
    await fetch(`http://localhost:3000/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    });
    // Update the local state and todos in the UI
    setComments((prevComments) => [...prevComments, newComment]);
    setButtonNewComment(false);
  };

  function postPressed(pst) {
    setSelectedPost(pst); //update selected post
    //show all comments related to the clicked post
    fetch(`http://localhost:3000/comments/?pstId=${pst.id}`)
      .then((response) => response.json())
      .then((data) => {
        const comme = data.filter((cmnts) => cmnts.postId === pst.id); //filter comments by postId
        setComments(comme);
        const targetButton = document.getElementById("clickedBtn");
        if (targetButton) {
          const { top } = targetButton.getBoundingClientRect();
          window.scrollTo({
            top: window.pageYOffset + top,
            behavior: "smooth",
          });
        }
      });
  }

  function showComments(pst) {
    const handleDeleteComment = (commentId) => {
      setButtonDeleteComment(true);
      // Delete comment logic using commentId
      deleteComment(commentId);
      setButtonDeleteComment(false);
    };

    if (pst == selectedPost) {
      return (
        <>
          <h3>comments:</h3>
          <ul>
            {comments.map((cmnts) => (
              <li key={cmnts.id}>
                <div className="commentsDiv">
                  <h3>{cmnts.name}</h3>
                  <h4>{cmnts.email}</h4>
                  <p>{cmnts.body}</p>
                  <button
                    className="delete-btn"
                    onClick={() => handleDeleteComment(cmnts.id)}
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                  </button>
                  <Popup
                    trigger={buttonDeleteComment}
                    setTrigger={setButtonDeleteComment}
                  >
                    <h3>Are you sure you want to delete this comment?</h3>
                    <button
                      className="popup-close crudBtn mainBtn"
                      onClick={() => setButtonDeleteComment(false)}
                    >
                      cancel
                    </button>
                    <button
                      className="popup-save crudBtn mainBtn"
                      onClick={() => handleDeleteComment()}
                    >
                      <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                  </Popup>
                </div>
              </li>
            ))}
          </ul>
        </>
      );
    } else {
      return <></>;
    }
  }

  return (
    <>
      <h2>your posts:</h2>
      <button className="new-post-btn" onClick={() => setButtonNewPost(true)}>
        new post
      </button>
      <Popup
        trigger={buttonNewPost}
        setTrigger={setButtonNewPost}
        setSave={saveNewPost}
      >
        <div className="popup-content">
          <h4>new post:</h4>
          <input type="text" id="postTitle" placeholder="title" />
          <textarea id="postBody" placeholder="type here something..." />
        </div>
      </Popup>
      <ul>
        {posts.map((pst) => (
          <li key={pst.id}>
            <div
              id="clickedBtn"
              onClick={() => postPressed(pst)}
              className={
                selectedPost === pst ? "selectedPost postDiv" : "postDiv"
              }
            >
              <h3>{pst.title}</h3>
              <p>{pst.body}</p>

              <div className="crud-btn">
                <button
                  className="new-comment-btn"
                  onClick={() => setButtonNewComment(true)}
                >
                  <FontAwesomeIcon icon={faCommentDots} />
                </button>
                <Popup
                  trigger={buttonNewComment}
                  setTrigger={setButtonNewComment}
                  setSave={saveNewComment}
                >
                  <div className="popup-content">
                    <h4>new comment:</h4>
                    <input type="text" id="commentName" placeholder="name" />
                    <input type="email" id="commentEmail" placeholder="email" />
                    <textarea
                      id="commentBody"
                      placeholder="type here something about this post..."
                    />
                  </div>
                </Popup>
                <button
                  className="edit-btn"
                  onClick={() => setButtonEditPost(true)}
                >
                  <FontAwesomeIcon icon={faPenToSquare} />
                </button>
                <button className="delete-btn">
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    onClick={() => setButtonDeletePost(true)}
                  />
                </button>
              </div>
            </div>

            {showComments(pst)}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Posts;
