import React from 'react'
import data from './data/products.json'
import './ProductTable.css'

const ProductTable = () => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>圖片</th>
            <th>名稱</th>
            <th>價格</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map(item => {
              return (
                <tr key={item?.id}>
                  <td>{item?.id}</td>
                  <td><img src={item?.picture} alt="Logo" /></td>
                  <td>{item?.name}</td>
                  <td>{item?.price}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default ProductTable
