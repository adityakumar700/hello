import { useState } from 'react'
import Todos from './components/Todo'
import AddTodo from './components/AddTodo'
function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <h1>Learn it!</h1>
    <AddTodo/>
    <Todos/>
    </>
  )
}

export default App
