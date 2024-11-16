import './App.css';

import TodoList from './components/TodoList';

const App = () => {
  return (
    <div className="container text-center">
      <div className="row">
        <h1 className="text-info mt-5 mb-3">The Hooks of react js</h1>
        <TodoList />
      </div>
    </div>
  );
};

export default App;
// eslint-disable-next-line
// https://www.youtube.com/playlist?list=PL0Zuz27SZ-6PCLz7VMP2QQdeKa83rshe5
