import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <Router>
        <p>TrybeTunes</p>
        <Link to="/"> Login </Link>
        <Link to="/search"> Search </Link>
        <Link to="/album/:id"> Album </Link>
        <Link to="/favorites"> Favorites </Link>
        <Link to="/profile"> Profile </Link>
        <Link to="/profile/edit"> Edit Profile </Link>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/search" component={ Search } />
          <Route exact path="/album/:id" component={ Album } />
          <Route exact path="/favorites" component={ Favorites } />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/profile/edit" component={ ProfileEdit } />
          <Route component={ NotFound } />
        </Switch>
      </Router>
    );
  }
}

export default App;
