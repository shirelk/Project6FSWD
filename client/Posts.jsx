import React, { useState, useEffect } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("ourUser"));
    fetch(`http://localhost:3000/posts/?userId=${user.id}`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        localStorage.setItem("posts", JSON.stringify(data));
      });
  }, []);

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
      <ul>
        {posts.map((pst) => (
          <li key={pst.id}>
            <button
              id="clickedBtn"
              onClick={() => postPressed(pst)}
              className={selectedPost === pst ? "selectedPost" : ""}
            >
              <h3>{pst.title}</h3>
              <p>{pst.body}</p>
            </button>

            {showComments(pst)}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Posts;
