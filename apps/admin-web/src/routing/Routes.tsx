import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import { RouteParams } from './RouteParams';

import RouteComp from './Route';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

interface RoutesProps {
  routes: RouteParams[];
}

const Routes = (props: RoutesProps): React.ReactElement => {
  const {
    routes,
  } = props;

  const toRouteComponent = (route: RouteParams) => {
    const renderProps = {
      route,
    };

    const isExact = route.isExact != null ? route.isExact : true;
    return (
      <Route
        key={route.name}
        path={route.path}
        exact={isExact}
        render={matchProps => (
          <RouteComp
            {...renderProps}
            match={matchProps.match}
            location={matchProps.location}
          />
        )}
      />
    );
  };

  return (
    <Switch>
      {routes.map(toRouteComponent)}
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default withRouter(Routes as any) as any;
