import React, {useState} from 'react';
import MovieList from './Components/MovieList.js';
import Filter from './Components/Filter.js';
import AddMovie from './Components/AddMovie.js';

const initMovies = [
  {
    title: "The House of Gaunt",
    description: "Short Movie",
    posterUrl: "https://media-cache.cinematerial.com/p/500x/iegql2nv/the-house-of-gaunt-international-movie-poster.jpg?v=1612943017",
    rating: "9.3/10"
  },
  {
    title: "Supernatural",
    description: "Supernatural, Horror American Drama",
    posterUrl: "https://m.media-amazon.com/images/I/51sBiWAAPmL._AC_.jpg",
    rating: "8.4/10"
  },
  {
    title: "Teen Wolf",
    description: "Supernatural, Horror American Drama",
    posterUrl: "https://m.media-amazon.com/images/I/81wCYrs1o3L._AC_SL1500_.jpg",
    rating: "7.6/10"
  },
  {
    title: "Gran Hotel",
    description: "Spanish Drama",
    posterUrl: "https://static.tvtropes.org/pmwiki/pub/images/84f33fb99c99b4756b2bce7476a3ac14.jpg",
    rating: "8.4/10"
  },
  {
    title: "Merlin",
    description: "Drama",
    posterUrl: "https://m.media-amazon.com/images/I/91w3r4YEgHL._AC_SY679_.jpg",
    rating: "7.9/10"
  },
  {
    title: "Rick and Morty",
    description: "Sitcom",
    posterUrl: "https://m.media-amazon.com/images/I/81LBzgzf0iL._AC_SY741_.jpg",
    rating: "9.2/10"
  },
  {
    title: "The Umbrella Academy",
    description: "Drama",
    posterUrl: "https://ghostwriter121.files.wordpress.com/2020/08/ua_s2_vertical_main_rgb_en-us-1.jpg",
    rating: "8/10"
  },
  {
    title: "How to Get Away with Murder",
    description: "Drama",
    posterUrl: "https://i.redd.it/fkxt3x7llkkz.jpg",
    rating: "8.1/10"
  }
];

function App() {
  const [movies, setMovies] = useState(initMovies);
  //const [movieName, setName] = useState('');

  const addMovies = (movieTitle, movieDesc, moviePoster) =>{
    setMovies(m => [...m, {
      title: movieTitle,
      description: movieDesc,
      posterUrl: moviePoster
    }]);
    //console.log(movies);
  }

  const resetState = () => {
    setMovies(initMovies);
  }

  const filterRate = (rate) => {
    //filter movies based on rate value
    setMovies(movies.filter(movie => movie.rating && (parseInt((movie.rating.split('/'))[0]) >= rate)));
  }

  const filterSearch = (movieName) => {
    //filter movies based on title
    setMovies(movies.filter(movie => (movie.title.toLowerCase().includes(movieName.toLowerCase()))));
  }

  return (
    <div className="container">
      <Filter movies={movies} initMovies={initMovies} filterRate={filterRate} filterSearch={filterSearch} reset={resetState}/>
      <MovieList movies={movies} />
      <AddMovie movies={movies} addMovies={addMovies}/>
    </div>
  );
}

export default App;
