import React from 'react';
import Lesson from './lesson';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';
import stylted from 'styled-components';

export default class App extends React.Component {
  state = {
    title: 'lzh',
  };

  constructor(props) {
    super();
  }

  handChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <Link to="lesson">lesson</Link>
        <Route exact path="/lesson" component={Lesson} />
      </div>
    );
  }
}
