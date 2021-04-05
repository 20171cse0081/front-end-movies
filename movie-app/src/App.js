import logo from './logo.svg';
import './App.css';
import { Router, Route, Switch } from 'react-router-dom';
import ViewMovie from './components/movie/ViewMovie';
import AddMovie from './components/movie/AddMovie';
import random1 from './components/movie/random';
import hist from './hist';
import UpdateMovie from './components/movie/UpdateMovie';
import ViewMovieByTheatreId from './components/movie/ViewMovieByTheatreId';

function App() {
  return(
 <Router history={hist} >
      
      <div>
        <Switch>
          
          <Route exact path='/movie/addMovie' component={AddMovie} />
          <Route exact path='/movie' component={ViewMovie} />

          <Route exact path='/movie/:id' component={UpdateMovie} />
          
          <Route exact path='/' component={random1} />

          <Route exact path='/theatre/' component={ViewMovieByTheatreId} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
