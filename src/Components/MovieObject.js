import React from "react";
import "./MovieObject.css";

// renders a movie object, w/ title and both prices
function MovieObject(title, cwPrice, fwPrice, cwIsCheaper) {
  return (
    <div className="movie-container">
      <div className="movie-image"></div>
      <div className="movie-info">
        <h1 className="movie-title">movie title</h1>
        <div className="row">
          <div className="col">
            <p>Cinema World</p>
          </div>
          <div className="col">
            <p>$</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>Film World</p>
          </div>
          <div className="col">
            <p>$$</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieObject;
