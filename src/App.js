import { useEffect, useState } from "react";
import "./App.css";
import MovieObject from "./Components/MovieObject";

require("es6-promise").polyfill();

// reassigning the fetch function
var originalFetch = require("isomorphic-fetch");
var fetch = require("fetch-retry")(originalFetch);

// urls and key for api
const cwUrl =
  "https://challenge.lexicondigital.com.au/api/v2/cinemaworld/movies";
const fwUrl = "https://challenge.lexicondigital.com.au/api/v2/filmworld/movies";
const key = "Yr2636E6BTD3UCdleMkf7UEdqKnd9n361TQL9An7";

// main app, renders everything, all other components are children
function App() {
  // store list of movies for both theatres
  const [cwMovies, setCwMovies] = useState([]);
  const [fwMovies, setFwMovies] = useState([]);

  useEffect(() => {
    // form request, add header to include key
    let h = new Headers();
    h.append("x-api-key", key);

    // make api calls only if no movies locally, don't want to ddos the api
    if ((cwMovies && cwMovies.length === 0) || !cwMovies) {
      fetch(cwUrl, { method: "GET", headers: h, retries: 20 })
        .then((response) => response.json())
        .then((obj) => setCwMovies(obj["Movies"]));
    }

    if ((fwMovies && fwMovies.length === 0) || !fwMovies) {
      fetch(fwUrl, { method: "GET", headers: h, retries: 20 })
        .then((response) => response.json())
        .then((obj) => setFwMovies(obj["Movies"]));
    }
  });

  console.log(cwMovies);
  console.log(fwMovies);

  return (
    <div>
      <div className="page-container">
        <div className="text-container">
          <h1 className="page-heading">Prince's Theatre</h1>
        </div>
        <div className="text-container">
          <h1 className="page-subheading">Classic Movies at Home</h1>
        </div>
        <div className="text-container">
          <p className="page-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </p>
        </div>
      </div>
      {
        // each item in cwMovies array to be rendered as a MovieObject
      }
      <div className="movie-object-container">
        {cwMovies.map((item, index) => {
          let t = JSON.stringify(item.Title);
          let cwPrice = item.Price;
          let fwPrice = fwMovies[index].Price;

          return <MovieObject title={t} cwPrice={cwPrice} fwPrice={fwPrice} />;
        })}
      </div>

      <div id="movies"></div>
    </div>
  );
}

export default App;
