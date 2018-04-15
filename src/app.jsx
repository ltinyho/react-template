import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link, Redirect, Switch, BrowserRouter as Router } from 'react-router-dom';
import Lesson from './lesson';

export default class ToToList extends React.Component {
  state = {};

  render() {
    return (
        <div>
          <Link to={`/lesson`}>Lesson</Link>
          <Route path={`/lesson`} component={Lesson}></Route>
        </div>
    );
  }
}

