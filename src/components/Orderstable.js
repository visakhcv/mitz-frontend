import axios from '../axios'
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Orderoption from './Orderoption';


function Orderstable() {

    const [order,setOrder]=useState([])

    useEffect(()=>{
        const getorder= async()=>{
            await axios.get('/orders')
            .then((result)=>{
                console.log(result.data);
                setOrder(result.data)
            })
        }
        getorder()
    },[])

  return (
    <>
    <h4>customer_preference</h4>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>customer id</th>
                <th>preference</th>
                <th>date</th>
              </tr>
            </thead>
            <tbody>
              {order?.map((i) =>
                <Orderoption  customerid={i.customerid} preference={i.preference} date={i.date} />
              )
              }
            </tbody>
          </Table>
    </>
  )
}

export default Orderstable