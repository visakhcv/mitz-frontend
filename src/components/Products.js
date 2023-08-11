import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Productstable from './Productstable';
import axios from '../axios';



function Products() {
    const [product, setProduct] = useState([])

  useEffect(() => {
    const getproducts = async () => {
      await axios.get('/products')
        .then((result) => {
          console.log(result.data);
          setProduct(result.data)
        })
    }
    getproducts()
  }, [])
  return (
    <>
    <h4>products</h4>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>product id</th>
                <th>name</th>
                <th>price</th>
              </tr>
            </thead>
            <tbody>
              {product?.map((i) =>
                <Productstable product={i.productid} name={i.name} price={i.price} />
              )
              }
            </tbody>
          </Table>
    </>
  )
}

export default Products