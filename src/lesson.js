import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import studySrv from 'kyy-services/src/studyService';
import PropTypes from 'prop-types';

const defaulProps = {
  title: 'lzh',
};
const propTypes = {
  title: PropTypes.string,
};

export default class Lesson extends React.Component {
  state = {
    courseInfo: {},
  };
  static defaultProps = {
    test: 1,

  };

  constructor(props) {
    super();
    console.log(props);
  }

  getCourseInfo() {
    studySrv.getCourseInfo(845).then((res) => {
      if (res.code === 200) {
        this.state.setState({
          courseInfo: res.result.course,
        });
      }
    });
  }

  componentWillReceiveProps() {
  }

  componentWillMount() {
  }

  componentWillUnMount() {
    console.log('unMount');
  }

  componentDidMount() {
    console.log(1);
  }

  shouldComponentUpdate(props, nextState) {
    return true;
  }

  render() {
    return (
      <div>
        {this.props.title}
      </div>
    );
  }
}
Lesson.propTypes = propTypes;
Lesson.defaultProps = defaulProps;
