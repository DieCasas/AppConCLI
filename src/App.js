import hambur from './hambur.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={hambur} className="App-logo" alt="logo" />
        <p>
          Futuro E-Commerce sobre comida
        </p>
        <p>
          Diego Casas
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Don´t Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
