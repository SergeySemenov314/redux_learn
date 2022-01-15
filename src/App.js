import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)
 
  const addCash = (cash) => {
    dispatch({type: 'ADD_CASH', payload: cash})

  }

  const getCash = (cash) => {
    dispatch({type: 'GET_CASH', payload: cash})
    
  }

  const addCustomer = (name) => {
      let customer = {
          id: Date.now(),
          name
      }
      dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer) => {
      dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className="app">
      <div style={{fontSize: '3rem'}}>{cash}</div>
      <div style={{display: 'flex'}}>
        <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
        <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
        <button onClick={() => addCustomer(prompt())}>Добавить клинта</button>
        <button onClick={() => getCash(Number(prompt()))}>Удалить клиента</button>
      </div>
      {customers.length
        ?
        <div>
            {customers.map(customer => 
               <div key = {customer.id} onClick={() => removeCustomer(customer)}>{customer.name}</div> 
            )}
        </div>
        :
        <div>
            Клинтов пока нет
        </div>
    }
      
    </div>
  );
}

export default App;
