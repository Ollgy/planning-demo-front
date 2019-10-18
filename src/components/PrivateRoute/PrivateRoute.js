import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
  render() {
    const { component: RouteComponent, userPermission, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={routerProps =>
          userPermission === 'manager' ? (
            <RouteComponent {...routerProps} userPermission={userPermission} />
          ) : (
            <Redirect to="/" />
          )
        }
      />
    );
  }
}

export default PrivateRoute;
