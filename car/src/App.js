import { useState } from 'react'
import Header from './components/Header'
import Expenseform from './components/Expenseform'
import { ExpenseContext } from './Contexts/ExpenseContext'

const App = (props) => {
  const [name, setName] = useState('')
  const [liters, setLiters] = useState('')
  const [distance, setDistance] = useState('')
  const [price, setPrice] = useState('')

  return (
    <div>
      <ExpenseContext.Provider value={{
        name, setName, liters, setLiters, distance, setDistance, price, setPrice
      }}>
        <Header header='Car fuel expenses' />
        <Expenseform />
      </ExpenseContext.Provider>
    </div >
  )
}

export default App;
