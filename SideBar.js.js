import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div className='sidebar'>
          <ol>
            <li>Home</li>
            <li>Explore</li>
            <li>Subscriptions</li>
          </ol>
          <ol>
            <li>Library</li>
            <li>History</li>
          </ol>
          <p className='signInHeader'>Sign in to like videos, comment, and subscribe</p>
          <button>Press this</button>

          <h5>BEST OF YOUTUBE</h5>
          <ol>
              <li>Music</li>
              <li>Sports</li>
              <li>Gaming</li>
              <li>Movies</li>
              <li>News</li>
              <li>Live</li>
              <li>360 Videos</li>
          </ol>
          
          <h5>MORE FROM YOUTUBE</h5>
          <ol>
            <li>YouTube Premium</li>
            <li>Live</li>
          </ol>
          <ol>
            <li>Settings</li>
            <li>Report History</li>
            <li>Help</li>
            <li>Send feedback</li>
          </ol>
        </div>

      </header>
    </div>
  );
}

export default App;
