import './App.css';

import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './pages';
import Demo from './pages/Demo';
function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/:title" component={Demo}/>
    </Switch>
    </Router>
  );
}

export default App;