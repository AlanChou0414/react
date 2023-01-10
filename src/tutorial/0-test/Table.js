import React from 'react'

const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>TITLE</th>
          <th>LINK</th>
        </tr>
      </thead>
      <tbody>
        {
          data.hits.map(item => {
            return (
              <tr key={item.objectID}>
                <td>{item.title}</td>
                <td><a href={item.url}>{item.url}</a></td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default Table
