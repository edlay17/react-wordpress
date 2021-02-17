import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
   <Router>
    <div className="App">
      <header className="App-header">
        <Link className="App-link"  to="/one">Home</Link>
        <Link className="App-link"  to="/two">Home</Link>
        <Link className="App-link"  to="/three">Home</Link>
      </header>
      <Switch>
        <Route path="/one">
          1
        </Route>
        <Route path="/two">
          2
        </Route>
        <Route path="/three">
          3
        </Route>
      </Switch>
    </div>
   </Router>
  );
}

export default App;
