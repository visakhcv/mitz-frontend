import React from 'react'

function Orderoption({customerid,preference,date}) {
  return (
    <>
    <tr>
          <td>{customerid}</td>
          <td>{preference}</td>
          <td>{date}</td>
        </tr>
    </>
  )
}

export default Orderoption