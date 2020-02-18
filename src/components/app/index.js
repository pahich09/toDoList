import React, { Component } from 'react';
import './style.css';
import { Button, Container, Row, Col } from 'react-bootstrap';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [
        { id: Math.random(), title: 'Task #1', description: 'description Task#1', isDone: false },
        { id: Math.random(), title: 'Task #2', description: 'description Task#2', isDone: false },
        { id: Math.random(), title: 'Task #3', description: 'description Task#3', isDone: false },
        { id: Math.random(), title: 'Task #4', description: 'description Task#4', isDone: false },
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
      <Container>
        <Row>
          <Col xs={12}>
            <h1>Todo List App</h1>
          </Col>
          <Col xs={12}>
            <form
              onSubmit={this.addNewTaskHendler}
            >
              <input type="text" name="task" placeholder="Enter new task" />
              <input type="text" name="description" placeholder="Enter description" />
              <Button variant="info">Add task</Button>

            </form>
          </Col>
          <Col xs={12}>
            <ul>
              {
                tasks.map(el => (
                  <li key={el.id} className={el.isDone ? 'task_done' : null
                  }><b>{el.title}</b> <br />
                    <span>{el.description}</span>
                    {
                      !el.isDone ? <button onClick={
                        () => { this.setTaskToDoneHandler(el.id) }
                      }>Make done</button> : <button onClick={
                        () => { this.removeTaskHandler(el.id) }
                      }>Remove task</button>
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
