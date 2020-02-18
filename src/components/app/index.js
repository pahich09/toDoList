import React from 'react';

const App = () => {
  return (
    <div className="">
      <h1>Todo List App</h1>
      <form>
        <input type="text" />
        <button>Add task</button>
      </form>
      <div>
        <ul>
          <li>Task #1</li>
          <li>Task #2</li>
          <li>Task #3</li>
          <li>Task #4</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
