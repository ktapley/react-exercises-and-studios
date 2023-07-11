import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList.js';
import ChoresList from './components/ChoresList.js';
import BookList from './components/BookList.js';
import HobbyLinks from './components/HobbyLinks';

function App() {
  return (
    <div className="App">
      <MovieList />
      <ChoresList />
      <BookList />
      <HobbyLinks />
    </div>
  );
}

export default App;
