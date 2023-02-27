import { useState } from 'react'
import Sidebar from './layouts/Sidebar'
import EditPanel from './layouts/EditPanel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Sidebar />
      <EditPanel />
    </div>
  )
}

export default App
