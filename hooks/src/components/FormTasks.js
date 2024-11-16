import React, { useState } from 'react';

const FormTasks = ({ addNewTasks }) => {
  const [addTheTask, setaddTheTask] = useState('');

  console.log(addTheTask, setaddTheTask);

  const handleSubmit = event => {
    event.preventDefault();
    addNewTasks(addTheTask);
    setaddTheTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="card card-body bg-light">
        <div className="form-group">
          <label>Add a few tasks</label>
          <input
            type="text"
            className="form-control"
            value={addTheTask}
            onChange={event => setaddTheTask(event.target.value)}
          />
          <input
            className="btn btn-success mt-3"
            type="submit"
            value="validate"
          />
        </div>
      </div>
    </form>
  );
};

export default FormTasks;
