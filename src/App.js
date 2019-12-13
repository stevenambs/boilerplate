import React, { useState } from 'react'
import Child from './Child'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>App has {Math.random()}</h1>
      <span>App count has {count}</span>
      <div>
        <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      </div>
      <Child />
    </div>
  )
}

export default App
