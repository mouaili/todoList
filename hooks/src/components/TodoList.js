import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FormTasks from './FormTasks';

const TodoList = () => {
  // State variables
  const [todo, setTodoList] = useState([
    {
      id: uuidv4(),
      task: 'Learn More react js',
      date: new Date().toLocaleTimeString(),
    },
  ]);

  const [displayErrorMessage, setDisplayErrorMessage] = useState(false);

  const tasks = todo.map(task => {
    return (
      <tr key={task.id}>
        <td>{task.id}</td>
        <th>{task.task}</th>
        <th>{task.date}</th>
      </tr>
    );
  });

  // Function addOneNewTask()

  const addOneNewTask = newTodo => {
    if (newTodo !== '') {
      setTodoList([
        ...todo,
        {
          id: uuidv4(),
          task: newTodo,
          date: new Date().toLocaleTimeString(),
        },
      ]);
      setDisplayErrorMessage(false);
    } else {
      setDisplayErrorMessage(true);
    }
  };

  // Variables
  const todoListTitle =
    todo.length > 1 ? (
      <h2 className="text-success">To create {todo.length} TodoLists </h2>
    ) : (
      <h2 className="text-danger">To create {todo.length} TodoList </h2>
    );

  // return
  return (
    <div className="col">
      {todoListTitle}
      <table className="table table-success table-striped-columns">
        <thead>
          <tr>
            <th>Id</th>
            <th>Tasks</th>
            <th>Hour</th>
          </tr>
        </thead>
        <tbody>{tasks}</tbody>
      </table>
      {displayErrorMessage && (
        <div className="alert alert-warning m-5" role="alert">
          Please, you should add one task..!
        </div>
      )}
      <FormTasks addNewTasks={addOneNewTask} />
    </div>
  );
};

export default TodoList;
