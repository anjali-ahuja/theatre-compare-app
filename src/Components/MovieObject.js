import React from "react";
import "./MovieObject.css";

// renders a movie object, w/ title and both prices
function MovieObject({ title, cwPrice, fwPrice }) {
  // find fw price by finding matching title

  return (
    <div className="movie-container">
      <div className="movie-image"></div>
      <div className="movie-info">
        <h1 className="movie-title">{title}</h1>
        <div className="row">
          <div className="col">
            <p>Cinema World</p>
          </div>
          <div className="col">
            <p>$ {cwPrice.toFixed(2)}</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>Film World</p>
          </div>
          <div className="col">
            <p>$ {fwPrice.toFixed(2)} </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieObject;
