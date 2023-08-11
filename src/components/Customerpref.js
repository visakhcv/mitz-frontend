import axios from '../axios'
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Customerprefoption from './Customerprefoption';

function Customerpref() {

    const [customer,setCustomer]= useState([])

    useEffect(()=>{
        const getcustomerpref= async()=>{
            await axios.get('/customerp')
            .then((result)=>{
                console.log(result.data);
                setCustomer(result.data)
            })
        }
        getcustomerpref()
    },[])

  return (
    <>
    <h4>customer_preference</h4>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>preference id</th>
                <th>product id</th>
              </tr>
            </thead>
            <tbody>
              {customer?.map((i) =>
                <Customerprefoption  preference={i.preferenceId} product={i.productid} />
              )
              }
            </tbody>
          </Table>
    </>
  )
}

export default Customerpref