import "./App.css";
import MovieObject from "./Components/MovieObject";

// urls and key for api
const cwUrl =
  "https://challenge.lexicondigital.com.au/api/v2/cinemaworld/movies";
const fwUrl = "https://challenge.lexicondigital.com.au/api/v2/filmworld/movies";
const key = "Yr2636E6BTD3UCdleMkf7UEdqKnd9n361TQL9An7";

// vars to store list of movies for both theatres
var cwMovies = [];
var fwMovies = [];

const sendHttpRequest = (url, key) => {
  // using promise to handle async xhr
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.setRequestHeader("x-api-key", key);
    xhr.send();
    xhr.onload = () => {
      resolve(JSON.parse(xhr.response));
    };
  });
  return promise;
};

const getMovieData = () => {
  // when promise resolved, update data
  sendHttpRequest(cwUrl, key).then((response) => {
    cwMovies = response;
    console.log(cwMovies);
  });
};

// main app, renders everything, all other components are children
function App() {
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
        getMovieData()
        // each movie object is a child
      }
      <div className="movie-object-container">
        <MovieObject />
        <MovieObject />
        <MovieObject />
        <MovieObject />
      </div>
    </div>
  );
}

export default App;
