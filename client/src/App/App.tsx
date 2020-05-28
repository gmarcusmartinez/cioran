import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import '../styles/main.scss';
import Landing from '../pages/Landing/Landing';
import Project from '../pages/Project/Project';
import Dashboard from '../pages/Dashboard/Dashboard';
import { getCurrentUser, ICurrentUser } from '../store/actions';

interface AppProps {
  getCurrentUser: Function;
  currentUser: ICurrentUser;
}

const App: React.FC<AppProps> = ({ getCurrentUser, currentUser }) => {
  React.useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  return (
    <Switch>
      <Route exact path='/' render={() => <Landing user={currentUser} />} />
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/project/:id' component={Project} />
    </Switch>
  );
};

const mapStateToProps = (state: any) => ({
  currentUser: state.auth.currentUser,
});

export default connect(mapStateToProps, { getCurrentUser })(App);
