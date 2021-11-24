import logo from './logo.svg';
import './App.css';
const { REACT_APP_MY_ENV, NODE_ENV, REACT_APP_FRUITS } = process.env;

const API_URL =
  NODE_ENV === 'production' ? window.API_URL : process.env.REACT_APP_API_URL;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          <li>My env: {REACT_APP_MY_ENV}</li>
          <li>API: {API_URL}</li>
          <li>{REACT_APP_FRUITS}</li>
        </ul>
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
