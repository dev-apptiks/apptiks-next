import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function Comment() {
    const [comment, setcomment] = useState('');
    const [feedback, setfeedback] = useState('')

    const submitValue = async()=>{
        //alert("from  ")
        console.log('comment is',comment);
        console.log('feedback is',feedback);

        let payload ={comment:comment,feedback:feedback}

        // let input ={in:payload}

        // let obj ={data:input}

        // {data:{
        //   in:{
        //     comment:'aaa',
        //     feedback:'bbb'
        //   }
        // }}
        

      
       // console.log(obj)
      //  {data:{comment:'abc',feedback:'xyz'}};
        
       
        const response = await fetch('https://us-central1-apptiks-firebase-api.cloudfunctions.net/user/addComment',{
           method: "POST",
           body: JSON.stringify(payload),
           headers:{
               'Content-type':'application/json'
           }
       });
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
      <TextField id="outlined-basic" label="Comment" variant="outlined"
       value={comment} 
       onChange={(e)=> setcomment(e.target.value)}

      />
       <TextField id="outlined-basic" label="Feedback" variant="outlined"
       value={feedback} 
       onChange={(e)=> setfeedback(e.target.value)}

      />
      <Button variant="contained" onClick={submitValue}>Submit</Button>
      
    </Box>
  );
}
