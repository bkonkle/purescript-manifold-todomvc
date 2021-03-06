import {todo as Todo} from '../Components/Todo.purs'
import React, {Component} from 'react'

export default class Todos extends Component {
  render () {
    const {allCompleted, todos, empty, toggleCompleteAll} = this.props

    // Hide this section entirely if there are no todos
    if (empty) return null

    return (
      <section id="main">
        <input className="toggle-all"
          type="checkbox"
          name="toggle"
          checked={allCompleted}
          onChange={toggleCompleteAll} />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {todos && todos.map(todo => <Todo todo={todo} key={todo.id} />)}
        </ul>
      </section>
    )
  }
}
