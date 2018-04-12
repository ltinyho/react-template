import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      name: 'yrd',
    };
  }

  render() {
    return (
        <div>
          {this.state.name}
        </div>
    );
  }
}