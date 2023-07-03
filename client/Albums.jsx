import React, { useState, useEffect } from "react";

function Albums() {
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [selectedAlbum, setselectedAlbum] = useState(null);
  const [displayedPhotos, setDisplayedPhotos] = useState([]);
  const [start, setStart] = useState(0);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("ourUser"));
    fetch(`http://localhost:3000/albums/?userId=${user.id}`)
      .then((response) => response.json())
      .then((json) => {
        const userAlbums = json.filter((album) => album.userId === user.id);
        setAlbums(userAlbums);
        localStorage.setItem("albums", JSON.stringify(userAlbums));
      });
  }, []);

  useEffect(() => {
    if (selectedAlbum) {
      fetch(fetch(`http://localhost:3000/photos/?albumId=${selectedAlbum.id}`))
        .then((response) => response.json())
        .then((json) => {
          const albumPhotos = json.filter(
            (phtos) => phtos.albumId === selectedAlbum.id
          );
          setPhotos(albumPhotos);
          localStorage.setItem("photos", JSON.stringify(albumPhotos));
          setDisplayedPhotos(albumPhotos.slice(start, start + limit));
        });
    }
  }, [selectedAlbum]);

  function loadMorePhotos() {
    setStart(start + limit);
    setDisplayedPhotos(photos.slice(start + limit, start + 2 * limit));
    const targetButton = document.getElementById("clickedBtn");
    if (targetButton) {
      const { top } = targetButton.getBoundingClientRect();
      window.scrollTo({
        top: window.pageYOffset + top,
        behavior: "smooth",
      });
    }
  }

  function albumPressed(albm) {
    setselectedAlbum(albm);
  }

  function showPhotos(albm) {
    if (albm === selectedAlbum) {
      return (
        <>
          <ul className="photosUl">
            {displayedPhotos.map((phtos) => (
              <li key={phtos.id}>
                <div>
                  <h3>{phtos.title}</h3>
                  <img src={phtos.thumbnailUrl} alt={phtos.title} />
                </div>
              </li>
            ))}
          </ul>
          {displayedPhotos.length < photos.length && (
            <button className="LoadMoreBtn" onClick={loadMorePhotos}>
              Load More
            </button>
          )}
        </>
      );
    }
    return null;
  }

  return (
    <>
      <h2>Your albums:</h2>
      <ul>
        {albums.map((albm) => (
          <li className="Album" key={albm.id}>
            <button
              id="clickedBtn"
              onClick={() => albumPressed(albm)}
              className={selectedAlbum === albm ? "selectedAlbum" : ""}
            >
              <h3>{albm.title}</h3>
              <p>{albm.body}</p>
            </button>
            {showPhotos(albm)}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Albums;
