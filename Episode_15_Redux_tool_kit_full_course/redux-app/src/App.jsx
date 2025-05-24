import logo from './logo.svg';
import './App.css';
import AddTodo from './components/Addtodo';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App ">
      <h1>chai aur code learn about redux tool kit</h1>
      <AddTodo/>
      <Todos/>
    </div>
  );
}

export default App;
