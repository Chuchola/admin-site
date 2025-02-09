import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { AppState } from '../services/App/interfaces/AppState';
import { RouteParams } from './RouteParams';

interface RouteComponentProps {
  location: any;
  route: RouteParams;
  match: any;
}

const RouteComponentRenderer = (props: RouteComponentProps) => {
  const {
    route,
    match,
    location,
  } = props;

  const {
    component: RouteComponent,
    extraProps,
  } = route;

  return (
    <RouteComponent
      params={match.params}
      location={location}
      {...extraProps}
    />
  );
}

const mapStateToProps = (_state: AppState) => {
  return {
  };
};

export default compose(
  connect(mapStateToProps)
)(RouteComponentRenderer);
