import React, { Component } from 'react';
import './style.css';
import { Button, Container, Row, Col } from 'react-bootstrap';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [
        { id: Math.random(), title: 'Task #1', isDone: false },
        { id: Math.random(), title: 'Task #2', isDone: false },
        { id: Math.random(), title: 'Task #3', isDone: false },
        { id: Math.random(), title: 'Task #4', isDone: false },
      ],
    };
    this.addNewTaskHendler = e => {
      e.preventDefault();
      console.log(this.state.tasks)
      this.setState({
        tasks: [
          ...this.state.tasks,
          { id: Math.random(), title: e.target[0].value, isDone: false }
        ]
      })
      e.target[0].value = '';
    };

    this.setTaskToDoneHandler = task_id => {
      this.setState({
        tasks: [
          ...this.state.tasks.map(el => el.id == task_id ? { ...el, isDone: true } : el)
        ]
      })
    }
    this.removeTaskHandler = task_id => {
      this.setState({
        tasks: [
          ...this.state.tasks.filter(el => el.id != task_id)
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
              <button type="submit">Add task</button>
              <button type="button">Add descripton</button>
            </form>
          </Col>
          <Col xs={12}>
            <ul>
              {
                tasks.map(el => (
                  <li key={el.id} className={el.isDone ? 'task_done' : null
                  }>{el.title}
                    {
                      el.isDone ? null : <button onClick={
                        () => { this.setTaskToDoneHandler(el.id) }
                      }>Make done</button>
                    }
                    {
                      <button onClick={
                        () => { this.removeTaskHandler(el.id) }
                      }>Remove task</button>
                    }
                  </li>
                ))
              }
            </ul>
          </Col>
        </Row>
      </Container >

    );
  }
}

export default App;
