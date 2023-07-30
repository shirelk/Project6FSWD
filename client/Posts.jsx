import React, { useState, useEffect } from "react";
import Popup from "./Popup";
import {
  faTrashCan,
  faCommentDots,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let i = 0;

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

  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostBody, setNewPostBody] = useState("");

  const [newCommentName, setNewCommentName] = useState("");
  const [newCommentEmail, setNewCommentEmail] = useState("");
  const [newCommentBody, setNewCommentBody] = useState("");

  const [editPostTitle, setEditPostTitle] = useState("");
  const [editPostBody, setEditPostBody] = useState("");

  //added
  const [newCommentPopups, setNewCommentPopups] = useState(null);

  // useEffect(() => {
  //   setNewCommentPopups(null);
  // }, [])

  useEffect(() => {
    fetch(`http://localhost:3000/posts/?userId=${user.id}`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        localStorage.setItem("posts", JSON.stringify(data));
      });
  }, []);

  const deletePost = async () => {
    await fetch(`http://localhost:3000/posts/${selectedPost.id}`, {
      method: "DELETE",
    });
    // Update the local state in the UI
    setPosts((prevPosts) =>
      prevPosts.filter((post) => post.id !== selectedPost.id)
    );
    setButtonDeletePost(false);
  };

  const deleteComment = async (id) => {
    await fetch(`http://localhost:3000/comments/${id}`, {
      method: "DELETE",
    });
    const newComments = comments.filter((cmnts) => cmnts.id !== id);
    setComments(newComments);
  };

  const saveNewPost = async () => {
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
    setNewPostTitle("");
    setNewPostBody("");
  };

  const saveNewComment = async () => {
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
    setNewCommentName("");
    setNewCommentEmail("");
    setNewCommentBody("");
  };

  const saveUpdatedPost = async () => {
    const updatedPost = {
      title: editPostTitle, // Use editPostTitle instead of newPostTitle
      body: editPostBody, // Use editPostBody instead of newPostBody
      userId: user.id,
    };
    await fetch(`http://localhost:3000/posts/${selectedPost.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPost),
    });
    // Update the local state and todos in the UI
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === selectedPost.id ? { ...post, ...updatedPost } : post
      )
    );
    setButtonEditPost(false);
    setEditPostTitle("");
    setEditPostBody("");
  };

  function postPressed(pst) {
    if (selectedPost === pst.id) {
      return;
    }
    console.log(pst);
    //added
    setNewCommentPopups(null); // Close any open popup
    // console.log('Setting openedPopup to', pst.id);
    // setNewCommentPopups(pst.id); // Set for clicked post

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
    // Set the temporary edited data to the current post data when the edit button is clicked
    setEditPostTitle(pst.title);
    setEditPostBody(pst.body);
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

  console.log(i++);

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
          <input
            type="text"
            id="postTitle"
            placeholder="title"
            value={newPostTitle}
            onChange={(e) => setNewPostTitle(e.target.value)}
          />
          <textarea
            id="postBody"
            placeholder="type here something about this post..."
            value={newPostBody}
            onChange={(e) => setNewPostBody(e.target.value)}
          />
        </div>
      </Popup>
      <ul>
        {posts.map((pst) => (
          <li key={pst.id}>
            <div
              id="clickedBtn"
              onClick={() => postPressed(pst)}
              className={
                selectedPost === pst.id ? "selectedPost postDiv" : "postDiv"
              }
            >
              <h3>{pst.title}</h3>
              <p>{pst.body}</p>

              <div className="crud-btn">
                <button
                  className="new-comment-btn"
                  onClick={
                    //   () => {
                    //   setButtonNewComment(true);
                    // }
                    //added
                    (e) => {
                      setNewCommentPopups(pst.id);
                      //stop propagation to the parent div
                      //so that the postPressed function won't be called
                      //and the comments won't be shown
                      e.stopPropagation();
                    }
                  }
                >
                  <FontAwesomeIcon icon={faCommentDots} />
                </button>
                <Popup
                  // trigger={buttonNewComment}
                  // setTrigger={setButtonNewComment}
                  //added
                  trigger={newCommentPopups === pst.id}
                  setTrigger={() => setNewCommentPopups(null)}
                  setSave={() => saveNewComment()}
                >
                  <div className="popup-content">
                    <h4>new comment:</h4>
                    <input
                      type="text"
                      id="commentName"
                      placeholder="name"
                      value={newCommentName}
                      onChange={(e) => setNewCommentName(e.target.value)}
                    />
                    <input
                      type="email"
                      id="commentEmail"
                      placeholder="email"
                      value={newCommentEmail}
                      onChange={(e) => setNewCommentEmail(e.target.value)}
                    />
                    <textarea
                      id="commentBody"
                      placeholder="type here something about this post..."
                      value={newCommentBody}
                      onChange={(e) => setNewCommentBody(e.target.value)}
                    />
                  </div>
                </Popup>
                <button
                  className="edit-btn"
                  onClick={() => setButtonEditPost(true)}
                >
                  <FontAwesomeIcon icon={faPenToSquare} />
                </button>
                <Popup //edit post popup
                  trigger={buttonEditPost}
                  setTrigger={setButtonEditPost}
                  setSave={saveUpdatedPost}
                >
                  <div className="popup-content">
                    <h4>edit post:</h4>
                    <input
                      type="text"
                      id="postTitle"
                      value={editPostTitle} // Use editPostTitle instead of pst.title or newPostTitle
                      onChange={(e) => setEditPostTitle(e.target.value)}
                    />
                    <textarea
                      id="postBody"
                      value={editPostBody} // Use editPostBody instead of pst.body or newPostBody
                      onChange={(e) => setEditPostBody(e.target.value)}
                    />
                  </div>
                </Popup>
                <button className="delete-btn">
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    onClick={() => setButtonDeletePost(true)}
                  />
                </button>
                <Popup
                  trigger={buttonDeletePost}
                  setTrigger={setButtonDeletePost}
                >
                  <h3>Are you sure you want to delete this post?</h3>
                  <button
                    className="popup-close crudBtn mainBtn"
                    onClick={() => setButtonDeletePost(false)}
                  >
                    cancel
                  </button>
                  <button
                    className="popup-save crudBtn mainBtn"
                    onClick={deletePost}
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                  </button>
                </Popup>
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
