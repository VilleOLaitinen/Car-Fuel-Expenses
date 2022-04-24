import { useState } from 'react'
import Header from './components/Header'
import { ExpenseContext } from './Contexts/ExpenseContext'

const App = (props) => {
  const [state, setState] = useState(0)

  return (
    <div>
      <ExpenseContext.Provider value={{ state, setState }}>
        <Header header='Car fuel expenses' />
        <form></form>
      </ExpenseContext.Provider>
    </div >
  )
}

export default App;
