import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash)
  console.log(cash)

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
