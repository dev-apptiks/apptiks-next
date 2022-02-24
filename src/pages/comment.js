import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function Comment() {
    const [comment, setcomment] = useState('');

    const submitValue = async()=>{
        //alert("from submitValue")
        console.log('comment is',comment);
       const response = await fetch('/api/comment',{
           method: "POST",
           body: JSON.stringify({abc:comment}),
           headers:{
               'Content-type':'application/json'
           }
       } )
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
      <TextField id="outlined-basic" label="Outlined" variant="outlined"
       value={comment} 
       onChange={(e)=> setcomment(e.target.value)}

      />
      <Button variant="contained" onClick={submitValue}>Contained</Button>
      
    </Box>
  );
}
