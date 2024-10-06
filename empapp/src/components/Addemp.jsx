import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Addemp = (props) => {
  var [input, setInput] = useState({ Name: "", Age: "", Dept: "", Sal: "" })
  var location = useLocation
  var navigate = useNavigate
  console.log(location.state)


  const inputHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
    console.log(input)
  }
  const addHandler = () => {
    if (location.state !== null) {
      axios.put("http://localhost:3004/update" + location.state.val._id, input)
        .then((res) => {
          alert(res.data.message)
          navigate('/')
        })
        .catch((err) => { console.log(err) })
    }
    else {
      axios.post("http://localhost:3004/add", input)
        .then((res) => {
          console.log(res)
          alert(res.data.message)
          navigate('/')
        })
    }
  }


  useEffect(() => {
    if (location.state !== null) {
      setInput({
        ...input,
        Name: location.state.val.Name,
        Age: location.state.val.Age,
        Dept: location.state.val.Dept,
        Sal: location.state.val.Sal
      })
    }
  },[])



  return (
    <div>
          <h1>New Employees</h1>
      <TextField id="outlined-basic" label="Name" variant="outlined"
      value={input.Name} onChange={inputHandler} name="Name"/><br /><br />
      <TextField id="outlined-basic" label="Age" variant="outlined"
        value={input.Age} onChange={inputHandler} name="Age"/><br /><br />
      <TextField id="outlined-basic" label="Department" variant="outlined"
        value={input.Dept} onChange={inputHandler} name="Dept"/><br /><br />
      <TextField id="outlined-basic" label="Salary" variant="outlined"
        value={input.Sal} onChange={inputHandler} name="Sal"/><br /><br />
          <Button variant="Contained" onClick={addHandler}>Add</Button>
    </div>
  )
}

export default Addemp
