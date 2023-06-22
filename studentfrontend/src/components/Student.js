import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState,useEffect } from 'react';
import Button from '@mui/material/Button';
import  Alert  from "@mui/material/Alert";

export default function Student() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [students,setStudents] = useState([])
  const [status,setStatus] = useState({isSuccess: 0,message: null})
  const [reload,setReload] = useState(null)

  const handleClick = (e) => {
    e.preventDefault();
    const student = { name, address };
    fetch("http://localhost:8080/student/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student)
      })
      .then( r => r.text())
  .then((result) => {
    setStatus({isSuccess: 1,message:result})
  })
  .catch((error) => setStatus({isSuccess:2,message:"Failed to store result"}));

  };

  useEffect( () => {
    fetch("http://localhost:8080/student/getAll")
    .then(res=> res.json())
    .then( (result)  => {setStudents(result);setName(result.length)})
  },[status]) 

  return (
    <>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Student Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Student Address"
          variant="outlined"
          fullWidth
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <Button variant="contained"
          onClick={handleClick}
        >Submit</Button>
      </Box>
      <Box>
        {
          status.isSuccess != 0 ? 
          <Alert color= {status.isSuccess == 1 ? 'success' :'error'}> {status.message}</Alert>
          : null
        }
      </Box>

    </>
  );
}
