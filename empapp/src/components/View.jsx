import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'

const View = () => {
  var [user, setUser] = useState([])
  var navigate=useNavigate()

  axios.get("http://localhost:3004/view")
    .then((response) => {
      console.log(response.data)
      setUser(response.data)
    })
  
  

const delvalue = (id) => {
  axios.delete("http://localhost:3004/remove/"+id)
    .then((res) => {
      alert(res.data.message)
      window.location.reload()
    })
}
  
  const updatevalue = (val) => {
    navigate("/add",{state:{val}})
  }
  
  return (
    <div>
      <h1>Employees</h1>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow > 
              <TableCell>NAME</TableCell>
              <TableCell>AGE</TableCell>
              <TableCell>DEPARTMENT</TableCell>
              <TableCell>SALARY</TableCell>
              <TableCell>DELETE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user.map((val) => {
              return (  
                <TableRow>
                  <TableCell>{ val.Name}</TableCell>
                  <TableCell>{ val.Age}</TableCell>
                  <TableCell>{ val.Dept}</TableCell>
                  <TableCell>{val.Sal}</TableCell>
                  <TableCell>
                    <Button onClick={() => {
                          delvalue (val._id)}}>DELETE</Button>
                    <Button onClick={() => {
                      updatevalue(val)
                    }}>UPDATE</Button>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default View
