import logo from './logo.svg';
import './App.css';
import Hello from './Hello.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello />
        <p>
          Hyunmo Kang's React Page!
        </p>
        <a href="https://github.com/22100026/2024OSS-4-1" className="git-link">Git Hub</a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
