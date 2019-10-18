import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from '../AppRouter';
import LoginForm from '../LoginForm';
import Preloader from '../Preloader';
import Layout from '../Layout';
import Cap from '../Cap';
import { authFromToken } from '../../modules/Auth';
import { logout } from '../../modules/Login';
import { cleanBase } from '../../modules/CleanBase';
import deleteToken from '../../modules/LoginForm/utils/deleteToken';

class App extends PureComponent {
  async componentDidMount() {
    this.props.authFromToken();
  }

  logout = () => {
    deleteToken();
    this.props.logout();
  };

  cleanBase = () => {
    this.logout();
    this.props.cleanBase();
  };

  render() {
    const { user, isLoading, error } = this.props;

    return (
      <BrowserRouter>
        {isLoading ? (
          <Preloader />
        ) : error ? (
          <Cap text={error.message} />
        ) : (
          <Layout
            section={user ? <AppRouter user={user} /> : <LoginForm />}
            isAuthorized={!!user}
            logout={this.logout}
            cleanBase={this.cleanBase}
            user={user}
          />
        )}
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  user: state.authFromToken.user || state.login.user,
  isLoading: state.authFromToken.isLoading || state.cleanBase.isLoading,
  error: state.authFromToken.error
});

const mapDispatchToProps = dispatch => ({
  authFromToken: () => dispatch(authFromToken()),
  logout: () => dispatch(logout()),
  cleanBase: () => dispatch(cleanBase())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
