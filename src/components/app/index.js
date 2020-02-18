import React, { Component } from 'react';
import './style.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [
        { id: Math.random(), title: 'Task #1', description: 'Some description for Task#1', isDone: false },
        { id: Math.random(), title: 'Task #2', description: 'Some description for Task#2', isDone: false },
        { id: Math.random(), title: 'Task #3', description: 'Some description for Task#3', isDone: false },
        { id: Math.random(), title: 'Task #4', description: 'Some description for Task#4', isDone: false },
      ],
    };
    this.addNewTaskHendler = e => {
      e.preventDefault();
      this.setState(
        e.target[0].value ?
          {
            tasks: [
              ...this.state.tasks,
              { id: Math.random(), title: e.target[0].value, description: e.target[1].value, isDone: false }
            ]
          } : null)
      e.target[0].value = '';
      e.target[1].value = '';
    };

    this.setTaskToDoneHandler = task_id => {
      this.setState({
        tasks: [
          ...this.state.tasks.map(el => el.id === task_id ? { ...el, isDone: true } : el)
        ]
      })
    }
    this.removeTaskHandler = task_id => {
      this.setState({
        tasks: [
          ...this.state.tasks.filter(el => el.id !== task_id)
        ]
      })
    }
  }


  render() {
    const { tasks } = this.state;

    return (
      <Container className="todo_list">
        <Row>
          <Col xs={6}>
            <h1 className="text-center">Todo List App</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <form
              onSubmit={this.addNewTaskHendler}
            >
              <input type="text" name="task" placeholder="Enter new task" />
              <input type="text" name="description" placeholder="Enter task description" />
              <button><FontAwesomeIcon icon="plus" /></button>

            </form>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <ul>
              {
                tasks.map((el, i) => (
                  <li key={el.id} className={el.isDone ? 'task_done' : null
                  }><div>{i + 1}. <b>{el.title}</b><br />
                      <span>{el.description}</span>
                    </div>
                    {
                      !el.isDone ? <button className="set_done"
                        onClick={
                          () => { this.setTaskToDoneHandler(el.id) }
                        }> <FontAwesomeIcon icon="check" /></button> : <button className="remove_task" onClick={
                          () => { this.removeTaskHandler(el.id) }
                        }><FontAwesomeIcon icon="trash-alt" /></button>
                    }
                  </li>
                ))
              }
            </ul>
          </Col>
        </Row>
      </Container>

    );
  }
}

export default App;
