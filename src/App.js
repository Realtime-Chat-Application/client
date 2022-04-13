import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import MainPage from './views/main/main';

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
