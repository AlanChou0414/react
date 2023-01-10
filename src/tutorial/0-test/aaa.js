//! 要用 useState  要先import 進來
import React, { useState } from 'react'
import './Table.css'

function ATable () {
  //! 沒有 rerender 的原因是 React 只會偵測你的 function component 有改變才會 rerender
  //! 如果你將 fetch api 的 function 寫在 ATable() 外面
  //! 第一次進入頁面他會 render 但是之後因為是在 ATable() 外面 所以他不會 rerender

  //! 竟量不要讓你的 Data 成為隨時可以改變的變數 下const會比較好
  // let MyData

  //! 因為你下面使用 data.hits.map 所以你的 data 初始值要設定 useState({hits:[]}) 要注意 api 回傳的 json 格式
  const [data, setData] = useState({ hits: [] })

  function GetData () {
    fetch('https://hn.algolia.com/api/v1/search?query=redux')
      .then((r) => r.json())
      .then((data) => {
        // MyData = data
        //! 將傳出來的 data 用 setData(data) 放入 data{hits:[ 這裡 ]}
        setData(data)
      })
  }
  GetData()

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>TITLE</th>
            <th>LINK</th>
          </tr>
        </thead>
        <tbody>
          {data.hits.map((v, i) => {
            return (
              //! 在 React 下 map 需要給key 你就想,
              //! 如果今天你是要做一個todo list,
              //! 那他 map 出來每一個 v 都是一個todo 就應該要給key 你要做刪除功能才能抓到要刪除哪一個。
              <tr key={v?.objectID || null}>
                <td>{v?.title || null}</td>
                <td>{v?.url || null}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default ATable
