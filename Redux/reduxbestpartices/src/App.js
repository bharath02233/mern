import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import Counter from './Counter';
import TodoComp from './TodoComp';
import store from './store';
function App() {
  return (
   <Provider store={store}>
    <Counter></Counter>
    <TodoComp></TodoComp>
   </Provider>

  )
}

export default App;
