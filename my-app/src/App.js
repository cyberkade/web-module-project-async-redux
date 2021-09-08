import './App.css';
import {Switch, Route} from 'react-router-dom'
import Genre from './Genre';
import Home from './Home';

const App = () => {
  return (
    <Switch>
      <Route exact path={"/"} >
        <Home />
      </Route>
      <Route path={"/genre"}>
        <Genre />
      </Route>
    </Switch>
  );
}

export default App;
