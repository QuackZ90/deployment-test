import logo from './logo.svg';
import './App.css';


const env = process.env.REACT_APP_ENV;

let config = {
  baseURL:"http://localhost/",
}


switch (env.toUpperCase()){
  case "STAGE":{
    config.baseURL = "https://stage.QuackZ90.github.io/deployment-test";
    break;
  }

  case "PRODUCTION":{
    config.baseURL = "https://QuackZ90.github.io/deployment-test";
    break;
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
