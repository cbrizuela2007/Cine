import './App.css';
import './Maquetacion.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Registro from './components/Registro';
import Login from './components/Login';
import Nav from './components/Nav';
import MovieList from './components/MovieList';
import Movie from './components/Movie';
import { Review } from './components/Review';
import ReviewList from './components/ReviewList';

function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<MovieList />}></Route>
          <Route path="/movies/new" element={<Movie />}></Route>
          <Route path="/movies/:_id/review" element={<Review/>}></Route>
          <Route path="/movies/:_id" element={<ReviewList />}></Route>

          <Route path="/registro" element={<Registro />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
