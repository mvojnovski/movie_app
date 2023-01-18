import './App.css';
import { useEffect } from 'react';

//ed418a88ed418a88

const API_URL = 'http://www.omdbapi.com?apikey=ed418a88';

function App() {

  const searchMovies = async (title) => {
    const response = await fetch (`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  }

  useEffect(() => {
     searchMovies('Superman');
  }, []);

  return (
    <div className="App">

    </div>
  );
}

export default App;
