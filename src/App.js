import "./App.css";
import MovieObject from "./Components/MovieObject";

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
