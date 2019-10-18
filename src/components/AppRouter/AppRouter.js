import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from '../Dashboard';
import Profile from '../Profile';
import Notes from '../Notes';
import Staff from '../Staff';
import PrivateRoute from '../PrivateRoute';
import styles from './AppRouter.module.css';

const AppRouter = ({ user }) => (
  <div className={styles.content}>
    <Switch>
      <Redirect from exact path="/" to="/dashboard" />
      <Route path="/dashboard" render={() => <Dashboard userId={user.id} />} />
      <Route path="/profile" render={() => <Profile user={user} />} />
      <Route path="/notes" render={() => <Notes user={user} />} />
      <PrivateRoute
        path="/staff"
        userPermission={user.position.permission}
        component={Staff}
      />
    </Switch>
  </div>
);

export default AppRouter;
