import React, { useState } from 'react'
//* import Counter from './0109/1-counter/Counter'
//* import Link from './0109/2-map/Link'
//* import ProductTable from './tutorial/3-product/ProductTable'
//* import ExpressCount from './tutorial/4-express/express-count'
import State from './tutorial/5-state/State'

const App = () => {
  const [test, setTest] = useState(0)
  return (
    <>
      <State test={test} setTest={setTest} />
    </>
  )
}

export default App
