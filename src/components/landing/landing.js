import React, { Component } from 'react';
import './landing.scss';

class Landing extends Component {

  constructor() {
    super();
    this.state = {
      items: [
        {
          id: 1,
          name: 'Todo 1'
        }
      ]
    }
  }

  addTodo(data, event) {
    if (event.charCode === 13 && event.target.value.length > 0) {
      let newTodo = { id: data.length + 1, name: event.target.value };
      data.push(newTodo);
      this.setState({ items: data });
      event.target.value = '';
    }
  }

  removeTodo(id) {
    for (let i = 0; i < this.state.items.length; i++) {
      if (this.state.items[i].id === id) {
        this.state.items.splice(i, 1);
      }
    }
    this.setState({ items: this.state.items });
  }

  render() {
    let todos = this.state.items.map((todo) => {
      return <li key={todo.id}>{todo.name} <a href="#" onClick={this.removeTodo.bind(this, todo.id)}>X</a></li>;
    });

    return (
      <div className="todo-container">
        <input type="text" placeholder="enter you data" onKeyPress={this.addTodo.bind(this, this.state.items)} />
        <ul className="todo-list">
          {todos}
        </ul>
      </div>
    )
  }
}

export default Landing;