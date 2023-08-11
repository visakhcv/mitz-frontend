import React from 'react'

function Productstable({product,name,price}) {
  return (
    <>
        <tr>
          <td>{product}</td>
          <td>{name}</td>
          <td>{price}</td>
        </tr>
    </>
  )
}

export default Productstable