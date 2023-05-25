import React, { useState } from "react";
import SearchForm from "./components/SearchForm";
import MovieDetails from "./components/MovieDetails";

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSearch = (searchTerm) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=d35f2c9a120471ee44fc42bdfd548eff&query=${searchTerm}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.results && data.results.length > 0) {
          setSelectedMovie(data.results[0]);
        } else {
          setSelectedMovie(null);
        }
      })
      .catch((error) => {
        console.error("Error fetching movie:", error);
        setSelectedMovie(null);
      });
  };

  return (
    <div>
      <h1>Movie Search App</h1>
      <SearchForm onSearch={handleSearch} />
      {selectedMovie && <MovieDetails movie={selectedMovie} />}
    </div>
  );
}

export default App;
