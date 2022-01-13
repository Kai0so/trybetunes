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
        <div>
          <p>TrybeTunes</p>
          <li><Link to="/"> Login </Link></li>
          <li><Link to="/search"> Search </Link></li>
          <li><Link to="/album/:id"> Album </Link></li>
          <li><Link to="/favorites"> Favorites </Link></li>
          <li><Link to="/profile"> Profile </Link></li>
          <li><Link to="/profile/edit"> Edit Profile </Link></li>
          <Switch>
            <Route exact path="/" component={ Login } />
            <Route exact path="/search" component={ Search } />
            <Route exact path="/album/:id" component={ Album } />
            <Route exact path="/favorites" component={ Favorites } />
            <Route exact path="/profile" component={ Profile } />
            <Route exact path="/profile/edit" component={ ProfileEdit } />
            <Route component={ NotFound } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
