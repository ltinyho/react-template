import React from 'react';
import PropTypes from 'prop-types';
import {} from 'react-redux'
const Todo = ({ id, text, completed, onClick }) => {
  return (
      <li onClick={onClick} style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {id} - {text}
      </li>
  );
};





const AddToDo = ({ addHandler }) => {
  let input;
  return (
      <div>
        <input ref={node => {
          input = node;
        }} type="text"/>
        <input type="button" onClick={(e) => addHandler(input)} value={`add`}/>
      </div>
  );
};

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    case 'SHOW_ALL':
    default:
      return todos
  }
}
const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    }
  }
}

export default class Lesson extends React.Component {
  constructor(props) {
    super();
    this.state = {
      filter: 'all',
      todos: [
        {
          id: 1,
          completed: false,
          text: 'study react',
        },
      ],
    };
  }

  componentWillReceiveProps() {
    console.log('unMount');
  }

  componentWillMount() {
  }

  componentWillUnMount() {
    console.log('unMount');
  }

  componentDidMount() {
    console.log(1);
  }

  toggleToDo    = (id, e) => {
    const todos = this.state.todos.map(todo => {
      return todo.id !== id ? todo : Object.assign({}, todo, { completed: !todo.completed });
    });
    console.log(id, e);
    console.log(todos);
    this.setState({
      todos,
    });
  };
  addTodo       = (input) => {
    const prevTodos = this.state.todos;

    this.setState({
      todos: [...prevTodos, { id: prevTodos.length + 1, text: input.value, completed: false }],
    });
    input.value = '';
    input.focus();
  };
  filter        = (filter) => {
    console.log(filter);
    this.setState({
      filter,
    });
  };
  findCompleted = () => {

  };
  findDone      = () => {

  };

  getFilterTodos(filter) {
    const todos = this.state.todos;
    switch (filter) {
      case 'all': {
        return todos;
      }
      case 'done': {
        return todos.filter(todo => todo.completed);
      }
      case 'undo': {
        return todos.filter(todo => !todo.completed);
      }
        break;
    }
  }

  render() {
    const { todos }   = this.state;
    const filterTodos = this.getFilterTodos(this.state.filter);
    return (
        <div>
          <AddToDo addHandler={this.addTodo}></AddToDo>
          {
            filterTodos.map(todo =>
                <Todo key={todo.id} {...todo} onClick={(e) => this.toggleToDo(todo.id, e)}></Todo>,
            )
          }

          <div>
            <span onClick={() => this.filter('all')}>all</span>
            <br/>
            <span onClick={() => this.filter('done')}>completed</span>
            <br/>
            <span onClick={() => this.filter('undo')}>undo</span>
          </div>
        </div>
    );
  }
}
