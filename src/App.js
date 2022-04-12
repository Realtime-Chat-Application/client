import './App.css';
import io from 'socket.io-client';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import MainPage from './views/main/main';

const socket = io.connect('http://localhost:3001');

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/"><MainPage /></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
