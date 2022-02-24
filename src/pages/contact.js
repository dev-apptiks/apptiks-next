

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Button } from '@mui/material';

export default function Contact() {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');

    const submitValue =async()=>{
       // alert('frm contact sub')
       // console.log(name,email)
        const contact = {name:name,email:email}

       const response = await fetch('/api/contact',{
            method:'POST',
            body: JSON.stringify({abc:contact}),
            headers:{
                'Content-type':'application/json'
            }
        })
        const data = await response.json()
        console.log("from comment submitvalue-----------",data)

        
    }
    
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
      <TextField id="standard-basic" label="Name" variant="standard" 
      value={name}
      onChange={(e)=>setname(e.target.value)}
     
      />
      <TextField id="standard-basic" label="Email" variant="standard"
      value={email}
      onChange={(e)=>setemail(e.target.value)} />
      <Button variant="contained" onClick={submitValue}>Submit</Button>

    </Box>
  );
}