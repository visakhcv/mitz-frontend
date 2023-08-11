import React from 'react'

function Customerprefoption({preference,product}) {
  return (
    <>
    <tr>
          <td>{preference}</td>
          <td>{product}</td>
        </tr>
    </>
  )
}

export default Customerprefoption