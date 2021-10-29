import './App.css';
import Movie from "./Movie";
import data from "./data";

function App() {
  //Build an array with Array.map using data from data.js
  //Returns an array of JSX Elements each representing a Movie Component
  const movieArr = data.map((ele, index) => {
    return (
      <div key={index}>
        <Movie movie={ele} />{/* Create a Movie Component with the current Object from data */}
      </div>
    );
  });
  
  return (
    <div className="App">
      <h1>Now Playing</h1>
      <div className="movie-container">{/* Used as a flexbox container */}
        {movieArr}{/* The array of Movie Components */}
      </div>
    </div>
  );
}

export default App;
