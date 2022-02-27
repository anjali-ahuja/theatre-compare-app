import { useEffect, useState } from "react";
import "./App.css";
import MovieObject from "./Components/MovieObject";

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
    // form request, add header to key
    let h = new Headers();
    h.append("x-api-key", key);

    // make api calls only if no movies locally, don't want to ddos the api
    if ((cwMovies && cwMovies.length === 0) || !cwMovies) {
      let reqCw = new Request(cwUrl, { method: "GET", headers: h });

      fetch(reqCw)
        .then((response) => response.json())
        .then((obj) => setCwMovies(obj["Movies"]));
    }

    if ((fwMovies && fwMovies.length === 0) || !fwMovies) {
      let reqFw = new Request(fwUrl, { method: "GET", headers: h });

      fetch(reqFw)
        .then((response) => response.json())
        .then((obj) => setFwMovies(obj["Movies"]));
    }
  });

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
        // each movie object is a child
      }
      <div className="movie-object-container">
        {cwMovies.map((item, index) => {
          return <MovieObject title={JSON.stringify(item["Title"])} />;
        })}
      </div>

      <div id="movies"></div>
    </div>
  );
}

export default App;
