
import store from './store';
import { Provider } from 'react-redux';
import Counter from './Counter';
import TodoComp from './TodoComp';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <Counter></Counter>
    <TodoComp></TodoComp>
    </div>
    </Provider>
  );
}

export default App;
