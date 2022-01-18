import React from 'react';
import { Link } from 'react-router-dom';
import * as userRequests from '../services/userAPI';
import Loading from './Loading';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      registeredUser: '',
    };
  }

  componentDidMount() {
    this.getName();
  }

  getName = () => {
    this.setState({ loading: true }, async () => {
      const registeredUserObject = await userRequests.getUser();
      const result = registeredUserObject.name;
      this.setState({ loading: false, registeredUser: result });
    });
  }

  render() {
    const {
      loading,
      registeredUser,
    } = this.state;

    return (
      loading ? <Loading />
        : (
          <header data-testid="header-component">
            <Link to="/search" data-testid="link-to-search"> Search </Link>
            <Link to="/favorites" data-testid="link-to-favorites"> Favorites </Link>
            <Link to="/profile" data-testid="link-to-profile"> Profile </Link>
            <p data-testid="header-user-name">{`Olá ${registeredUser}`}</p>
          </header>)
    );
  }
}

export default Header;
