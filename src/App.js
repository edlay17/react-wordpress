import logo from './logo.svg';
import './App.css';
import {
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link className="App-link"  to="/one">Home</Link>
        <Link className="App-link"  to="/two">Home</Link>
        <Link className="App-link"  to="/three">Home</Link>
      </header>
    </div>
  );
}

export default App;
