import React, { useState } from 'react'

const initialProducts = [
  {
    id: 0,
    name: '小熊餅乾',
    count: 1
  },
  {
    id: 1,
    name: '巧克力豆餅乾',
    count: 5
  },
  {
    id: 2,
    name: '小老板海苔',
    count: 2
  }
]

function ShoppingCart () {
  const [products, setProducts] = useState(initialProducts)

  const handleIncrement = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, count: product.count + 1 } : product
      )
    )
  }
  const handleDecrement = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, count: product.count - 1 } : product
      )
    )
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button onClick={() => handleIncrement(product.id)}>+</button>
          <button onClick={() => handleDecrement(product.id)}>–</button>
        </li>
      ))}
    </ul>
  )
}

export default ShoppingCart
